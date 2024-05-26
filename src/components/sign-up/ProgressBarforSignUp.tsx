import React from "react";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";


type Prop = {
  maximumState: number;
  nowState: number;
  text: string[];
};

export default function ProgressBar({ maximumState, nowState, text }: Prop) {
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
            <div className="flex justify-center text-green-500 animate-bounce">
              <BsFillCheckCircleFill className="animate-spinner-ease-spin"/>
            </div>
          ) : nowState > 0 ? (
            <span className="loading loading-dots loading-lg animate-pulse"></span>
          ) : (
            <div className="animate-bounce">3 step</div>
          )}
        </h1>
        <div className={`grid grid-cols-3 w-full h-fit`}>
          {createDivs(maximumState)}
        </div>
        <div className="w-full h-5 bg-[#302E2E] rounded-lg">
          <motion.div
            className="h-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="h-full bg-green-500 rounded-lg"
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1,
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
