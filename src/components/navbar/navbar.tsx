'use client';
//import function and component

import Link from 'next/link';
import React, { useState } from 'react'
import { MenuA, MenuItemDropdownA, MenuB, MenuItemDropdownB, MenuC, MenuItemDropdownC } from "../ui/navbar-menu";
import { motion } from "framer-motion";

//import icons and image
import { GoSignIn } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { FaFacebookSquare, FaCalendarAlt, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdAnnouncement } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const variantsleft = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: "-100%" },
}
const variantsright = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: "100%" },
}

const navbar = () => {
	const [activeA, setActiveA] = useState<string | null>(null); //for about
	const [activeB, setActiveB] = useState<string | null>(null); //for news
	const [activeC, setActiveC] = useState<string | null>(null); //for contact
	const [isOpen, setIsOpen] = useState(true)//nav mobile
	const [isDrop, setIsDrop] = useState(false)
	const [isLogin,setIsLogin] = useState(true)
	return (
		<>
			<nav className="bg-opacity-60 shadow-5xl backdrop-filter backdrop-blur-sm sticky top-0 bg-black shadow shadow-white/[0.2] z-50 w-100 px-8 md:px-auto">
				<div className="h-16 md:h-16 mx-auto md:px-4 flex  items-center justify-between flex-wrap md:flex-nowrap">

					<Link href="/">
						<div className="hidden lg:grid mt-1 md:mt-0 text-white font-semibold font-kanit order-2 md:order-1 transition-all duration-250 hover:scale-110 ">
							<div className='text-xl px-5 md:text-2xl md:px-4'>
								CGC
							</div>
							<div className='text-xs md:text-xs'>
								CyberGeekClub
							</div>
						</div>
					</Link>
					<div className="text-white order-3 w-full md:w-auto md:order-2">
						<ul className="hidden lg:flex font-semibold justify-between font-kanit">
							<li className="text-green-400 group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400">
								<Link href="/">
									หน้าเเรก
									<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
								</Link>
							</li>
							<li className="group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400">
								<Link href="#">
									สมัครเข้าชมรม
									<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
								</Link>
							</li>

							<MenuA setActiveA={setActiveA}>
								<MenuItemDropdownA setActiveA={setActiveA} activeA={activeA} item="เกี่ยวกับเรา">
									<div className="flex flex-col space-y-4 text-sm ">
										<Link href="/clubbudget" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-3'>
												< TbMoneybag className='text-xl' />
												<div className='text-base '>งบประมาณ</div>
											</div>
										</Link>
										<Link href="/clubhistory" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-3'>
												<IoDocumentText className='text-xl' />
												<div className='text-base'>ประวัติชมรม</div>
											</div>
										</Link>
										<Link href="/clubmember" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-3'>
												<FaPeopleGroup className='text-xl' />
												<div className='text-base'>บุคคลากร</div>
											</div>
										</Link>

										<Link href="/clubactivities" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-3'>
												<IoIosNotifications className='text-xl' />
												<div className='text-base'>กิจกรรมองค์กร</div>
											</div>
										</Link>
									</div>
								</MenuItemDropdownA>
							</MenuA>

							<MenuB setActiveB={setActiveB}>
								<MenuItemDropdownB setActiveB={setActiveB} activeB={activeB} item="ข่าวสาร">
									<div className="flex flex-col space-y-4 text-sm ">
										<Link href="/news" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-3'>
												< MdAnnouncement className='text-xl' />
												<div className='text-base '>ข่าวสารชมรม</div>
											</div>
										</Link>
										<Link href="/eventcalendar" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-3'>
												<FaCalendarAlt className='text-xl' />
												<div className='text-base'>ปฏิทินกิจกรรม</div>
											</div>
										</Link>

									</div>
								</MenuItemDropdownB>
							</MenuB>

							<MenuC setActiveC={setActiveC}>
								<MenuItemDropdownC setActiveC={setActiveC} activeC={activeC} item="ติตต่อเรา">
									<div className="flex flex-col space-y-4 text-sm">
										<Link href="https://www.instagram.com/cybergeek_club/" target='_blank' className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-3'>
												< FaInstagram className='text-xl' />
												<div className='text-base '>: cybergeekclub.src</div>
											</div>
										</Link>
										<Link href="https://www.facebook.com/cybergeekclub.kusrc" target='_blank' className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-3'>
												< FaFacebookSquare className='text-xl' />
												<div className='text-base'>: CyberGeekClub</div>
											</div>
										</Link>

									</div>
								</MenuItemDropdownC>
							</MenuC>
						</ul>
					</div>
					<div className="hidden  lg:flex order-2 md:order-3">
						<Link href="/sign-in">
							<button className="font-kanit px-4 py-2   transition-all duration-250 hover:scale-110 hover:text-green-400 text-gray-50 rounded-xl flex items-center gap-2">
								<GoSignIn className=' text-2xl' />
								<span>เข้าสู่ระบบ</span>
							</button>
						</Link>
					</div>
					{/* <div className='lg:hidden grid grid-cols-3 gap-11'>
						<div className='btn ' onClick={() => { setIsOpen(!isOpen) }}>
							teet
						</div>
						<div className='font-kanit font-semibold r'>
							<div className='text-xl px-5 md:text-2xl md:px-4'>
								CGC
							</div>
							<div className='text-xs md:text-xs'>
								CyberGeekClub
							</div>
						</div>
						<div className="avatar">
							<div className="w-12 scale-75 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
							</div>
						</div>
					</div> */}
					<div className="navbar ">
						<div className="navbar-start">
							<div className="dropdown">
								<button onClick={() => { setIsOpen(!isOpen) }}>
									{isOpen?< IoMdClose className='mt-3 text-2xl md:text-4xl transition-all duration-250'/> : <IoMenu className='mt-3 text-2xl md:text-4xl transition-all duration-250'/>}
									
								</button>
							</div>
						</div>
						<div className="navbar-center">
							<div className='font-kanit font-semibold r'>
								<div className='text-xl px-5 md:text-2xl md:px-4'>
									CGC
								</div>
								<div className='text-xs md:text-xs'>
									CyberGeekClub
								</div>
							</div>
						</div>
						<div className="navbar-end">
							<button className="btn btn-ghost btn-circle">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
							</button>
							<button className="btn btn-ghost btn-circle">
								<div className="indicator">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
									<span className="badge badge-xs badge-primary indicator-item"></span>
								</div>
							</button>
						</div>
					</div>
				</div>
				{/* Responsive Navbar  Design*/}

				<motion.div
					animate={isOpen ? "open" : "closed"}
					variants={variantsleft}
					transition={{ type: "spring", duration: 0.5 }}
					className='flex justify-end relative z-100'
				>
					<div
						className={`z-0 top-0 flex-1 font-kanit justify-self-center pb-3  lg:pb-0 lg:mt-0 lg:hidden ${isOpen ? 'p-12 lg:p-0 block' : 'hidden'
							}`}
					>
						<ul className="h-screen max-w-screen lg:h-auto items-center justify-center lg:flex ">
							<li className="pb-6 text-base text-white py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:text-green-400  border-green-400  lg:hover:bg-transparent">
								<Link href="/" onClick={() => setIsOpen(!isOpen)}>
									หน้าเเรก
								</Link>
							</li>
							<li className="pb-6 text-base text-white py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:text-green-400  border-green-400  lg:hover:bg-transparent">
								<Link href="/" onClick={() => setIsOpen(!isOpen)}>
									สมัครเข้าชมรม
								</Link>
							</li>
							<li className=" pb-6 text-base text-white py-2 px-6 text-center  border-b-2 lg:border-b-0    border-green-400  lg:hover:bg-transparent">

								<details>
									<summary>เกี่ยวกับเรา</summary>
									<ul className='flex flex-col gap-2 ml-3 mt-4'>
										<Link href="/clubbudget" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-2'>
												< TbMoneybag className='text-2xl' />
												<div className='text-sm '>งบประมาณ</div>
											</div>
										</Link>
										<Link href="/clubhistory" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<IoDocumentText className='text-2xl' />
												<div className='text-sm'>ประวัติชมรม</div>
											</div>
										</Link>
										<Link href="/clubmember" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<FaPeopleGroup className='text-2xl' />
												<div className='text-sm'>บุคคลากร</div>
											</div>
										</Link>

										<Link href="/clubactivities" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<IoIosNotifications className='text-2xl' />
												<div className='text-sm'>กิจกรรมองค์กร</div>
											</div>
										</Link>
									</ul>
								</details>
							</li>
							<li className="pb-6 text-base text-white py-2 px-6 text-center  border-b-2 lg:border-b-0    border-green-400   md:hover:bg-transparent">

								<details>
									<summary>ข่าวสาร</summary>
									<ul className='flex flex-col gap-2 ml-3 mt-4'>
										<Link href="/news" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-2'>
												< MdAnnouncement className='text-2xl' />
												<div className='text-sm '>ข่าวสารชมรม</div>
											</div>
										</Link>
										<Link href="/eventcalendar" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<FaCalendarAlt className='text-2xl' />
												<div className='text-sm'>ปฏิทินกิจกรรม</div>
											</div>
										</Link>

									</ul>
								</details>
							</li>
							<li className="pb-6 text-base text-white py-2 px-6 text-center  border-b-2 lg:border-b-0    border-green-400   md:hover:bg-transparent">


								<div onClick={() => setIsDrop(!isDrop)}>
									ติตต่อเรา
								</div>
								<div className={`${isDrop ? `flex` : `hidden`}`}>
									<ul className='flex flex-col gap-2 ml-3 mt-4'>
										<Link href="https://www.instagram.com/cybergeek_club/" target='_blank' className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-2'>
												< FaInstagram className='text-2xl' />
												<div className='text-sm '>:cybergeekclub.src</div>
											</div>
										</Link>
										<Link href="https://www.facebook.com/cybergeekclub.kusrc" target='_blank' className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												< FaFacebookSquare className='text-2xl' />
												<div className='text-sm'>:CyberGeekClub</div>
											</div>
										</Link>
									</ul>
								</div>
							</li>
							<li>
								<Link href="/sign-in">
									<button className="font-kanit px-4 py-2   transition-all duration-250 hover:scale-110 hover:text-green-400 text-gray-50 rounded-xl flex items-center gap-2">
										<GoSignIn className=' text-2xl' />
										<span>เข้าสู่ระบบ</span>
									</button>
								</Link>
							</li>
						</ul>
					</div>
				</motion.div>
			</nav>

		</>
	)
}
export default navbar