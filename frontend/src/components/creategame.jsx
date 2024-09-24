import React, { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

const CreateGame = ({ onGameCreated }) => {
    const [wager, setWager] = useState('');
    const [choice, setChoice] = useState('');
    const [socket, setSocket] = useState(null);
    const [gameId, setGameId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [connected, setConnected] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [playerJoined, setPlayerJoined] = useState(false);

    const navigate = useNavigate();

    // Initialize socket connection
    const initializeSocket = useCallback(() => {
        console.log('Initializing socket connection...');
        const newSocket = io('http://localhost:4000', {
            transports: ['websocket'],
        });
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Socket connected:', newSocket.id);
            setConnected(true);
        });
        newSocket.on('disconnect', () => {
            console.log('Socket disconnected');
            setConnected(false);
        });
        newSocket.on('connect_error', (error) => {
            console.error('Socket connection error:', error);
            setConnected(false);
        });

        newSocket.on('playerJoined', (data) => {
            console.log('Another player joined:', data);
            setPlayerJoined(true);
        });

        // Cleanup on component unmount
        return () => {
            newSocket.close();
        };
    }, []);

    // Establish socket connection on mount
    useEffect(() => {
        const cleanupSocket = initializeSocket();
        return cleanupSocket;
    }, [initializeSocket]);

    const handleCreateGame = () => {
        if (!wager) {
            setErrorMessage('Please enter a wager amount!');
            return;
        }

        if (!choice) {
            setErrorMessage('Please select Heads or Tails!');
            return;
        }

        if (!socket) {
            setErrorMessage('Socket is not initialized!');
            return;
        }

        if (!connected) {
            setErrorMessage('Socket connection not established!');
            return;
        }

        setLoading(true);

        const gameData = {
            player1: 'You',  // Replace with actual player data
            wager: Number(wager),
            choice,
        };

        console.log('Emitting createGame event with data:', gameData);

        socket.emit('createGame', gameData, (response) => {
            setLoading(false);
            if (response.success) {
                setGameId(response.gameId);
                onGameCreated({ ...gameData, gameId: response.gameId });

                // Ensure socket stays connected when navigating
                navigate(`/game/${response.gameId}`, { replace: true });
            } else {
                setErrorMessage('Failed to create game!');
            }
        });
    };

    const handleChoiceSelection = (selectedChoice) => {
        setChoice(selectedChoice);
        setErrorMessage('');  // Clear any previous errors
    };

    return (
        <div className="w-full max-w-md p-6 bg-[#a55ae20a] rounded-lg border border-solid border-[#a55ae21a] backdrop-blur-[3.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.6px)_brightness(100%)]">
            <h2 className="text-2xl font-semibold mb-4">Create a Game</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 pb-2">Wager Amount ($)</label>
                <input
                    type="number"
                    value={wager}
                    onChange={(e) => setWager(e.target.value)}
                    className="w-full px-3 py-2 bg-[#412b7e] rounded-md text-white focus:outline-none"
                    placeholder="Enter Wager Amount"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 pb-2">Choose Heads or Tails</label>
                <div className="flex space-x-4">
                    <button
                        className={`w-full py-2 ${choice === 'heads' ? 'bg-[#d0bcff]' : 'bg-[#d0bcff80]'} hover:bg-[#b09ad4] text-[#381e72] font-semibold rounded-md transition duration-200`}
                        onClick={() => handleChoiceSelection('heads')}
                    >
                        Heads
                    </button>
                    <button
                        className={`w-full py-2 ${choice === 'tails' ? 'bg-[#d0bcff]' : 'bg-[#d0bcff80]'} hover:bg-[#b09ad4] text-[#381e72] font-semibold rounded-md transition duration-200`}
                        onClick={() => handleChoiceSelection('tails')}
                    >
                        Tails
                    </button>
                </div>
            </div>

            <button
                onClick={handleCreateGame}
                className="w-full py-2 bg-[#d0bcff80] hover:bg-[#b09ad4] text-[#381e72] font-semibold rounded-md transition duration-200"
                disabled={loading}
            >
                {loading ? 'Creating Game...' : 'Create Game'}
            </button>

            {gameId && (
                <div className="mt-4">
                    <p>Game ID: {gameId}</p>
                </div>
            )}

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            {playerJoined && (
                <div className="mt-4">
                    <p>A second player has joined the game!</p>
                </div>
            )}
        </div>
    );
};

export default CreateGame;
