import React from "react";
import { motion } from "framer-motion";
type Prop = {
  maximumState: number;
  nowState: number;
  text : string[];
};

export default function ProgressBar({ maximumState, nowState, text}: Prop) {
  const createDivs = (count: number): JSX.Element[] => {
    let divs: JSX.Element[] = [];
    for (let i = 0; i < count && text.length != 0; i++) {
      divs.push(
        <div key={i} className="text-center font-kanit">
          {text[i]}
        </div>
      );
    }
    return divs;
  };

  const percentage = (nowState / maximumState) * 100;
  return (
    <>
      <div className="flex flex-col w-auto h-20 ">
        <div className={`grid grid-cols-${maximumState} w-full h-fit`}>
            {createDivs(maximumState)}
        </div>
        <div className="w-full h-5 bg-[#302E2E] rounded-lg">
          <motion.div
            className="h-full bg-green-500 transition-all duration-250 rounded-lg"
            style={{ width: `${percentage}%` }}
          ></motion.div>
        </div>
      </div>
    </>
  );
}
