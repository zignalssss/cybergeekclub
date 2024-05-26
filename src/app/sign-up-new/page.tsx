"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
const ProgressBar = dynamic(
  () => import("@/components/sign-up/ProgressBarforSignUp")
);
const FirstSignUp = dynamic(() => import("@/components/sign-up/FirstSignUp"));
const SecondSignUp = dynamic(() => import("@/components/sign-up/SecondSignUp"));

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

const SignUp = () => {
  const texts = ["1.ข้อมูลส่วนตัว", "2.ข้อมูลในสถานศึกษา", "3.ยืนยันตัวตน"];
  const [nowState, setNowState] = useState<number>(0);
  const handleSubmitData1 = (data: FormData1) => {
    console.log("form 1", data);
  };
  const handleSubmitData2 = (data: FormData2) => {
    console.log("form 2", data);
  };
  const handleState = (value: number) => {
    setNowState(value);
    console.log("nowState", nowState);
  };
  return (
    <div className="grid place-content-center h-fit">
      <div className="flex justify-center w-full h-full my-10">
        <ProgressBar
          maximumState={3}
          nowState={nowState}
          text={texts}
        />
      </div>

      <div className={`${nowState === 0 ? "" : "!hidden"} flex justify-center w-full h-fit`}>
        <FirstSignUp onSubmit={handleSubmitData1} state={handleState} />
      </div>

      <div className={`${nowState === 1 ? "" : "!hidden"} flex justify-center w-full h-fit`}>
        <SecondSignUp onSubmit={handleSubmitData2} state={handleState} />
      </div>
    </div>
  );
};

export default SignUp;
