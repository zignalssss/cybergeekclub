"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
const ProgressBar = dynamic(() => import("@/components/sign-up/ProgressBarforSignUp"));
const FirstSignUp = dynamic(() => import("@/components/sign-up/FirstSignUp"));
const SecondSignUp = dynamic(() => import("@/components/sign-up/SecondSignUp"));
const ThirdSignUp = dynamic(() => import("@/components/sign-up/ThirdSignUp"));
const VerifySignUp = dynamic(() => import("@/components/sign-up/VerifySignUp"));
type FormData1 = {
  email: string;
  password: string;
  confirmPassword: string;
};
type FormData2 = {
  prefix_TH: string;
  prefix_EN: string;
  name_TH: string;
  name_EN: string;
  surname_TH: string;
  surname_EN: string;
  nickname_TH: string;
  nickname_EN: string;
  phone_number: string;
  birth_date: string;
};
type FormData3 = {
  student_id: string;
  faculty_TH: string;
  faculty_EN: string;
  major_TH: string;
  major_EN: string;
  tag: string;
};
type isVerify = {
  isVerify:boolean;
};

const SignUp = () => {
  const texts = ["1.ข้อมูลส่วนตัว", "2.ข้อมูลในสถานศึกษา", "3.ยืนยันตัวตน"];
  const [nowState, setNowState] = useState<number>(0);
  const [userData, setUserData] = useState<any>({});

  const handleSubmitData1 = (data: FormData1) => {
    const email = data.email
    const password = data.password
    setUserData((prevData: any) => ({email,password}));
  };

  const handleSubmitData2 = (data: FormData2) => {
    setUserData((prevData: any) => ({ ...prevData, ...data }));
  };

  const handleSubmitData3 = (data: FormData3) => {
    setUserData((prevData: any) => ({ ...prevData, ...data }));
    
  };

  const handleState = (value: number) => {
    setNowState(value);
  };

  return (
    <div className="grid place-content-center min-h-screen h-fit mb-20">
      <title>Sign Up | CyberGeek</title>
      <div className="flex justify-center w-full h-full my-10">
        <ProgressBar maximumState={3} nowState={nowState} text={texts} />
      </div>

      <div
        className={`${
          nowState === 0 ? "" : "!hidden"
        } flex justify-center w-full h-fit`}
      >
        <FirstSignUp onSubmit={handleSubmitData1} state={handleState} />
      </div>
      <div
        className={`${
          nowState === 1 ? "" : "!hidden"
        } flex justify-center w-full h-fit`}
      >
        <SecondSignUp onSubmit={handleSubmitData2} state={handleState} />
      </div>
      <div
        className={`${
          nowState === 2 ? "" : "!hidden"
        } flex justify-center w-full h-fit`}
      >
        <ThirdSignUp onSubmit={handleSubmitData3} state={handleState} />
      </div>
      <div
        className={`${
          nowState === 3 ? "" : "!hidden"
        } flex justify-center w-full h-fit`}
      >
        <VerifySignUp userData={userData} state={handleState} email = {userData.email} nowState = {nowState} finalState={3}/>
      </div>
    </div>
  );
};

export default SignUp;
