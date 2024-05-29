import React from "react";
import dynamic from "next/dynamic";
const SearchActivities = dynamic(()=> import("@/components/searchEngine/searchActivities"));
const GridActivities = dynamic(()=> import("@/components/activities/GridActivities"));

const Activities: React.FC<{ searchParams?: { query?: string } }> = ({
  searchParams,
}) => {
  const query = searchParams?.query || "";
  const activitiesObj = [
    {
      banner:
        "https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686",
      title: "สมาร์ทโฟนรุ่นใหม่จากบริษัทชั้นนำเปิดตัว",
      detail:
        "บริษัทชั้นนำในวงการเทคโนโลยีเปิดตัวสมาร์ทโฟนรุ่นใหม่ที่มาพร้อมกับคุณสมบัติและเทคโนโลยีล่าสุด เช่น กล้องความละเอียดสูง, โหมดถ่ายภาพใหม่, และปรับปรุงด้านประสิทธิภาพของระบบปฏิบัติการ",
    },
    {
      banner:
        "https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686}",
      title: "สมาร์ทโฟนรุ่นใหม่จากบริษัทชั้นนำเปิดตัว",
      detail:
        "บริษัทชั้นนำในวงการเทคโนโลยีเปิดตัวสมาร์ทโฟนรุ่นใหม่ที่มาพร้อมกับคุณสมบัติและเทคโนโลยีล่าสุด เช่น กล้องความละเอียดสูง, โหมดถ่ายภาพใหม่, และปรับปรุงด้านประสิทธิภาพของระบบปฏิบัติการ",
    },
    {
      banner:
        "https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686}",
      title: "การเปิดตัวและการพัฒนาโดรนใหม่",
      detail:
        "บริษัทเทคโนโลยีชั้นนำเปิดตัวโดรนที่มีความสามารถในการบินและการถ่ายภาพที่สูงขึ้น โดรนรุ่นใหม่นี้มาพร้อมกับฟีเจอร์และความปลอดภัยที่ปรับปรุง",
    },
    {
      banner:
        "https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686}",
      title: "อุปกรณ์สวมใส่อัจฉริยะในการติดตามสุขภาพ",
      detail:
        "การเปิดตัวอุปกรณ์สวมใส่อัจฉริยะที่ช่วยในการติดตามสุขภาพและกิจกรรมการออกกำลังกายของผู้ใช้ อุปกรณ์ใหม่นี้มีฟีเจอร์ต่างๆ เช่น ตรวจวัดการนอนหลับ, ติดตามอารมณ์, และการวัดความเครียด",
    },
    {
      banner:
        "https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logblack-removebg-preview%20(1).png?alt=media&token=ab43e614-6226-41be-9f3c-771305b3b686}",
      title: "การเปิดตัวเทคโนโลยีความจริงเสมือนในสถานการณ์เชิงการศึกษา",
      detail:
        "สถาบันการศึกษาและบริษัทเทคโนโลยีร่วมมือกันเปิดตัวโปรแกรมการเรียนการสอนที่ใช้เทคโนโลยีความจริงเสมือนในการสร้างประสบการณ์การเรียนที่มีความสมจริงและน่าสนใจสำหรับนักเรียน",
    },
  ];
  return (
    <>
      <div className="h-fit">
        <h1 className="text-3xl font-kanit text-center p-10">กิจกรรมองค์กร</h1>
        <SearchActivities />
        <div className="flex justify-center w-full h-fit">
          <div className="bg-black w-4/5 h-4/5">
            <GridActivities activities={activitiesObj} query={query}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
