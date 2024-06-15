import React from 'react'

const Eventcalendar = () => {
    const testlist = [
        {
            id:1,
            title:"ปฏิทินการศึกษา ภาคต้น - ปลาย ปีการศึกษา 2567 และภาคฤดูร้อน ปีพ.ศ.2568",
            date:"(Tcas 1-4) ศ.7 - ศ.14 มิ.ย.67"
        },
        {
            id:2,
            title:"นิสิตใหม่ :ขึ้นทะเบียนเป็นนิสิตใหม่ออนไลน์ผ่านระบบ https://isea.ku.ac.th/STDWeb และลงทะเบียนยืนยันตัวบุคคลเพื่อใช้งานบัญชีผู้ใช้เครือข่ายนนทรี (Nontri Account) ของมหาวิทยาลัยเกษตรศาสตร์ ผ่านระบบhttps://accounts.ku.ac.th",
            date:"(Tcas 1-4) ศ.7 - ศ.14 มิ.ย.67"
        },
        {
            id:3,
            title:"นิสิตใหม่ : ใช้บัญชีผู้ใช้เครือข่ายนนทรี (Nontri Account) ที่ได้รับดำเนินการ Login เข้าระบบลงทะเบียนเรียนนิสิต my.ku.th เพื่อชำระค่าธรรมเนียมการศึกษาผ่าน Mobile Banking และ เข้าระบบสารสนเทศนิสิต www.reg.src.ku.ac.th สำหรับการตรวจสอบข้อมูลทา",
            date:"(Tcas 1-4) ศ.7 - ศ.14 มิ.ย.67"
        },
        {
            id:4,
            title:"ปฏิทินการศึกษา TEST TEST",
            date:"(Tcas 1-4) ศ.7 - ศ.14 มิ.ย.67"
        }
    ]
  return (
    <div className='h-screen flex justify-center font-kanit'>
      
        <div className=''>
            <div className='text-center m-10 text-3xl'>ปฏิทินกิจกรรม</div>
            <div className="p-4 grid grid-cols-3 gap-5 mx-10 font-semibold">
                <div className="flex items-center">ID</div>
                <div className="flex items-center">Title</div>
                <div className="flex items-center justify-end">Date</div>
            </div>
            {testlist.map((list, index) => (
            <div className="p-4 grid grid-cols-3 gap-5 border border-white/15 mx-10">
                <div className="flex items-center">{list.id}</div>
                <div className="flex items-center">{list.title}</div>
                <div className="flex items-center justify-end">{list.date}</div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Eventcalendar