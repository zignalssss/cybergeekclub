"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
const ProgressBar = dynamic(
  () => import("@/components/ui/ProgressBarforSignUp")
);
const FirstSignUp = dynamic(() => import("@/components/sign-up/FirstSignUp"));

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [nowState, setNowState] = useState<number>(0);
  const handleSubmitData1 = (data: FormData) => {
    console.log("form 1", data);
  };
  const handleState = (value: number) => {
    setNowState(value);
    console.log("nowState", nowState);
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center w-full h-fit my-10">
        <ProgressBar
          maximumState={3}
          nowState={nowState}
          text={["1.", "2.", "3."]}
        />
      </div>
      {nowState === 0 && (
        <div className="flex justify-center w-full h-fit">
          <FirstSignUp onSubmit={handleSubmitData1} state={handleState} />
        </div>
      )}
      {nowState === 1 && (
        <div className="flex justify-center w-full h-fit">
          
        </div>
      )}
    </div>
  );
};

export default SignUp;
