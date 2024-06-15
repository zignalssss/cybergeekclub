'use client';
//import function and component

import Link from 'next/link';
import axios, { AxiosResponse } from 'axios'
import React, { useState , useEffect, use} from 'react'
import { MenuA, MenuItemDropdownA, MenuB, MenuItemDropdownB, MenuC, MenuItemDropdownC } from "../ui/navbar-menu";
import { motion } from "framer-motion";
import Hamburger from 'hamburger-react'
import { useSession, signOut } from 'next-auth/react'
//import icons and image
import { GoSignIn } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { FaFacebookSquare, FaCalendarAlt, FaInstagram } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { setServers } from 'dns';
import Image from 'next/image';

const variantsleft = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: "-100%" },
}

const variantsdown = {
	open: { opacity: 1, y: 0 },
	closed: { opacity: 0, y: "-10%" },
}
const Navbar = () => {
	const [activeA, setActiveA] = useState<string | null>(null); //for about
	const [activeB, setActiveB] = useState<string | null>(null); //for news
	const [activeC, setActiveC] = useState<string | null>(null); //for contact

	{ /*  section for mobile responsive */ }
	const [isOpen, setIsOpen] = useState(false)//nav mobile left

	const [isDrop1, setIsDrop1] = useState(false)//dropdown in nav Abou
	const [isDrop2, setIsDrop2] = useState(false)//dropdown in nav Contact
	const [isDrop3, setIsDrop3] = useState(false)//dropdown in nav News
	const navbarDrop1Handel = () => {
		setIsDrop1(!isDrop1);
		setIsDrop2(false);
		setIsDrop3(false);
	}
	const navbarDrop2Handel = () => {
		setIsDrop1(false);
		setIsDrop2(!isDrop2);
		setIsDrop3(false);
	}
	const navbarDrop3Handel = () => {
		setIsDrop1(false);
		setIsDrop2(false);
		setIsDrop3(!isDrop3);
	}
	const {data:session,status}:any = useSession();
	const [userData ,setuserData] = useState<any>({})
	const getData = async ()=>{
		try{
			const user_account = await axios.post("/api/user/getuser",{email : session.user.email})	
			setuserData(user_account.data.data)
		}catch(error){
			// console.log(error)
		}
	}
	useEffect(()=>{
		getData()
	},[session])
	return (
		<>
			<nav className="bg-opacity-60 shadow-5xl backdrop-filter backdrop-blur-sm sticky top-0 bg-black shadow shadow-white/[0.2] z-50 w-100 px-8 md:px-auto">
				<div className={`h-16 md:h-16 mx-auto md:px-4 flex  items-center justify-between flex-wrap md:flex-nowrap `}>

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
									หน้าหลัก
									<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
								</Link>
							</li>				
							<li className={`group md:px-4 md:py-2 transition-all duration-250 hover:scale-110 hover:text-green-400 `}>
								{status === 'authenticated' && session.user ? 
									(
										userData.document && 
											<Link href="/pendingpage">
												ส่งเอกสารการสมัคร
												<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
											</Link>
									)
									:
									<Link href="/sign-up">
										สมัครเข้าชมรม
										<span className="flex justify-center justify-items-center scale-0 group-hover:scale-100 transition-all duration-500 h-0.5 bg-green-400"></span>
									</Link>
								}
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
										<Link href="/coremember" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-3'>
												<FaPeopleGroup className='text-xl' />
												<div className='text-base'>บุคลากร</div>
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
						{status === 'authenticated' && session.user ? 
						<div className="dropdown dropdown-end">
							<div tabIndex={0} role="button" className='flex group '>
								<div className="avatar">
									<div className="transition-all duration-250 group-hover:drop-shadow-[0_0_10px_rgba(22,101,52)] w-7mt-2 md:w-10 rounded-full ring-2 ring-green-400 drop-shadow-[0_0_4px_rgba(22,101,52)]">
										{userData ? <img alt='profile' src={userData.profile_image? `/asset/profile/${userData.profile_image}`:`/asset/image/blank-prof.png`} width={16} height={16}/> : <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>}	
									</div>
								</div>

								<div className='mt-2 text-base indent-3 font-semibold text-white drop-shadow-[0_0_3px_rgba(255,255,255)] font-kanit'>
									{userData.display_name ? `${userData.display_name}` : "Loading..."}
								</div>
							</div>
							{/* dropdown-content */}
							<ul tabIndex={0} className={`bg-opacity-90  mt-5 font-kanit dropdown-content z-[1] menu p-2 ${userData.first_name_en ? `bg-black w-52 md:w-fit` : `skeleton bg-black w-60 h-72`} rounded-md border border-white/0.2`}>
								{userData.first_name_en && (
									<div className='flex flex-col gap-1'>
									<div className='text-base md:text-xl indent-3 font-semibold text-green-500 drop-shadow-[0_0_3px_rgba(22,101,52)]' >
									{userData.first_name_en}&nbsp;{userData.last_name_en}
									</div>
									<div className='text-base md:text-sm mb-2 indent-3 font-semibold text-white text-nowrap '>
									{userData.faculty_en}
									</div>
									<div className='flex items-center py-4 md:py-5 h-5 border rounded-md'>
										<div className='text-sm md:text-lg ml-2 font-semibold'>GeekPoint : <span className='font-normal'>{userData.point}</span></div>
									</div>
									<div className='flex items-center py-4 md:py-5 h-5 border rounded-md '>
										<div className='text-sm md:text-lg ml-2 font-semibold'>Status : <span className='font-normal'>{userData.status}</span></div>
									</div>
									<div className=' flex items-center py-4 mt-2 md:py-5 h-5 hover:bg-neutral-950  rounded-md'>
										<Link href="/settingpage">
											<div className='text-sm md:text-lg ml-2'>การตั้งค่า</div>
										</Link>
									</div>
									<div className=' flex items-center py-4 md:py-5 h-5 hover:bg-neutral-950 rounded-md'>
										<Link href="/useractivitieshistory">
											<div className='text-sm md:text-lg ml-2'>ประวัติการเข้าร่วมกิจกรรม</div>
										</Link>
									</div>
									<button className='group flex items-center md:py-5 py-4 h-5 hover:bg-red-900 rounded-md ' onClick={()=>{signOut({callbackUrl:'/'})}}>
										<div className=' text-sm md:text-lg  group-hover:text-white ml-2 text-red-500 '>ล็อคเอ้าท์</div>
									</button>

								</div>
								)}
							</ul>
						</div>
							:
							<Link href="/sign-in">
								<button className="font-kanit px-4 py-2   transition-all duration-250 hover:scale-110 hover:text-green-400 text-gray-50 rounded-xl flex items-center gap-2">
									<GoSignIn className=' text-2xl' />
									<span>เข้าสู่ระบบ</span>
								</button>
							</Link>
						}
					</div>

					{/* Responsive Navbar  Design*/}
					<div className="navbar lg:hidden">
						<div className="navbar-start">
							<Hamburger size={25} toggled={isOpen} rounded toggle={setIsOpen} />
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
							{status === 'authenticated' && session.user ?
								<div className="dropdown dropdown-end">
									<div tabIndex={0} role="button">
										<div className="avatar">
											<div className="w-9 mt-2 md:w-10 rounded-full ring-2 ring-green-400 drop-shadow-[0_0_7px_rgba(22,101,52)]">
											{userData ? <img alt='profile' src={userData.profile_image? `/asset/profile/${userData.profile_image}`:`/asset/image/blank-prof.png`} width={16} height={16}/> : <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>}	
											</div>
										</div>
									</div>
									{/* dropdown-content */}
									<ul tabIndex={0} className="bg-opacity-90  mt-5 font-kanit dropdown-content z-[1] menu p-2 bg-black rounded-md w-52 md:w-60 border border-white/0.2">
										<div className='flex flex-col gap-1'>
											<div className='text-base md:text-xl indent-3 font-semibold text-green-500 drop-shadow-[0_0_3px_rgba(22,101,52)]'>
												{userData.first_name_en}&nbsp;{userData.last_name_en}
											</div>
											<div className='text-xs md:text-sm mb-2 indent-3 font-semibold text-white '>
												{userData.faculty_en}
											</div>
											<div className='flex items-center py-4 md:py-5 h-5 border rounded-md'>
												<div className='text-sm md:text-lg ml-2 font-semibold'>GeekPoint : <span className='font-normal'>{userData.point}</span></div>
											</div>
											<div className='flex items-center py-4 md:py-5 h-5 border rounded-md '>
												<div className='text-sm md:text-lg ml-2 font-semibold'>Status : <span className='font-normal'>{userData.status}</span></div>
											</div>
											<div className='flex items-center py-4 mt-2 md:py-5 h-5 rounded-md hover:bg-neutral-950'>
												<Link href="/settingpage">
													<div className='text-sm md:text-lg ml-2'>การตั้งค่า</div>
												</Link>
											</div>
											<div className='flex items-center py-4 md:py-5 h-5 rounded-md hover:bg-neutral-950 '>
												<Link href="/useractivitieshistory">
													<div className='text-sm md:text-lg ml-2'>ประวัติการเข้าร่วมกิจกรรม</div>
												</Link>

											</div>
											<button className='group flex items-center md:py-5 py-4 h-5 hover:bg-red-900 rounded-md ' onClick={()=>{signOut({callbackUrl:'/'})}}>
												<div className=' text-sm md:text-lg  group-hover:text-white ml-2 text-red-500 '>ล็อคเอ้าท์</div>
											</button>

										</div>
									</ul>
								</div>
								:
								<Link href="/sign-in">
									<button className="mt-[10%] font-semibold underline underline-offset-4 font-kanit transition-all duration-250 hover:text-green-400 text-gray-50 flex gap-2 ">
										<GoSignIn className='text-sm mt-[5%]' />
										<span className=' text-sm' >เข้าสู่ระบบ</span>
									</button>
								</Link>
							}
						</div>
					</div>
				</div>
				<motion.div
					animate={isOpen ? "open" : "closed"}
					variants={variantsleft}
					transition={{ type: "spring", duration: 0.5 }}
					className={`${isOpen ? "flex justify-end relative z-100" : "hidden"} `}
				>
					<div
						className={`z-0 top-0 flex-1 font-kanit justify-self-center pb-3  lg:pb-0 lg:mt-0 lg:hidden ${isOpen ? 'p-12 lg:p-0 block' : 'hidden'
							}`}
					>
						<ul className="h-screen max-w-screen lg:h-auto items-center justify-center lg:flex ">
							<li className=" pb-6 text-base text-white py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:text-green-400  border-green-400  lg:hover:bg-transparent">
								<Link href="/" onClick={() => setIsOpen(!isOpen)}>
									<div className='ml-[7%] md:ml-3'>หน้าหลัก</div>
								</Link>
							</li>
							<li className={`${userData.document? `hidden border-0`:``}pb-6 text-base text-white py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:text-green-400  border-green-400  lg:hover:bg-transparent`}>
								{status === 'authenticated' && session.user ? 
									(userData.document ? 
									""
									: 
									<Link href="/pendingpage" onClick={() => setIsOpen(!isOpen)}>
										<div className='ml-[7%] md:ml-3'>ส่งเอกสารการสมัคร</div>
									</Link>
									)
									:
									<Link href="/sign-up" onClick={() => setIsOpen(!isOpen)}>
										<div className='ml-[7%] md:ml-3'>สมัครเข้าชมรม</div>
									</Link>
								}
							</li>
							<li className=" pb-6 text-base text-white py-2 px-6 text-center  border-b-2 lg:border-b-0    border-green-400  lg:hover:bg-transparent">

								<div onClick={navbarDrop1Handel} className='flex justify-center'>
									{isDrop1 ? <RiArrowDropDownLine className='mt-[1%] text-xl'/> : <RiArrowDropDownLine className='rotate-180 mt-[1%] text-xl'/>}
									<div>เกี่ยวกับเรา</div>
								</div>
								<motion.div 
								animate={isDrop1 ? "open" : "closed"}
								variants={variantsdown}
								transition={{duration:0.3}} 
								className={`${isDrop1 ? `flex` : `hidden`}`}
								>
									<ul className='flex flex-col gap-2 ml-3 mt-4'>
										<Link onClick={() => setIsOpen(!isOpen)} href="/clubbudget" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-2'>
												< TbMoneybag className='text-2xl' />
												<div className='text-sm '>งบประมาณ</div>
											</div>
										</Link>
										<Link onClick={() => setIsOpen(!isOpen)} href="/clubhistory" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<IoDocumentText className='text-2xl' />
												<div className='text-sm'>ประวัติชมรม</div>
											</div>
										</Link>
										<Link onClick={() => setIsOpen(!isOpen)} href="/coremember" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<FaPeopleGroup className='text-2xl' />
												<div className='text-sm'>บุคลากร</div>
											</div>
										</Link>

										<Link onClick={() => setIsOpen(!isOpen)} href="/clubactivities" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<IoIosNotifications className='text-2xl' />
												<div className='text-sm'>กิจกรรมองค์กร</div>
											</div>
										</Link>
									</ul>
								</motion.div>
							</li>
							<li className="pb-6 text-base text-white py-2 px-6 text-center  border-b-2 lg:border-b-0    border-green-400   md:hover:bg-transparent">
								<div onClick={navbarDrop2Handel} className='flex justify-center'>
								{isDrop2? <RiArrowDropDownLine className='mt-[1%] text-xl'/> : <RiArrowDropDownLine className='rotate-180 mt-[1%] text-xl'/>}
									<div>ข่าวสาร</div>
								</div>
								<motion.div 
								animate={isDrop2 ? "open" : "closed"}
								variants={variantsdown}
								transition={{duration:0.3}} 
								className={`${isDrop2 ? `flex` : `hidden`}`}
								>
									<ul className='flex flex-col gap-2 ml-3 mt-4'>
										<Link onClick={() => setIsOpen(!isOpen)} href="/news" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-2'>
												< MdAnnouncement className='text-2xl' />
												<div className='text-sm '>ข่าวสารชมรม</div>
											</div>
										</Link>
										<Link onClick={() => setIsOpen(!isOpen)} href="/eventcalendar" className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												<FaCalendarAlt className='text-2xl' />
												<div className='text-sm'>ปฏิทินกิจกรรม</div>
											</div>
										</Link>
									</ul>
								</motion.div>
							</li>
							<li className="pb-6 text-base text-white py-2 px-6 text-center  border-b-2 lg:border-b-0    border-green-400   md:hover:bg-transparent">
								<div onClick={navbarDrop3Handel} className='flex justify-center'>
									{isDrop3 ? <RiArrowDropDownLine className='mt-[1%] text-xl'/> : <RiArrowDropDownLine className='rotate-180 mt-[1%] text-xl'/>}
									<div>ติตต่อเรา</div>
								</div>
								<motion.div 
								animate={isDrop3 ? "open" : "closed"}
								variants={variantsdown}
								transition={{duration:0.3}} 
								className={`${isDrop3 ? `flex` : `hidden`}`}
								>
									<ul className='flex flex-col gap-2 ml-3 mt-4'>
										<Link onClick={() => setIsOpen(!isOpen)} href="https://www.instagram.com/cybergeek_club/" target='_blank' className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150  ">
											<div className='flex gap-2'>
												< FaInstagram className='text-2xl' />
												<div className='text-sm '>:cybergeekclub.src</div>
											</div>
										</Link>
										<Link onClick={() => setIsOpen(!isOpen)} href="https://www.facebook.com/cybergeekclub.kusrc" target='_blank' className="text-neutral-200 hover:text-neutral-400 hover:scale-110 transition-all duration-150 ">
											<div className='flex gap-2'>
												< FaFacebookSquare className='text-2xl' />
												<div className='text-sm'>:CyberGeekClub</div>
											</div>
										</Link>
									</ul>
								</motion.div>
							</li>

						</ul>
					</div>
				</motion.div>

				{/* Profile Info*/}



			</nav>

		</>
	)
}
export default Navbar