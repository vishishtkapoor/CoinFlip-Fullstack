import React from "react";

const User = () => {
    return (
        <div className='pt-4 pb-4'>
            {/* Title */}
            < div className="w-full h-auto text-center bg-[inherit] text-white font-bold text-3xl leading-tight [font-family:'Poppins',Helvetica] tracking-normal" >
                TON COINFLIP
            </div >

            {/* Profile Image and Name */}
            < div className="flex items-center justify-center mt-6 space-x-2" >
                <img
                    className="w-6 h-6"
                    alt="Profile"
                    src="https://c.animaapp.com/yhNCsQCB/img/group-16@2x.png"
                />
                <div className="ml-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    John Doe
                </div>
            </div >
            </div>
            );
}
export default User;