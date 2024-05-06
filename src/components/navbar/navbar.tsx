'use client'
import React, { useState } from 'react'
import { GoSignIn } from "react-icons/go";
import Link from 'next/link';
import {MenuA, MenuItemDropdownA,MenuB, MenuItemDropdownB,MenuC, MenuItemDropdownC } from "../ui/navbar-menu";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";

const navbar = () => {
	const [activeA, setActiveA] = useState<string | null>(null); //for about
	const [activeB, setActiveB] = useState<string | null>(null); //for news
	const [activeC, setActiveC] = useState<string | null>(null); //for contact
	

	return (
		<>
			<nav className=" bg-opacity-60 shadow-5xl backdrop-filter backdrop-blur-sm sticky top-0 bg-black shadow shadow-gray-700 z-50 w-100 px-8 md:px-auto">
				<div className="md:h-16 h-28 mx-auto md:px-4 flex items-center justify-between flex-wrap md:flex-nowrap">
					<Link href="/">
						<div className="text-white font-semibold font-kanit md:order-1 transition-all duration-250 hover:scale-110 ">
							<div className='text-2xl px-4'>
								CGC
							</div>
							<div className='text-xs'>
								CyberGeekClub
							</div>
						</div>
					</Link>
					<div className="text-white order-3 w-full md:w-auto md:order-2">
						<ul className="flex font-semibold justify-between  font-kanit">
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

							<MenuA setActiveA={setActiveA}>
								<MenuItemDropdownA setActiveA={setActiveA} activeA={activeA} item="เกี่ยวกับเรา">
									<div className="flex flex-col space-y-4 text-sm ">
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black  ">
											<div className='flex gap-3'>
												< TbMoneybag  className='text-xl'/>
												<div className='text-base '>งบประมาณ</div>
											</div>
										</Link>
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
											<div className='flex gap-3'>
												<IoDocumentText  className='text-xl'/>
												<div className='text-base'>ประวัติชมรม</div>
											</div>
										</Link>
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
											<div className='flex gap-3'>
												<FaPeopleGroup  className='text-xl'/>
												<div className='text-base'>บุคคลากร</div>
											</div>
										</Link>
										
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
											<div className='flex gap-3'>
												<IoIosNotifications  className='text-xl'/>
												<div className='text-base'>กิจกรรมองค์กร</div>
											</div>
										</Link>
									</div>
								</MenuItemDropdownA>
							</MenuA>

							<MenuB setActiveB={setActiveB}>
								<MenuItemDropdownB setActiveB={setActiveB} activeB={activeB} item="ข่าวสาร">
									<div className="flex flex-col space-y-4 text-sm ">
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black  ">
											<div className='flex gap-3'>
												< TbMoneybag  className='text-xl'/>
												<div className='text-base '>งบประมาณ</div>
											</div>
										</Link>
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
											<div className='flex gap-3'>
												<IoDocumentText  className='text-xl'/>
												<div className='text-base'>ประวัติชมรม</div>
											</div>
										</Link>
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
											<div className='flex gap-3'>
												<FaPeopleGroup  className='text-xl'/>
												<div className='text-base'>บุคคลากร</div>
											</div>
										</Link>
										
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
											<div className='flex gap-3'>
												<IoIosNotifications  className='text-xl'/>
												<div className='text-base'>กิจกรรมองค์กร</div>
											</div>
										</Link>
									</div>
								</MenuItemDropdownB>
							</MenuB>

							<MenuC setActiveC={setActiveC}>
								<MenuItemDropdownC setActiveC={setActiveC} activeC={activeC} item="ติตต่อเรา">
									<div className="flex flex-col space-y-4 text-sm ">
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black  ">
											<div className='flex gap-3'>
												< TbMoneybag  className='text-xl'/>
												<div className='text-base '>งบประมาณ</div>
											</div>
										</Link>
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
											<div className='flex gap-3'>
												<IoDocumentText  className='text-xl'/>
												<div className='text-base'>ประวัติชมรม</div>
											</div>
										</Link>
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
											<div className='flex gap-3'>
												<FaPeopleGroup  className='text-xl'/>
												<div className='text-base'>บุคคลากร</div>
											</div>
										</Link>
										
										<Link href="/clubbudget" className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
											<div className='flex gap-3'>
												<IoIosNotifications  className='text-xl'/>
												<div className='text-base'>กิจกรรมองค์กร</div>
											</div>
										</Link>
									</div>
								</MenuItemDropdownC>
							</MenuC>
						</ul>
					</div>
					<div className="order-2 md:order-3">
						<button className="px-4 py-2   transition-all duration-250 hover:scale-110 hover:text-green-400 text-gray-50 rounded-xl flex items-center gap-2">
							<GoSignIn className=' text-2xl' />
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