'use client'
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
interface FormData {
    email: string,
    displayName: string;
    firstNameEn: string;
    lastNameEn: string;
    firstNameTh: string;
    lastNameTh: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
}


const Settingpage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        displayName: '',
        firstNameEn: '',
        lastNameEn: '',
        firstNameTh: '',
        lastNameTh: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [avatar, setAvatar] = useState<File | null>(null);
    const { data: session }: any = useSession();
    const [isError, setIsError] = useState<string>("")
    const [userData, setuserData] = useState<any>({})
    useEffect(() => {
        const getData = async () => {
            try {
                const user_account = await axios.post("/api/user/getuser", { email: session.user.email })
                setuserData(user_account.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [session])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setAvatar(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const filteredData = Object.fromEntries(
            Object.entries(formData).filter(([key, value]) => value)
        );

        let finalData = {
            ...filteredData,
        };
        if (avatar) {
            finalData = {
                ...filteredData,
                file: avatar,
            };
        }
        try {
            await axios.post('/api/user/updateuser', finalData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(response => {
                    setIsError("")
                    Toast.fire({
                        icon: "success",
                        title: "เเก้ไขข้อมูลสำเร็จ!!"
                    })
                        .then(() => {
                            window.location.reload();
                        })
                })
                .catch(error => {
                    setIsError(error.response.data.message)
                    Toast.fire({
                        icon: "error",
                        title: "เเก้ไขข้อมูลไม่สำเร็จ!!"
                    
                    })
                })
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className=' bg-black h-fit  grid md:grid-cols-[30%_70%] mb-5 md:mb-0 min-h-screen'>
            <title>Setting | CyberGeek</title>
            <div className='font-kanit ml-[20%] border border-black border-r-white/15 '>
                <div className=' mt-14'>
                    <div className='text-2xl font-semibold '>การตั้งค่า เเละ ข้อมูลผู้ใช้</div>
                    <div className='text-base'>โปรดตรวจสอบการตั้งค่าและข้อมูลผู้ใช้ของคุณ</div>
                </div>
            </div>
            <div className='text-xl max-w-[90%] md:max-w-[100%] mt-14 h-full font-kanit '>
                <div className='ml-5 max-w-[90%]'>
                    <div className='flex flex-col gap-4 '>
                        <div className='text-xl underline underline-offset-4'>การตั้งค่าบัญชี</div>
                        <div className='flex items-center'>
                            <div className="avatar">
                                <div className="w-24 rounded-xl border-2 border-green-500 ">
                                    <Image alt='profile' src={avatar ? URL.createObjectURL(avatar) : `${userData.profile_image ? `${userData.profile_image}` : `/asset/Image/cat.png`}`} width={100} height={100}/>
                                </div>
                            </div>
                            <div className='flex flex-col items-center ml-10'>
                                <div className="relative bg-green-900 px-3 h-8 leading-8 text-center text-sm rounded-md">
                                    Change avatar
                                    <input size={10 * 1024 * 1024} title='avatar' accept="image/*" type="file" className="absolute inset-0 w-full h-full opacity-0" onChange={handleAvatarChange} />
                                </div>
                                <div className='text-xs mt-2'>JPG or PNG. 10MB max.</div>
                            </div>
                        </div>
                        <div>
                            <div className='text-sm'>Display Name</div>
                            <input
                                type="text"
                                name="displayName"
                                value={formData.displayName}
                                onChange={handleChange}
                                placeholder={userData.display_name}
                                title="Display Name"
                                className="input input-bordered input-sm w-full max-w-xs mt-2"
                            />
                        </div>
                        <div className='grid grid-cols-[50%_50%] gap-2 md:grid-cols-[35%_65%]'>
                            <div>
                                <div className='text-sm'>First Name (EN)</div>
                                <input
                                    type="text"
                                    name="firstNameEn"
                                    value={formData.firstNameEn}
                                    onChange={handleChange}
                                    placeholder={userData.first_name_en}
                                    className="input input-bordered input-sm w-full max-w-xs mt-2"
                                />
                            </div>
                            <div>
                                <div className='text-sm'>Last Name (EN)</div>
                                <input
                                    type="text"
                                    name="lastNameEn"
                                    value={formData.lastNameEn}
                                    onChange={handleChange}
                                    placeholder={userData.last_name_en}
                                    className="input input-bordered input-sm w-full max-w-xs mt-2"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-[50%_50%] gap-2 md:grid-cols-[35%_65%] '>
                            <div>
                                <div className='text-sm'>ชื่อ (TH)</div>
                                <input
                                    type="text"
                                    name="firstNameTh"
                                    value={formData.firstNameTh}
                                    onChange={handleChange}
                                    placeholder={userData.first_name_th}
                                    className="input input-bordered input-sm w-full max-w-xs mt-2"
                                />
                            </div>
                            <div>
                                <div className='text-sm'>นามสกุล (TH)</div>
                                <input
                                    type="text"
                                    name="lastNameTh"
                                    value={formData.lastNameTh}
                                    onChange={handleChange}
                                    placeholder={userData.last_name_th}
                                    className="input input-bordered input-sm w-full max-w-xs mt-2"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-[50%_50%] gap-2 md:grid-cols-[35%_65%] '>
                            <div>
                                <div className='text-sm'>Password</div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="#$%!1234"
                                    className="input input-bordered input-sm w-full max-w-xs mt-2"
                                />
                            </div>
                            <div>
                                <div className='text-sm'>Confirm Password</div>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="#$%!1234"
                                    className="input input-bordered input-sm w-full max-w-xs mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <div className='text-sm'>Phone Number</div>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Type here"
                                className="input input-bordered input-sm w-full max-w-xs mt-2"
                            />
                        </div>
                        {isError && (
                            <div className=" text-red-500 text-base font-kanit ">
                                {isError}
                            </div>
                        )}
                        <div className='mt-3'>
                            <button type="submit" className='bg-green-800 text-sm rounded-md px-4 py-2' disabled={isLoading} >
                                {isLoading ? <div>Changing&nbsp;<span className="loading loading-spinner loading-xs text-white/25"></span></div> : "Save Change"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='border mb-5 border-black border-t-white/15 mt-5 font-kanit text-xl h-fit'>
                    <div className='ml-5 '>
                        <div className='mb-3 mt-5 underline underline-offset-4'>
                            ข้อมูลผู้ใช้
                        </div>
                        <div className='grid grid-rows-3 gap-2 md:gap-5 text-base'>
                            <div className='flex flex-row'>
                                <div className=''>
                                    {userData.first_name_en}
                                </div>
                                <div className='ml-1 '>
                                    {userData.last_name_en}
                                </div>
                                <div className='flex ml-1'>
                                    (
                                    <div className=''>
                                        {userData.first_name_th}
                                    </div>
                                    <div className='md:ml-1 '>
                                        {userData.last_name_th}
                                    </div>
                                    )
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row'>
                                <div className='mb-3'>
                                    {userData.faculty_en}
                                </div>
                                <div className='md:ml-5 '>
                                    {userData.major_en}
                                </div>
                            </div>
                            
                            <div className='grid grid-rows-2 gap-2 md:gap-0 md:grid-cols-2 text-base'>
                                <div className='flex max-h-7 mt-5 md:mt-0'>
                                    <div className='border rounded-md px-3'>
                                        ROLE :
                                    </div>
                                    <div className='ml-3'>
                                        {userData.role}
                                    </div>
                                </div>
                                <div className='flex max-h-7'>
                                    <div className='border rounded-md px-3'>
                                        GEEKPOINT :
                                    </div>
                                    <div className='ml-3'>
                                        {userData.point}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div> 
                </div>
            </div>
        </form>
    );
}

export default Settingpage;
