import React from 'react';

const RankInfo = ({ rank, earnings }) => {
    return (
        <div className="relative w-[342px] h-[77px]  bg-[#a55ae20a] rounded-lg border border-solid border-[#a55ae21a] backdrop-blur-[3.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.6px)_brightness(100%)]">
                <div className="absolute w-[126px] top-[9px] left-[15px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    My Rank #{rank}
                </div>
                <div className="absolute w-[126px] top-[42px] left-[15px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Amount Earned ${earnings}
                </div>
            </div>
    );
};

export default RankInfo;

