import React from "react";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";

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
      <div className="flex flex-col w-80 sm:w-[500px] md:w-[700px] h-fit ">
      <h1 className="text-center text-3xl font-kanit font-bold mb-10">
          {nowState === 3 ? (
            <div className="flex justify-center">
              <BsFillCheckCircleFill />
            </div>
          ) : nowState > 0 ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            "3 Step"
          )}
        </h1>
        <div className={`grid grid-cols-3 w-full h-fit`}>
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
