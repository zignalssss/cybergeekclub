'use client'
import React, { useState, useEffect,ChangeEvent, FormEvent } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSession } from 'next-auth/react';

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

    const [avatar, setAvatar] = useState<File | null>(null);
    const {data:session}:any = useSession();
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
	},[])

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
            const response = await axios.post('/api/user/updateuser', finalData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            Toast.fire({
                icon: "success",
                title: "เเก้ไขข้อมูลสำเร็จ!!"
            })
                .then(() => {
                    window.location.reload();
                })

        } catch (error) {
            console.log(error)
        }

    };

    return (
        <form onSubmit={handleSubmit} className='bg-black h-fit md:h-screen grid md:grid-cols-[30%_70%] mb-5 md:mb-0'>
            <div className='font-kanit ml-[20%] border border-black border-r-white/15 '>
                <div className=' mt-14'>
                    <div className='text-2xl font-semibold '>การตั้งค่า เเละ ข้อมูลผู้ใช้</div>
                    <div className='text-base'>Use a permanent address where you can receive mail.</div>
                </div>
            </div>
            <div className='text-xl max-w-[90%] md:max-w-[100%]  mt-14 font-kanit '>
                <div className='ml-5 max-w-[90%]'>
                    <div className='flex flex-col gap-4 '>
                        <div className='text-xl underline underline-offset-4'>การตั้งค่าบัญชี</div>
                        <div className='flex items-center'>
                            <div className="avatar">
                                <div className="w-24 rounded-xl border-2 border-green-500 ">
                                    <img src={avatar ? URL.createObjectURL(avatar) : "/asset/image/cat.png"} />
                                </div>
                            </div>
                            <div className='flex flex-col items-center ml-10'>
                                <div className="relative bg-green-900 px-3 h-8 leading-8 text-center text-sm rounded-md">
                                    Change avatar
                                    <input type="file" className="absolute inset-0 w-full h-full opacity-0" onChange={handleAvatarChange} />
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
                                placeholder="Type here"
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
                                    placeholder="Type here"
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
                                    placeholder="Type here"
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
                                    placeholder="Type here"
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
                                    placeholder="Type here"
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
                                    placeholder="Type here"
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
                                    placeholder="Type here"
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
                        <div className='mt-3'>
                            <button type="submit" className='bg-green-800 text-sm rounded-md px-4 py-2'>
                                Save Change
                            </button>
                        </div>
                    </div>
                </div>
                <div className='border border-black border-t-white/15 mt-5 font-kanit text-xl'>
                   <div className='ml-5'>
                   <div className=' mt-5 underline underline-offset-4'> 
                        ข้อมูลผู้ใช้
                   </div>
                   <div>
                        Faculty 
                   </div>
                   <div>
                        Status
                    </div>
                   <div>
                        Role
                    </div>
                   </div>
                </div>

            </div>
        </form>
    );
}

export default Settingpage;
