import React from 'react';

interface GridNewsProps {
    list: string[];
}


const GridNews: React.FC<GridNewsProps> = ({ list }) => {
    return (
        <div className="grid grid-cols-3 w-fit h-fit overflow-y-auto">
            {list.map((element, index) => (
                <div key={index} className="text-center px-5 py-5 mx-2 my-2 border-solid border-white border-2">
                    <img src="https://as2.ftcdn.net/v2/jpg/04/79/39/21/1000_F_479392118_SyGDm9Rewoxp5kpSiQBMVd96nl2M4GZs.jpg" alt="placeholder"></img>
                    <p>{element}</p>
                </div>
            ))}
        </div>
    );
}
export default GridNews;