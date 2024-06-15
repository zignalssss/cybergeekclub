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
            title:"ปฏิทินการศึกษา TEST TEST",
            date:"(Tcas 1-4) ศ.7 - ศ.14 มิ.ย.67"
        }
    ]
  return (
    <div className='h-screen flex justify-center font-kanit'>
      
        <div className=''>
            <div className='text-center m-10 text-3xl'>ปฏิทินกิจกรรม</div>
           {testlist.map((list,index) =>(
                 <div className='p-4 grid grid-cols-3 gap-96 border border-white/15 mx-5'>
                    <div>{list.id}</div>
                    <div>{list.title}</div>
                    <div>{list.date}</div>
                 </div>
           ))}
            
        </div>
    </div>
  )
}

export default Eventcalendar