"use client";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Send_File = dynamic(()=> import("@/components/pendingPage/sendFile/component"))
const ShowStatus = dynamic(()=> import("@/components/pendingPage/status/component"))

type LIST = {
  time : string;
  name : string;
  status: "pending" | "accept" | "deny" | "error";
  note : string;
}

const PendingPage = () => {
  const [right, setRight] = useState<boolean>(false);
  const controls: AnimationControls = useAnimation();
  const handleButton1 = () => {
    setRight(false);
  }
  const handleButton2 = () => {
    setRight(true);
  }
  useEffect(() => {
    const updateAnimation = () => {
      const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;
      controls.start({ x: right ? (isMediumScreen ? 190 : 95) : 0 });
    };

    updateAnimation();
    window.addEventListener("resize", updateAnimation);

    return () => window.removeEventListener("resize", updateAnimation);
  }, [right, controls]);
  const tmp : LIST[] = [
    {
      time : "1-1-1",
      name : "test",
      status : "pending",
      note : "รอ Admin ตรวจสอบข้อมูลและยืนยัน",
    },
    {
      time : "1-1-1",
      name : "test",
      status : "accept",
      note : "ยืนยันแล้ว ยินดีต้อนรับ",
    },
    {
      time : "1-1-1",
      name : "test",
      status : "deny",
      note : "โปรดกรอกอีเมลของมหาวิทยาลัยเกษรตศาตร์ (@ku.th)",
    },
    {
      time : "1-1-1",
      name : "test",
      status : "error",
      note : "เกิดข้อผิดพลาด โปรดอัพโหลดไฟล์ของท่านอีกครั้ง",
    },
  ]
  return (
    <div className="h-screen flex flex-col">
      <div className="p-10">
        <h1 className="text-center text-3xl font-kanit">กำลังดำเนินการ</h1>
      </div>
      <div className="flex justify-center">
        <div className="border border-white md:h-16 md:w-96 h-16 w-48 rounded-3xl grid grid-cols-2 transition-all duration-75 font-kanit">
          <motion.div
            className="absolute md:w-48 md:h-16 w-24 h-16 bg-green-500 rounded-3xl z-0 "
            animate = {controls}
          ></motion.div>
          <button id="btn1" className={`z-10 ${!right? "text-black" : "text-white"}`} onClick={handleButton1}>ส่งใบสมัคร</button>
          <button id="btn2" className={`z-10 ${right? "text-black" : "text-white"}`} onClick={handleButton2}>สถานะ</button>
        </div>
      </div>
      <div className={`${right? "!hidden" : ""} flex justify-center`}>
        <Send_File/>
      </div>
      <div className={`${!right? "!hidden" : ""} flex justify-center`}>
        <ShowStatus prop={tmp}/>
      </div>
    </div>
  );
};

export default PendingPage;
