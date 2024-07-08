"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import OTPInput from "../otp/OTPInput";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

type Prop = {
  userData : object;
  state: (value: number) => void;
  email: string;
  nowState: number;
  finalState : number;
};

type FormData = {
  otp: string;
};

const VerifySignUp = ({ userData,state, email, nowState, finalState }: Prop) => {
  const router = useRouter();
  const [isError,setIsError] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingVerify, setIsLoadingVerify] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    otp: "",
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

  const onChange = (value: string) => {
    setFormData({
      otp: value,
    });
  };

  const handleBackBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    state(nowState-1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoadingVerify(true);
    const inputOTP = formData.otp; // Ensure the OTP is a string

    const data = {
      otp: inputOTP,
      email,
    };
    try {
      await axios.post("/api/otp/verifyotp", data) // Send data directly
        .then( async response =>{
          await axios.post("/api/auth/signup",userData)
            .then( response => {
                router.push("/sign-in");
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
    } finally {
      setIsLoadingVerify(false);
    }
  };

  const sendOTPAgain = async (email: string) => {
    try {
      await axios.post("/api/otp/updateotp", { email })
        .catch(error => {
            setIsError(error.response.data.message)
        }).then(response =>{
            Toast.fire({
                icon: "success",
                title: "ส่งรหัสสำเร็จ กรุณาตรวจสอบอีเมลของคุณ หากไม่พบอีเมล กรุณาตรวจสอบใน Junk Mail ด้วยครับ",
                timer: 5000,
                width: 400
            });
        });
    } catch (error: unknown) {
      // console.error("Error sending OTP again:", error);
      Toast.fire({
        icon: "error",
        title: "ส่งรหัสล้มเหลว กรุณาลองใหม่อีกครั้ง",
        timer: 5000,
        width: 400
      });
    }
  };

  useEffect(() => {
    if (nowState === finalState) {
      const generateOTP = async (email: string) => {
        try {
          await axios.post("/api/otp/generateotp", { email })
            .catch(error =>{
              setIsError(error.response.data.message)
            })
            .then(response =>{
              Toast.fire({
                  icon: "success",
                  title: "ส่งรหัสสำเร็จ กรุณาตรวจสอบอีเมลของคุณ หากไม่พบอีเมล กรุณาตรวจสอบใน Junk Mail ด้วยครับ",
                  timer: 5000,
                  width: 400
              });
            })
        } catch (error: unknown) {
          // console.error("Error generating OTP:", error);
          Toast.fire({
              icon: "error",
              title: "ส่งรหัสล้มเหลว กรุณาลองใหม่อีกครั้ง",
              timer: 5000,
              width: 400
          })
        }
      };
      generateOTP(email);
    }
  }, [nowState, email, finalState, Toast]);

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
                ใส่รหัส OTP
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
                <button
                  type="button"
                  className={`font-kanit text-white underline underline-offset-8 px-2 hover:text-green-500 ${isLoading ? "cursor-not-allowed !pointer-events-none !text-white/25 !no-underline" : ""}`}
                  onClick={async (e: any) => {
                    e.preventDefault();
                    await setIsLoading(true);
                    await sendOTPAgain(email);
                    await setIsError("");
                    await setIsLoading(false);
                  }}
                >
                  {isLoading ? <div>กำลังส่งอีกครั้ง&nbsp;<span className="loading loading-spinner loading-xs text-white/25"></span></div> : "ส่งอีกครั้ง"}
                </button>
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
            disabled={isLoadingVerify}
            type="submit"
            className="btn btn-ghost min-w-20 bg-black font-kanit hover:text-green-500 disabled:text-white/25"
          >
            {isLoadingVerify ? <div>เสร็จสิ้น&nbsp;<span className="loading loading-spinner loading-xs text-white/25"></span></div> : <div className="flex justify-center">เสร็จสิ้น&nbsp;<FaCheck /></div>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifySignUp;
