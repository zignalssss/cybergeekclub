"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import OPTInput from "../otp/OTPInput";
import { useRouter } from "next/navigation";
type Prop = {
  onSubmit: (data: FormData) => void;
  state: (value: number) => void;
};

type FormData = {
  otp: string;
};
const VerifySignUp = ({ onSubmit, state }: Prop) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    otp: "",
  });
  const onChange = (value: string) => {
    setFormData({
      ...formData,
      otp: value,
    });
  };
  const handleBackBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    state(2);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    router.push("/");
  };
  return (
    <div className="flex flex-col w-80 sm:w-[500px] h-full md:w-[700px] md:h-[700px] md: bg-[#181818] rounded-3xl border border-white/15">
      <div className="flex justify-center my-10">
        <h1 className="font-kanit text-3xl">ยืนยันตัวตน</h1>
      </div>
      <form id="registrationForm3" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <label className="form-control w-fit max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">
                ใส่รหัส OPT
              </span>
            </div>
            <div className="flex flex-col gap-2 py-5">
              <OPTInput
                value={formData.otp}
                valueLength={6}
                onChange={onChange}
              />
            </div>
            <div className="">
              <span className="text-white font-kanit">
                ไม่ได้รับรหัส OTP ?
                <a
                  href={""}
                  className="font-kanit text-white underline underline-offset-8 px-2 hover:text-green-500"
                >
                  ส่งอีกครั้ง
                </a>
              </span>
            </div>
          </label>
        </div>
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
      </form>
    </div>
  );
};

export default VerifySignUp;
