import React from 'react'
import { GoSignIn } from "react-icons/go";


const navbar = () => {
  return (
    <>
	<nav className=" bg-opacity-60 shadow-5xl backdrop-filter backdrop-blur-sm sticky top-0 bg-black shadow shadow-gray-700 z-50 w-100 px-8 md:px-auto">
		<div className="md:h-16 h-28 mx-auto md:px-4 flex items-center justify-between flex-wrap md:flex-nowrap">
			<div className="text-white font-semibold font-kanit md:order-1 transition-all duration-250 hover:scale-110 ">
					<div className='text-2xl px-4'>
						CGC
					</div>
					<div className='text-xs'>
						CyberGeekClub
					</div>
			</div>
			<div className="text-white order-3 w-full md:w-auto md:order-2">
				<ul className="flex font-semibold justify-between ">
				
					<li className="group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400">
						<a href="#">
							สมัครเข้าชมรม
							<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
						</a>
					</li>
					<li className="group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400">
						<a href="#" >
							เกี่ยวกับเรา
							<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
						</a>
					</li>
					<li className="group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400">
						<a href="#" >
							ข่าวสาร
							<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
						</a>
					</li>
					<li className="group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400">
						<a href="#" >
							ติตต่อเรา
							<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
						</a>
					</li>
				</ul>
			</div>
			<div className="order-2 md:order-3">
				<button className="px-4 py-2   transition-all duration-250 hover:scale-110 hover:text-green-400 text-gray-50 rounded-xl flex items-center gap-2">
					<GoSignIn className=' text-2xl'/>
					<span>เข้าสู่ระบบ</span>
				</button>
			</div>
		</div>
	</nav>
   
    </>
  )
}

export default navbar