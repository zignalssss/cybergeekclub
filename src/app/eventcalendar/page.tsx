"use client"
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {formatThaiDateOnly} from '@/lib/utils/formatDate'
import { activity_calendar } from '@prisma/client'

// !Comment this line when you start development
// const testActivity_calendar: activity_calendar[] = [
//     {
//         id: "1",
//         particulars_th: "กิจกรรมที่ 1",
//         particulars_en: "Activity 1",
//         start_period: new Date(),
//         end_period: new Date(),
//         built : new Date()
//     },
//     {
//         id: "2",
//         particulars_th: "กิจกรรมที่ 2",
//         particulars_en: "Activity 2",
//         start_period: new Date(),
//         end_period: new Date(),
//         built : new Date()
//     },
//     {
//         id: "3",
//         particulars_th: "กิจกรรมที่ 3",
//         particulars_en: "Activity 3",
//         start_period: new Date(),
//         end_period: new Date(),
//         built : new Date()
//     },
//     {
//         id: "4",
//         particulars_th: "กิจกรรมที่ 4",
//         particulars_en: "Activity 4",
//         start_period: new Date(),
//         end_period: new Date(),
//         built : new Date()
//     },
//     {
//         id: "5",
//         particulars_th: "กิจกรรมที่ 5",
//         particulars_en: "Activity 5",
//         start_period: new Date(),
//         end_period: new Date(),
//         built : new Date()
//     }
// ]

const Eventcalendar = () => {
    const [calendarObj, setcalendarObj] = useState<activity_calendar[]>([] as activity_calendar[]);
    const getCalendar = async()=>{
        try{
            const evencalendar = await axios.get('/api/calendaractivities/getallcalendar');     
            setcalendarObj(evencalendar.data.data)   
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getCalendar();
    },[])
    return (
        <div className='min-h-screen h-fit md:h-screen flex justify-center font-kanit overflow-x-auto'>
        
            <div className='mb-5 w-11/12 min-w-[400px]'>
                <div className=' text-center m-10 text-4xl font-extrabold'>ปฏิทินกิจกรรม</div>
                <div className="p-4 grid grid-cols-3 gap-5 mx-10 font-semibold ">
                    <div className="flex items-center">ID</div>
                    <div className="flex items-center">Title</div>
                    <div className="flex items-center justify-end">Date</div>
                </div>
                {/* calendarObj for Product / testActivity_calendar for testing*/}
                {calendarObj.length != 0 ? 
                    calendarObj.map((list, index) => (
                    <div key={index} className="p-4 grid grid-cols-3 gap-5 border border-white/15 mx-10">
                        <div className="flex items-center">{index+1}</div>
                        <div className="flex items-center max-w-10 md:max-w-fit">{list.particulars_th}</div>
                        <div className="flex items-center justify-end">{formatThaiDateOnly(list.start_period.toString())} - {formatThaiDateOnly(list.end_period.toString())}</div>
                    </div>
                    )) 
                :
                    <div className='text-center text-xl m-10'>Activity Not Found</div>
                }
            </div>
        </div>
  )
}

export default Eventcalendar