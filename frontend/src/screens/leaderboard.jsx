import React from 'react';
import '../App.css'; // Adjust if needed
import LeaderboardList from '../components/LeadboardList';
import RankInfo from '../components/RankInfo';
import User from '../components/user';

function Leaderboard() {
    const userRank = 1071; // Example rank
    const userEarnings = 3600; // Example earnings

    // Leaderboard data for "All Time"
    const allTimeData = [
        { username: 'Tyler', earnings: 19400 },
        { username: 'Michael', earnings: 18800 },
        { username: 'Rick_Harrison', earnings: 17600 },
        { username: 'Corey_Anderson', earnings: 16900 },
        { username: 'Josephine', earnings: 15800 },
        { username: 'Tyler', earnings: 19400 },
        { username: 'Michael', earnings: 18800 },
        { username: 'Rick_Harrison', earnings: 17600 },
        { username: 'Corey_Anderson', earnings: 16900 },
        { username: 'Josephine', earnings: 15800 },
        { username: 'Tyler', earnings: 19400 },
        { username: 'Michael', earnings: 18800 },
        { username: 'Rick_Harrison', earnings: 17600 },
        { username: 'Corey_Anderson', earnings: 16900 },
        { username: 'Josephine', earnings: 15800 },
    ];

    return (
        <div className="bg-white overflow-auto h-screen [background:linear-gradient(180deg,rgb(21.31,10.04,31.08)_0%,rgb(74,0,224)_100%)] flex flex-col items-center">
            <div className="w-full text-white h-full font-bold flex flex-col max-w-xs">
                    <div className="flex flex-col items-center pt-4 pb-28">
                        <User />
                        {/* Rank Information */}
                        <div className='pt-6'>
                            <RankInfo rank={userRank} earnings={userEarnings} />
                        </div>

                        {/* Leaderboard List */}
                        <div className='pt-6'>
                            <LeaderboardList leaderboard={allTimeData} />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Leaderboard;
