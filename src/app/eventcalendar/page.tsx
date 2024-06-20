"use client"
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {formatThaiDateOnly} from '@/lib/utils/formatDate'
interface calendarObj {
    id : string  
    particulars_th : string   
    particulars_en : string    
    start_period : string  
    end_period : string  
    built    : string  
}
const Eventcalendar = () => {
    const [calendarObj, setcalendarObj] = useState<calendarObj[]>([]);
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
                {calendarObj.length != 0 ? 
                    calendarObj.map((list, index) => (
                    <div key={index} className="p-4 grid grid-cols-3 gap-5 border border-white/15 mx-10">
                        <div className="flex items-center">{list.id}</div>
                        <div className="flex items-center max-w-10 md:max-w-fit">{list.particulars_th}</div>
                        <div className="flex items-center justify-end">{formatThaiDateOnly(list.start_period)} - {formatThaiDateOnly(list.end_period)}</div>
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