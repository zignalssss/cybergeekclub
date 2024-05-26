"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import OTPInput from "../otp/OTPInput";
import { useRouter } from "next/navigation";

type Prop = {
  onSubmit: (data: FormData) => void;
  state: (value: number) => void;
  email: string;
  nowState: number;
};

type FormData = {
  otp: string;
};

const VerifySignUp = ({ onSubmit, state, email, nowState }: Prop) => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    otp: "",
  });

  const onChange = (value: string) => {
    setFormData({
      otp: value,
    });
  };

  const handleBackBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    state(2);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);

    const inputOTP = formData.otp; // Ensure the OTP is a string

    const data = {
      otp: inputOTP,
      email,
    };
    try {
      await axios.post("/api/otp/verifyotp", data); // Send data directly
      router.push("/");
    } catch (error: unknown) {
      console.error("Error verifying OTP:", error);
      return { message: error };
    }
  };

  const generateOTP = async (email: string) => {
    try {
      await axios.post("/api/otp/generateotp", { email });
    } catch (error: unknown) {
      console.error("Error generating OTP:", error);
      return { message: error };
    }
  };

  const sendOTPAgain = async (email: string) => {
    try {
      await axios.post("/api/otp/updateotp", { email });
    } catch (error: unknown) {
      console.error("Error sending OTP again:", error);
      return { message: error };
    }
  };

  useEffect(() => {
    if (nowState === 3) {
      generateOTP(email);
    }
  }, [nowState, email]);

  return (
    <div className="flex flex-col w-80 sm:w-[500px] h-full md:w-[700px] md:h-[700px] md:bg-[#181818] rounded-3xl border border-white/15">
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
              <OTPInput
                value={formData.otp}
                valueLength={6}
                onChange={onChange}
              />
            </div>
            <div className="">
              <span className="text-white font-kanit">
                ไม่ได้รับรหัส OTP ?
                <a
                  href="#"
                  className="font-kanit text-white underline underline-offset-8 px-2 hover:text-green-500"
                  onClick={(e: any) => {
                    e.preventDefault();
                    sendOTPAgain(email);
                  }}
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
            เสร็จสิ้น <FaCheck />
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifySignUp;
