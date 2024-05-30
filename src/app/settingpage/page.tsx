import React from 'react'

const Settingpage = () => {
    return (
        <div className='bg-black h-fit md:h-screen grid md:grid-cols-[30%_70%] mb-5 md:mb-0'>
            <div className='font-kanit ml-[20%] border border-black border-r-white/15 '>
                <div className=' mt-14'>
                    <div className='text-2xl font-semibold'>การตั้งค่าบัญชี</div>
                    <div className='text-base'>Use a permanent address where you can receive mail.</div>
                </div>    
            </div>
            <div className='text-xl max-w-[90%] ml-5 mt-14 font-kanit '>
                <div className='flex flex-col gap-4 '>
                    <div className='flex items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-xl">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className='flex flex-col items-center ml-10'>
                            <div className="relative bg-green-900  px-3 h-8 leading-8 text-center text-sm rounded-md">
                            Change avatar
                            <input type="file" className="absolute inset-0 w-full h-full opacity-0" />
                        </div>
                        <div className='text-xs mt-2'>JPG or PNG. 1MB max.</div></div>
                    </div>
                    <div>
                        <div className='text-sm'>Display Name</div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                    </div>
                    <div className='grid grid-cols-[50%_50%] gap-2 md:grid-cols-[35%_65%]'>
                        <div>
                            <div className='text-sm'>First Name (EN)</div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        </div>
                        <div>
                            <div className='text-sm'>Last Name (EN)</div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        </div>
                    </div>
                    <div className='grid  grid-cols-[50%_50%] gap-2 md:grid-cols-[35%_65%] '>
                        <div>
                            <div className='text-sm'>ชื่อ (TH)</div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        </div>
                        <div>
                            <div className='text-sm'>นามสกุล (TH)</div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        </div>
                    </div>
                    <div className='grid grid-cols-[50%_50%] gap-2 md:grid-cols-[35%_65%] '>
                        <div>
                            <div className='text-sm'>Password</div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        </div>
                        <div>
                            <div className='text-sm'>Confirm Password</div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                        </div>
                    </div>
                    <div>
                        <div className='text-sm'>Phone Number</div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                    </div>
                    <div className='mt-3'>
                        <button className='bg-green-800 text-sm rounded-md px-4 py-2'>
                            Save Change
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settingpage