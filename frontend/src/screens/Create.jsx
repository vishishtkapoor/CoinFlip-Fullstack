import React from "react";
import CreateGame from "../components/creategame";
import User from "../components/user";

const Create = () => {
    // Example function to handle game creation
    const handleGameCreated = (gameData) => {
        console.log('New game created:', gameData);
        // You can handle game data (e.g., save it or update state) here
    };

    return (
        <div className="bg-white overflow-scroll h-screen [background:linear-gradient(180deg,rgb(21.31,10.04,31.08)_0%,rgb(74,0,224)_100%)] flex justify-center">
            <div className="w-full text-white h-full font-bold flex flex-col max-w-xs">
                <div className="flex flex-col pt-4">
                        <User />
                    {/* Include CreateGame Component */}
                    <div className="pt-32 flex justify-center">
                        <CreateGame onGameCreated={handleGameCreated} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Create;
