import React from 'react'

const Eventcalendar = () => {
    const testlist = [

        {
            id:1,
            title:"ค่าย CGC Coding Camp",
            date:"(Tcas 1-4) ศ.7 - ศ.14 มิ.ย.67"
        },
        {
            id:2,
            title:"ค่าย CGC Cyber 101",
            date:"(Tcas 1-4) ศ.7 - ศ.14 มิ.ย.67"
        },
        {
            id:3,
            title:"เสื้อรวมใจ CyberGeek",
            date:"(Tcas 1-4) ศ.7 - ศ.14 มิ.ย.67"
        }
    ]
  return (
    <div className='h-fit md:h-screen flex justify-center font-kanit'>
      
        <div className='mb-5'>
            <div className=' text-center m-10 text-3xl'>ปฏิทินกิจกรรม</div>
            <div className="p-4 grid grid-cols-3 gap-5 mx-10 font-semibold">
                <div className="flex items-center">ID</div>
                <div className="flex items-center">Title</div>
                <div className="flex items-center justify-end">Date</div>
            </div>
            {testlist.map((list, index) => (
            <div key={index} className="p-4 grid grid-cols-3 gap-5 border border-white/15 mx-10">
                <div className="flex items-center">{list.id}</div>
                <div className="flex items-center max-w-10 md:max-w-40">{list.title}</div>
                <div className="flex items-center justify-end">{list.date}</div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Eventcalendar