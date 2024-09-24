import React from "react";
import { Link } from 'react-router-dom';

export const Box = ({ player1, player2, status, wager, gameId }) => {
    return (
        <div className="relative w-[342px] h-[77px] bg-[#a55ae20a] rounded-lg border border-solid border-[#a55ae21a] backdrop-blur-[3.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.6px)_brightness(100%)]">
            <div className="absolute w-[126px] top-[9px] left-[15px] font-normal text-white text-base whitespace-nowrap">
                {player1}
            </div>
            <div className="absolute w-[126px] top-[42px] left-[15px] font-normal text-white text-base whitespace-nowrap">
                {player2}
            </div>
            <div className="absolute w-3 top-[30px] left-4 font-medium text-white text-[10px] whitespace-nowrap">
                vs
            </div>

            {/* Conditional rendering based on game status */}
            {status === 'Waiting for Player 2' ? (
                <Link to={`/game/${gameId}`}>
                    <button className="absolute w-24 h-7 top-[41px] left-[237px] bg-[#d0bcff80] rounded">
                        <div className="flex items-center justify-center gap-2 px-6 py-2.5 relative -top-1.5">
                            <div className="font-medium text-[#381e72] text-sm text-center">Join Now</div>
                        </div>
                    </button>
                </Link>
            ) : (
                <button className="absolute w-24 h-7 top-[41px] left-[237px] bg-[#d0bcff80] rounded opacity-50 cursor-not-allowed">
                    <div className="flex items-center justify-center gap-2 px-6 py-2.5 relative -top-1.5">
                        <div className="font-medium text-[#381e72] text-sm text-center">In Progress</div>
                    </div>
                </button>
            )}

            <div className="absolute w-[76px] h-[18px] top-[9px] left-[238px] bg-[#ffffffb2] rounded-sm">
                <div className="font-normal text-[#065e24] text-[10px] text-center">
                    {status}
                </div>
            </div>
            <div className="absolute w-[34px] h-[45px] top-4 left-[164px]">
                <img className="w-8 h-8" alt="Fluent emoji coin" src="/assets/icons/fluent-emoji_coin.svg" />
                <div className="font-medium text-white text-sm text-center">
                    {wager}$
                </div>
            </div>
        </div>
    );
};
