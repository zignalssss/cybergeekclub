"use client";
import React, { useState } from "react";

interface Prop {
  onSubmit: (data: formData) => void;
  state: (value: number) => void;
}

interface formData {
  password: string;
}

const Recovery = ({ onSubmit, state }: Prop) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<formData>({
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
    setErrorMessage("");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkPassword()) {
      setFormData({
        password: password,
      });
      onSubmit(formData);
      state(1);
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
        <form id="registrationForm1" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="btn btn-ghost min-w-52 bg-black m-5 font-kanit hover:text-green-500 md:mt-20"
            >
              เริ่มต้นการกู้คืน
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recovery;
