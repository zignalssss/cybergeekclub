import React from 'react'
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "CGC's Coding Camp",
    description:
      "เป็นโอกาสที่ไม่ควรพลาดสำหรับผู้ที่สนใจเรียนรู้การเขียนโปรแกรมและการพัฒนาซอฟต์แวร์ ไม่ว่าคุณจะเป็นมือใหม่ที่ไม่มีประสบการณ์เลยในการเขียนโค้ดหรือเป็นผู้มีประสบการณ์บางส่วนแล้ว ทุกคนมีที่สำหรับเรียนรู้",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/imagecovercoding.png?alt=media&token=97d9b3fe-68b6-4bd5-a05f-c46a6e330b4e"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      // <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      //   Collaborative Editing
      // </div>
    ),
  },
  {
    title: "Code Battle Contest",
    description:
      "Code Battle Contestโดยมุ่งเน้นการแข่งขันเขียนโค้ด กิจกรรมที่ท้าทายความสามารถของนักพัฒนาโปรแกรม โดยผู้เข้าแข่งขันต้องแก้โจทย์ปัญหาด้วยการเขียนโปรแกรมภายในเวลาที่กำหนด โดยวัดผลจาก ความถูกต้องของโค้ด, ประสิทธิภาพในการทำงาน, และระยะเวลาในการแก้ปัญหา เน้นการแก้โจทย์ปัญหาเชิงอัลกอริทึม",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/479499595_17909433204090492_987256973228160542_n.webp?alt=media&token=71041285-0203-4cb1-adc7-24420082fd36"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];

const Stickyscroll = () => {
  return (
    <div className='mt-20 h-screen '>
    <div className='mb-20 font-kanit text-xl md:text-3xl font-semibold flex justify-center '> กิจกรรมองค์กร  </div>
    <StickyScroll content={content}/>
  </div>
  )
}

export default Stickyscroll