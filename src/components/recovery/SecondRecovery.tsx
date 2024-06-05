"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

interface Prop {
  onSubmit: (data: formData) => void;
  state: (value: number) => void;
}

interface formData {
  password: string;
}

const SecondRecovery = ({ onSubmit, state }: Prop) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
    setErrorMessage("");
  };
  const handleBackBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    state(0);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkPassword()) {
      onSubmit({password : password});
      state(2);
    } else {
      setErrorMessage("รหัสผ่านไม่ตรงกัน");
    }
  };
  const checkPassword = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col place-self-center w-80 sm:w-[500px] h-full md:w-[700px] md:h-[700px] md: bg-[#181818] rounded-3xl border border-white/15">
        <div className="h-fit w-full">
          <h1 className="font-kanit text-center text-3xl py-20">
            การกู้คืนรหัสผ่าน
          </h1>
        </div>
        <form id="RecoveryForm2" onSubmit={handleSubmit}>
          <div className="md:flex md:flex-col md:place-items-center justify-center grid w-full md:gap-10 gap-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white font-kanit">
                  รหัสผ่านใหม่
                </span>
              </div>
              <input
                id="password"
                type="password"
                placeholder="example@#!@#123"
                className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
                required
                onChange={handleInputChange}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white font-kanit">
                  ยืนยันรหัสผ่านใหม่
                </span>
              </div>
              <input
                id="confirmPassword"
                type="password"
                placeholder="example@#!@#123"
                className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
                required
                onChange={handleInputChange}
              />
            </label>
            {errorMessage && (
              <div className="text-center text-red-500 font-kanit">
                {errorMessage}
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 my-10 md:gap-52 md:mx-5">
            <button
              type="button"
              className="btn btn-ghost min-w-20 bg-transparent font-kanit hover:text-green-500"
              onClick={handleBackBtn}
            >
              <FaArrowLeftLong />
              ย้อนกลับ
            </button>
            <button
              type="submit"
              className="btn btn-ghost min-w-20 bg-black font-kanit hover:text-green-500"
            >
              ต่อไป
              <FaArrowRightLong />
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondRecovery;
