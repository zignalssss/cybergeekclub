"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import Image from "next/image";
import logoIcon from "../img/logoCGC_TW.svg";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="pointer-events-none">
        <Image
          priority
          alt="Logo"
          className="z-0 scale-90"
          src={logoIcon}
          width={500}
          height={500}
        />
      </h1>
      <p className="flex text-center mt-2 text-neutral-300 relative z-20 pointer-events-none gap-4">
        <FaQuoteLeft /> 
        NOTHING WILL WORK UNLESS YOU DO
        <FaQuoteRight />
      </p>
    </div>
  );
}
