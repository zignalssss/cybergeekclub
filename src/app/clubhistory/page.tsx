import React from 'react'

const ClubHistory = () => {
  return (
    <div className='min-h-screen h-fit flex justify-center font-kanit'>
        <div className='flex flex-col place-items-center'>
          <div className='text-4xl font-extrabold text-center m-10'>
              ประวัติชมรม
          </div>
          <div className='mb-5'>
            <div className='mb-5 text-center text-xl md:w-[1000px]  flex justify-start flex-col md:flex-row'>
              ชื่อชมรม: <span><span className='text-green-500 font-semibold'>CyberGeekClub</span> (ชมรมไซเบอร์กีก)</span>
            </div>
            <div className='text-center text-xl md:w-[1000px] flex justify-start flex-col md:flex-row'>
              สถานที่ตั้ง: <span className='text-green-500 font-semibold'> Kasetsart University Sriracha Campus</span>
            </div>
          </div>
          <div className='text-xl w-11/12 md:w-[1000px] indent-10'>
            ชมรมเราได้ก่อตั้งมาจากความตั้งใจของคนที่มีความชอบในด้านคอมพิวเตอร์เข้าด้วยกันเพื่อพัฒนาและแก้ปัญหาด้านเทคโนโลยีภายในมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชาและสังคม พร้อมทั้งพัฒนาศักยภาพและให้ความรู้ทางด้านเทคโนโลยีให้แก่นิสิตและบุคคลทั่วไป
            และ สร้างชื่อเสียงให้มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา
          </div>
          <iframe className='m-10 w-[800px] h-[400px] border-3 border-green-600' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6566497284875!2d100.91662417586338!3d13.120924387208346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b67ef835f265%3A0x963c6129282e5cb!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiB4Lip4LiV4Lij4Lio4Liy4Liq4LiV4Lij4LmMIOC4p-C4tOC4l-C4ouC4suC5gOC4guC4leC4qOC4o-C4teC4o-C4suC4iuC4sg!5e0!3m2!1sth!2sth!4v1718827369142!5m2!1sth!2sth" ></iframe>
        </div>
    </div>
  )
}

export default ClubHistory