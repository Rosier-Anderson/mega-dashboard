import React from 'react';

// interface TotalSessionsCardProps {
//     totalSessions: number;
// }

const TotalSessionsCard = ({totalSessions } : {totalSessions: number} ) => {
    return (
        <div className="w-full h-20 bg-gray-700  rounded-md mt-2
       shadow text-gray-200">
            <h2 className="">Total Sessions</h2>
            <p className="">{totalSessions}</p>
        </div>
    );
};

export default TotalSessionsCard;