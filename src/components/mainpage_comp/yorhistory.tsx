'use client';
import React from 'react'
import Link from 'next/link';

const yorhistory = () => {
  return (
    <div className='flex justify-center h-screen font-kanit'>
      <div className='flex flex-col justify-center'>
        <h1 className=' ml-[10%] md:ml-[20%] lg:ml-[25%] xl:ml-[30%]  text-sm md:text-2xl font-semibold mb-10'><span className=' drop-shadow-[0_0_3px_rgba(22,101,52)] text-green-500 underline underline-offset-8 mr-3'>C y b e r G e e k C l u b</span> เป็นชมรมเกี่ยวกับอะไร?</h1>
        <p className='ml-[10%] md:ml=0 max-w-80 md:max-w-2xl lg:max-w-4xl xl:lg:max-w-6xl text-sm md:text-xl text-neutral-300 indent-10'>เราเป็นชมรมที่เกี่ยวกับ Technology CyberSecurity เเละ Coding เราเชื่อว่าเทคโนโลยีและการโค้ดมี perpotential ที่ยิ่งใหญ่ในการประเมินและแก้ไขปัญหาที่ท้าทายในโลกปัจจุบัน ไม่ว่าจะเป็นการพัฒนาเว็บไซต์ การสร้างแอพพลิเคชั่น หรือ การเขียนโค้ดที่ช่วยในการ Analyze data เราจึงมีความกระตือรือร้นที่จะเรียนรู้และแบ่งปันความรู้เกี่ยวกับ Technology เเละ Coding</p>
        <div className='flex justify-center mt-12'>
          <Link href="/sign-up">
            <button className="shadow-[0_4px_14px_0_rgb(22,101,52,39%)] hover:shadow-[0_6px_20px_rgba22,101,52,23%)] hover:bg-green-950 px-8 py-2 bg-green-900 rounded-md text-white font-light transition duration-200 ease-linear">
              <div className='group-hover:text-white transition-all duration-250 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]'>เข้าร่วมกับเรา</div>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default yorhistory