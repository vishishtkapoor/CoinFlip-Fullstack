"use client"

import { useState, useCallback } from "react"
import { motion, useAnimation } from "framer-motion"

const Confetti = ({ isActive }) => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {isActive && colors.map((color, index) => (
                <motion.div
                    key={index}
                    className="absolute left-1/2 bottom-1/2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ x: 0, y: 0, scale: 0 }}
                    animate={{
                        x: Math.random() * 200 - 100,
                        y: Math.random() * -200 - 50,
                        scale: Math.random() * 2 + 1,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: Math.random() * 0.2,
                    }}
                />
            ))}
        </div>
    )
}

export default function Flip() {
    const [isHeads, setIsHeads] = useState(true)
    const [isFlipping, setIsFlipping] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)
    const controls = useAnimation()

    const flipCoin = useCallback(async () => {
        if (!isFlipping) {
            setIsFlipping(true)
            setShowConfetti(false)
            await controls.start({
                rotateY: 1800,
                transition: {
                    duration: 2,
                    ease: [0.645, 0.045, 0.355, 1.000],
                },
            })
            setIsHeads(Math.random() < 0.5)
            setIsFlipping(false)
            controls.set({ rotateY: 0 })
            setShowConfetti(true)
            setTimeout(() => setShowConfetti(false), 1000)
        }
    }, [isFlipping, controls])

    return (
        <div className="flex items-start pt-6 justify-center h-60 rounded-md bg-gradient-to-r perspective-1000">
            <div className="relative">
                <motion.div
                    className="w-48 h-48 cursor-pointer"
                    animate={controls}
                    onClick={flipCoin}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <div className="absolute w-full h-full rounded-full bg-yellow-400 flex items-center justify-center shadow-lg"
                        style={{ backfaceVisibility: "hidden" }}>
                        {/* Heads side */}
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            <circle cx="100" cy="100" r="90" fill="#FFD700" stroke="#B8860B" strokeWidth="5" />
                            <circle cx="100" cy="100" r="80" fill="#FFC800" />
                            <text x="100" y="115" fontSize="60" textAnchor="middle" fill="#B8860B" fontWeight="bold">H</text>
                            <circle cx="100" cy="100" r="40" fill="none" stroke="#B8860B" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="absolute w-full h-full rounded-full bg-yellow-400 flex items-center justify-center shadow-lg"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                        {/* Tails side */}
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            <circle cx="100" cy="100" r="90" fill="#FFD700" stroke="#B8860B" strokeWidth="5" />
                            <circle cx="100" cy="100" r="80" fill="#FFC800" />
                            <text x="100" y="115" fontSize="60" textAnchor="middle" fill="#B8860B" fontWeight="bold">T</text>
                            <path d="M60,80 Q100,120 140,80" fill="none" stroke="#B8860B" strokeWidth="3" />
                        </svg>
                    </div>
                </motion.div>
                {/* Shadow */}
                <motion.div
                    className="absolute bottom-0 left-1/2 w-40 h-10 bg-black rounded-full opacity-20 blur-md"
                    animate={{
                        scaleX: isFlipping ? 0.6 : 1,
                        scaleY: isFlipping ? 0.6 : 1,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    style={{
                        transform: "translateX(-50%)",
                    }}
                />
                <Confetti isActive={showConfetti} />
            </div>
        </div>
    )
}
