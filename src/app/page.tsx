"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import Image from "next/image";
import logoIcon from "../img/logoCGC_TW.svg";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Suspense } from "react";

export default function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.6,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* <Boxes /> */}
      <div className="pointer-events-none">
        <Image
          priority
          alt="Logo"
          className="z-0 scale-90"
          src={logoIcon}
          width={500}
          height={500}
        />
      </div>

      <p className="flex text-center mt-2 text-neutral-300 relative z-20 pointer-events-none gap-4">
        <FaQuoteLeft /> 
        NOTHING WILL WORK UNLESS YOU DO
        <FaQuoteRight />
      </p>
    </motion.div>
  );
}
