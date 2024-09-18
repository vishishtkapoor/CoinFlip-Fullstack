import React from 'react';
import User from '../components/user';

const History = () => {
    const historyData = [
        { id: 1, date: '2024-09-15', event: 'Won 100 coins in the Airdrop event' },
        { id: 2, date: '2024-09-14', event: 'Completed 5 mining tasks' },
        { id: 3, date: '2024-09-13', event: 'Earned 50 coins from referral' },
        { id: 4, date: '2024-09-12', event: 'Reached top 10 on the leaderboard' },
        { id: 1, date: '2024-09-15', event: 'Won 100 coins in the Airdrop event' },
        { id: 2, date: '2024-09-14', event: 'Completed 5 mining tasks' },
        { id: 3, date: '2024-09-13', event: 'Earned 50 coins from referral' },
        { id: 4, date: '2024-09-12', event: 'Reached top 10 on the leaderboard' },
        { id: 1, date: '2024-09-15', event: 'Won 100 coins in the Airdrop event' },
        { id: 2, date: '2024-09-14', event: 'Completed 5 mining tasks' },
        { id: 3, date: '2024-09-13', event: 'Earned 50 coins from referral' },
        { id: 4, date: '2024-09-12', event: 'Reached top 10 on the leaderboard' },
        { id: 1, date: '2024-09-15', event: 'Won 100 coins in the Airdrop event' },
        { id: 2, date: '2024-09-14', event: 'Completed 5 mining tasks' },
        { id: 3, date: '2024-09-13', event: 'Earned 50 coins from referral' },
        { id: 4, date: '2024-09-12', event: 'Reached top 10 on the leaderboard' },

    ];
    return (
        <div className="bg-white overflow-y-auto h-screen [background:linear-gradient(180deg,rgb(21.31,10.04,31.08)_0%,rgb(74,0,224)_100%)] flex flex-col items-center">
            <div className="w-full text-white h-full font-bold flex flex-col max-w-xs">
                <div className="flex flex-col items-center pt-4 pb-28">
                        <User />
                    <div className="mt-6 pt-12 pb-20 w-auto">
                        <h1 className="text-2xl font-bold mb-4">History</h1>

                        <ul className="history-list">
                            {historyData.map((item) => (
                                <li key={item.id} className="mb-2 p-4 bg-gray-800 text-white rounded-lg shadow-md">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">{item.date}</span>
                                        <span>{item.event}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default History;
