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
  prefix_EN: String;
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

type FormData4 = {
  otp: string;
};

const SignUp = () => {
  const texts = ["1.ข้อมูลส่วนตัว", "2.ข้อมูลในสถานศึกษา", "3.ยืนยันตัวตน"];
  const [nowState, setNowState] = useState<number>(0);
  const handleSubmitData1 = (data: FormData1) => {
    console.log("form 1", data);
  };
  const handleSubmitData2 = (data: FormData2) => {
    console.log("form 2", data);
  };
  const handleSubmitData3 = (data: FormData3) => {
    console.log("form 3", data);
  };
  const handleSubmitData4 = (data: FormData4) => {
    console.log("form 4", data);
  };
  const handleState = (value: number) => {
    setNowState(value);
    console.log("nowState", nowState);
  };
  return (
    <div className="grid place-content-center h-fit">
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
        <VerifySignUp onSubmit={handleSubmitData4} state={handleState} />
      </div>
    </div>
  );
};

export default SignUp;
