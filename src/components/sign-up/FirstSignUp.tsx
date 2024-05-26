"use client";

import Link from "next/link";
import { useState } from "react";

type Prop = {
  onSubmit: (data: FormData) => void;
  state: (value: number) => void;
};
type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};
const FirstSignUp = ({ onSubmit, state }: Prop) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const checkPassword = () => {
    if (formData.password === formData.confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkPassword()) {
      setErrorMessage("");
      onSubmit(formData);
      state(1);
    } else {
      setErrorMessage("รหัสผ่านไม่ตรงกัน");
    }
  };
  return (
    <div className="flex flex-col w-80 sm:w-[500px] h-full md:w-[700px] md:h-[700px] md: bg-[#181818] rounded-3xl border border-white/15">
      <div className="flex justify-center my-10">
        <h1 className="font-kanit text-3xl">สมัครสมาชิก</h1>
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
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">
                ยืนยันรหัสผ่าน
              </span>
            </div>
            <input
              id="confirmPassword"
              type="password"
              placeholder="example@#!@#123"
              className={`input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E] ${!errorMessage ? "" : "ring-2 ring-red-500"}`}
              required
              onChange={handleInputChange}
              value={formData.confirmPassword}
            />
          </label>
          {errorMessage && (
            <div className="text-center text-red-500 font-kanit">
              {errorMessage}
            </div>
          )}
          <button type="submit" className="btn btn-ghost min-w-52 bg-black m-5 font-kanit hover:text-green-500 md:my-10">
            เริ่มต้น
          </button>
        </div>
      </form>
      <div className="flex justify-center p-5 font-kanit">
        <h1>มีบัญชีแล้ว ?&nbsp;</h1>
        <Link className="hover:text-green-500 underline underline-offset-4" href={"/sign-in"}>เข้าสู่ระบบ</Link>
      </div>
    </div>
  );
};

export default FirstSignUp;
