import React from "react";
import GridNews from "@/components/news/grid-news";
import SearchNews from "@/components/searchEngine/searchNews";

export default function News({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  interface newsNewsObj {
    banner : string;
    title: string;
    detail: string;
  }
  const newsObj: newsNewsObj[] = [
    {
      banner : "https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686}",
      title: "สมาร์ทโฟนรุ่นใหม่จากบริษัทชั้นนำเปิดตัว",
      detail: "บริษัทชั้นนำในวงการเทคโนโลยีเปิดตัวสมาร์ทโฟนรุ่นใหม่ที่มาพร้อมกับคุณสมบัติและเทคโนโลยีล่าสุด เช่น กล้องความละเอียดสูง, โหมดถ่ายภาพใหม่, และปรับปรุงด้านประสิทธิภาพของระบบปฏิบัติการ",
    },
    {
      banner : "https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686}",
      title: "การเปิดตัวและการพัฒนาโดรนใหม่",
      detail: "บริษัทเทคโนโลยีชั้นนำเปิดตัวโดรนที่มีความสามารถในการบินและการถ่ายภาพที่สูงขึ้น โดรนรุ่นใหม่นี้มาพร้อมกับฟีเจอร์และความปลอดภัยที่ปรับปรุง",
    },
    {
      banner : "https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686}",
      title: "อุปกรณ์สวมใส่อัจฉริยะในการติดตามสุขภาพ",
      detail: "การเปิดตัวอุปกรณ์สวมใส่อัจฉริยะที่ช่วยในการติดตามสุขภาพและกิจกรรมการออกกำลังกายของผู้ใช้ อุปกรณ์ใหม่นี้มีฟีเจอร์ต่างๆ เช่น ตรวจวัดการนอนหลับ, ติดตามอารมณ์, และการวัดความเครียด",
    },
    {
      banner : "https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686}",
      title: "การเปิดตัวเทคโนโลยีความจริงเสมือนในสถานการณ์เชิงการศึกษา",
      detail: "สถาบันการศึกษาและบริษัทเทคโนโลยีร่วมมือกันเปิดตัวโปรแกรมการเรียนการสอนที่ใช้เทคโนโลยีความจริงเสมือนในการสร้างประสบการณ์การเรียนที่มีความสมจริงและน่าสนใจสำหรับนักเรียน"
    },
  ];
  return (
    <>
      <div className="h-screen bg-black overflow-auto scroll-smooth scrollbar-hide">
        <h1 className="text-center text-4xl font-kanit font-bold py-10">
          ข่าวสารชมรม
        </h1>
        <SearchNews />
        <div className="flex justify-center w-[100vw] h-fit">
          <div className="bg-black w-4/5 h-4/5">
            <GridNews news={newsObj} query={query} />
          </div>
        </div>
      </div>
    </>
  );
}
