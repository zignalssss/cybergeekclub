import React from 'react'
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "CGC's Coding Camp",
    description:
      "เป็นโอกาสที่ไม่ควรพลาดสำหรับผู้ที่สนใจเรียนรู้การเขียนโปรแกรมและการพัฒนาซอฟต์แวร์ ไม่ว่าคุณจะเป็นมือใหม่ที่ไม่มีประสบการณ์เลยในการเขียนโค้ดหรือเป็นผู้มีประสบการณ์บางส่วนแล้ว ทุกคนมีที่สำหรับเรียนรู้",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "CGC's CyberSecurity Camp",
    description:
      "ค่าย CyberSecurity Camp เป็นที่สำหรับผู้ที่สนใจเรียนรู้เกี่ยวกับความมั่นคงปลอดภัยทางไซเบอร์และการเข้าร่วมการแข่งขัน Capture The Flag (CTF) โดยไม่จำเป็นต้องมีประสบการณ์มาก่อน ทุกคนที่สนใจเรียนรู้เกี่ยวกับเรื่องนี้มีโอกาสเข้าร่วมและเรียนรู้ได้ที่นี่!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686%7D"
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