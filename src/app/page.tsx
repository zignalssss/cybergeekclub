"use client";
//import function and component
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { motion } from "framer-motion";
import Yorhistory from "@/components/mainpage_comp/yorhistory";

// import icon and image
import Image from "next/image";
import logoIcon from "../img/logoCGC_TW.svg";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { Suspense } from "react";
export default function Home() {
  return (
    <>
      <div>
        <div className=" inset-0  z-20  pointer-events-none h-[100vh] w-full bg-black ]  bg-grid-white/[0.1]  relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent,black)]"></div>
          <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.6,
             delay: 0.1,
             ease: [0, 0.71, 0.2, 1.01]
           }}
           className="flex flex-col items-center"
          >
            <Image
              priority
              alt="Logo"
              className="z-0 scale-90"
              src={logoIcon}
              width={500}
              height={500}
            />
            <p className="flex text-center mt-2 text-neutral-300 text-sm md:text-base relative z-20 pointer-events-none gap-4">
              <FaQuoteLeft />
              NOTHING WILL WORK UNLESS YOU DO
              <FaQuoteRight />
            </p>
        </motion.div>
      </div>
    </div >
      <Yorhistory />
    </>
  );
}
