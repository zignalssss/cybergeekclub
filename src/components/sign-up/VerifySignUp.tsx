"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import OTPInput from "../otp/OTPInput";
import { useRouter } from "next/navigation";

type Prop = {
  userData : Object
  state: (value: number) => void;
  email: string;
  nowState: number;
};

type FormData = {
  otp: string;
};

const VerifySignUp = ({ userData,state, email, nowState }: Prop) => {
  const router = useRouter();
  const [isError,setIsError] = useState<string>("")
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
    const inputOTP = formData.otp; // Ensure the OTP is a string

    const data = {
      otp: inputOTP,
      email,
    };
    try {
      await axios.post("/api/otp/verifyotp", data) // Send data directly
        .then( async response =>{
          await axios.post("/api/auth/signup",userData)
            .then(response => {
                router.push("/pendingpage");
            })
            .catch(error =>{
                router.push("/sign-up");
            })
        })
        .catch( error =>{
          setIsError(error.response.data.error)
        })
    } catch (error: unknown) {
      // console.error("Error verifying OTP:", error);
    }
  };

  const generateOTP = async (email: string) => {
    try {
      await axios.post("/api/otp/generateotp", { email })
        .catch(error =>{
          setIsError(error.response.data.message)
        })
    } catch (error: unknown) {
      // console.error("Error generating OTP:", error);
    }
  };

  const sendOTPAgain = async (email: string) => {
    try {
      await axios.post("/api/otp/updateotp", { email })
        .catch(error => {
            setIsError(error.response.data.message)
        })
    } catch (error: unknown) {
      // console.error("Error sending OTP again:", error);
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
                    setIsError("")
                  }}
                >
                  ส่งอีกครั้ง
                </a>
              </span>
            </div>
          </label>
        </div>
        {isError && (
            <div className="text-center text-red-500 font-kanit my-5">
              {isError}
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
            เสร็จสิ้น <FaCheck />
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifySignUp;
