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

const variants = {
	open: { opacity: 1, y: 0 },
	closed: { opacity: 0, y: "-100%" },
}

const navbar = () => {
	const [activeA, setActiveA] = useState<string | null>(null); //for about
	const [activeB, setActiveB] = useState<string | null>(null); //for news
	const [activeC, setActiveC] = useState<string | null>(null); //for contact
	const [isOpen, setIsOpen] = useState(true)//nav mobile
	const [activeMobile, setActiveMobile] = useState<string | null>(null); //for NavMobile

	return (
		<>
			<nav className="bg-opacity-60 shadow-5xl backdrop-filter backdrop-blur-sm sticky top-0 bg-black shadow shadow-white/[0.2] z-50 w-100 px-8 md:px-auto">
				<div className="h-16 md:h-16 mx-auto md:px-4 flex items-center justify-between flex-wrap md:flex-nowrap">

					<Link href="/">
						<div className="mt-1 md:mt-0 text-white font-semibold font-kanit md:order-1 transition-all duration-250 hover:scale-110 ">
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
					<div className='lg:hidden md:order-3'>
						<button className='btn text-white' onClick={() => { setIsOpen(!isOpen) }}>
							This is But
						</button>
					</div>
				</div>

				<motion.div
					animate={isOpen ? "open" : "closed"}
					variants={variants}
					transition={{ type: "spring", duration: 0.5 }}
					className='flex justify-end relative z-100'
				>
					<div
						className={`z-0 top-0 flex-1 font-kanit justify-self-center pb-3  lg:pb-0 lg:mt-0 lg:hidden ${isOpen ? 'p-12 lg:p-0 block' : 'hidden'
							}`}
					>
						<ul className="h-screen w-52 lg:h-auto items-center justify-center lg:flex ">
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
								{/* <Link href="#blog" onClick={() => setIsOpen(!isOpen)}>
									Blogs
								</Link> */}
								<details>
									<summary>เกี่ยวกับเรา</summary>
									<ul>
										<Link href="/clubbudget" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-2'>
												< TbMoneybag className='text-xl' />
												<div className='text-base '>งบประมาณ</div>
											</div>
										</Link>
										<Link href="/clubhistory" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<IoDocumentText className='text-xl' />
												<div className='text-base'>ประวัติชมรม</div>
											</div>
										</Link>
										<Link href="/clubmember" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<FaPeopleGroup className='text-xl' />
												<div className='text-base'>บุคคลากร</div>
											</div>
										</Link>

										<Link href="/clubactivities" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<IoIosNotifications className='text-xl' />
												<div className='text-base'>กิจกรรมองค์กร</div>
											</div>
										</Link>
									</ul>
								</details>
							</li>
							<li className="pb-6 text-base text-white py-2 px-6 text-center  border-b-2 lg:border-b-0    border-green-400   md:hover:bg-transparent">
								{/* <Link href="#contact" onClick={() => setIsOpen(!isOpen)}>
									Contact
								</Link> */}
								<details>
									<summary>ข่าวสาร</summary>
									<ul>
										<Link href="/news" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-2'>
												< MdAnnouncement className='text-xl' />
												<div className='text-base '>ข่าวสารชมรม</div>
											</div>
										</Link>
										<Link href="/eventcalendar" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<FaCalendarAlt className='text-xl' />
												<div className='text-base'>ปฏิทินกิจกรรม</div>
											</div>
										</Link>

									</ul>
								</details>
							</li>
							<li className="pb-6 text-base text-white py-2 px-6 text-center  border-b-2 lg:border-b-0    border-green-400   md:hover:bg-transparent">
								{/* <Link href="#projects" onClick={() => setIsOpen(!isOpen)}>
									Projects
								</Link> */}
								<details>
									<summary>ติตต่อเรา</summary>
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
								</details>
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