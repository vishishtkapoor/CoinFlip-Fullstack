import React from 'react';

const LeaderboardList = ({ leaderboard }) => {
    return (
        <div className="relative w-[342px] mx-auto rounded-lg bg-[#a55ae20a] rounded-lg border border-solid border-[#a55ae21a] backdrop-blur-[3.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.6px)_brightness(100%)]">
            <div className="leaderboard-list divide-y divide-[#a55ae21a] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap ">
                {leaderboard.map((entry, index) => (
                    <div
                        key={index}
                        className="flex justify-between py-3 px-4 text-white"
                    >
                        <span className="text-base text-left w-8">{index + 1}</span>
                        <span className="text-base flex-grow text-center">{entry.username}</span>
                        <span className="text-base text-right">${entry.earnings}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaderboardList;
