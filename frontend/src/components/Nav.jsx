import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-12 bg-gray-800 flex justify-around items-center shadow-md">
            <Link to="/" className="text-white text-lg p-2 hover:bg-gray-600 rounded-md">
                <button>
                    <img
                        className="w-28 h-6 mt-2"
                        alt="Home"
                        src="/assets/icons/fluent-mdl2_game (1).svg"
                    />
                </button>
            </Link>
            <Link to="/Create" className="text-white text-lg p-2 hover:bg-gray-600 rounded-md">
                <button>
                    <img
                        className="w-28 h-6 mt-2"
                        alt="History"
                        src="/assets/icons/icon.svg"
                    />
                </button>
            </Link>
            <Link to="/leaderboard" className="text-white text-lg p-2 hover:bg-gray-600 rounded-md">
                <button>
                    <img
                        className="w-28 h-6 mt-2"
                        alt="Leaderboard"
                        src="/assets/icons/Leaderboard (1).svg"
                    />
                </button>
            </Link>

            <Link to="/History" className="text-white text-lg p-2 hover:bg-gray-600 rounded-md">
                <button>
                    <img
                        className="w-28 h-6 mt-2"
                        alt="History"
                        src="/assets/icons/icon set (1).svg"
                    />
                </button>
            </Link>

        </nav>
    );
};

export default NavBar;

