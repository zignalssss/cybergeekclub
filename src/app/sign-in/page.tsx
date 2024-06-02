"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
import { TbWashDryP } from "react-icons/tb";

type FormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const router = useRouter();
  const [session, setSession] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setErrorMessage("");
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const email = formData.email
      const password = formData.password
      const result = await signIn('credentials',{
        redirect:false,
        email,
        password
      })
      if(result?.error){
        setErrorMessage(result?.error)
        console.log(result?.error)
        return false
      }
      router.push('/pendingpage')
    }catch(error){
      console.log('error',error)
    }
  };
  return (
    <div className="flex justify-center md:h-screen h-fit my-10">
    <div className="flex flex-col w-80 sm:w-[500px] h-full md:w-[700px] md:h-[700px] md: bg-[#181818] rounded-3xl border border-white/15 my-10 drop-shadow-[0_0_30px_rgba(23,23,23,0.7)]">
      <div className="flex justify-center my-10">
        <h1 className="font-kanit text-3xl">เข้าสู่ระบบ</h1>
      </div>
      <form id="registrationForm1" onSubmit={handleSubmit}>
        <div className="md:flex md:flex-col md:place-items-center justify-center grid w-full md:gap-10 gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">อีเมล</span>
            </div>
            <input
              id="email"
              type="email"
              placeholder="example@ku.th"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">รหัสผ่าน</span>
            </div>
            <input
              id="password"
              type="password"
              placeholder="example@#!@#123"
              className={`input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E] ${!errorMessage ? "" : "ring-2 ring-red-500"}`}
              required
              onChange={handleInputChange}
              value={formData.password}
            />
            <div className="label mt-10">
              <Link href={"/recovery"} className="label-text text-white font-kanit underline underline-offset-4">ลืมรหัสผ่านใช่หรือไม่ ?</Link>
            </div>
          </label>
          {errorMessage && (
            <div className="text-center text-red-500 font-kanit">
              {errorMessage}
            </div>
          )}
          <button type="submit" className="btn btn-ghost min-w-52 bg-black m-5 font-kanit hover:text-green-500 md:my-10">
            เข้าสู่ระบบ
          </button>
        </div>
      </form>
      <div className="flex justify-center p-5 font-kanit">
        <h1>ยังไม่มีบัญชีใช่หรือไม่ ?&nbsp;</h1>
        <Link className="hover:text-green-500 underline underline-offset-4" href={"/sign-up"}>สมัครสมาชิก</Link>
      </div>
    </div>
    </div>
  );
}
