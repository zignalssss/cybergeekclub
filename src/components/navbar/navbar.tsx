'use client'
import React,{useState}from 'react'
import { GoSignIn } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HoveredLink, Menu, MenuItem} from "../ui/navbar-menu";

const navbar = () => {
const [active, setActive] = useState<string | null>(null);

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
					<li className="text-green-400 group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400">
						<a href="#">
							หน้าเเรก
							<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
						</a>
					</li>
					<li className="group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400">
						<a href="#">
							สมัครเข้าชมรม
							<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
						</a>
					</li>
					
					<Menu setActive={setActive}>
						<MenuItem setActive={setActive} active={active} item="เกี่ยวกับเรา">
							<div className="flex flex-col space-y-4 text-sm">
								<HoveredLink href="/web-dev">Web Development</HoveredLink>
								<HoveredLink href="/interface-design">Interface Design</HoveredLink>
								<HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
								<HoveredLink href="/branding">Branding</HoveredLink>
							</div>
						</MenuItem>
						
					</Menu>
				
					{/* <details className="dropdown">
						<summary className=" group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400 text-white btn hover:bg-black bg-black border-none">
							เกียวกับเรา
							<RiArrowDropDownLine />
						</summary>
						<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>

						<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
							<li><a>Item 1</a></li>
							<li><a>Item 2</a></li>
						</ul>
					</details> */}

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
const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm hover:underline">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};
export default navbar