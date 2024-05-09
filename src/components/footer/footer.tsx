import React from 'react'
import {FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Link from 'next/link';
const footer = () => {
    return (
        <footer className=" shadow shadow-white/[0.4] footer p-10 bg-black text-neutral-content">
             <div className='flex  font-kanit font-semibold'>
                    <div>
                        <div className='text-xl px-5 md:text-2xl md:px-4'>
                            CGC
                        </div>
                        <div className='text-xs md:text-xs'>
                            CyberGeekClub
                        </div>
                    </div>
                    <p className='mt-2 ml-3 md:mt-7 md:ml-3 text-xs md:text-sm'>Copyright © 2024 - All right reserved by CyberGeekClub</p>
            </div>
            
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4 text-2xl ">
                    <Link href="https://www.instagram.com/cybergeek_club/" target='_blank'>
                        <FaInstagram className='transition-all duration-250 hover:scale-125'/>
                    </Link>
                    <Link href="https://www.facebook.com/cybergeekclub.kusrc" target='_blank'>
                    <FaFacebookSquare className='transition-all duration-250 hover:scale-125'/>
                    </Link>
                </div>
            </nav>
        </footer>
    )
}

export default footer