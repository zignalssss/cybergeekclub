"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const FirstRecovery = dynamic(
  () => import("@/components/recovery/FirstRecovery")
);
const SecondRecovery = dynamic(
  () => import("@/components/recovery/SecondRecovery")
);
const VerifyRecovery = dynamic(
  () => import("@/components/recovery/VerifyRecovery")
);

interface Prop {
  onSubmit: (data: FormData) => void;
  state: (value: number) => void;
}

interface Email {
  email: string;
}
interface Password {
  password : string;
}

interface formData {
  email : string;
  password : string;
}

const Recovery = () => {
  const [formData, setFormData] = useState<formData>({
    email : "",
    password : "",
  });
  const [nowState, setNowState] = useState<number>(0);
  const handleSubmitData1 = (data: Email) => {
    setFormData({
      ...formData,
      email : data.email
    })
  };
  const handleSubmitData2 = (data: Password) => {
    setFormData({
      ...formData,
      password : data.password
    })
  };
  const handleState = (value: number) => {
    setNowState(value);
  };
  return (
    <div className="grid place-content-center min-h-screen h-fit mb-20">
      <title>Recovery | CyberGeek</title>
      <div
        className={`${
          nowState === 0 ? "" : "!hidden"
        } flex justify-center w-full h-fit my-10`}
      >
        <FirstRecovery onSubmit={handleSubmitData1} state={handleState} />
      </div>
      <div
        className={`${
          nowState === 1 ? "" : "!hidden"
        } flex justify-center w-full h-fit my-10`}
      >
        <SecondRecovery onSubmit={handleSubmitData2} state={handleState}/>
      </div>
      <div
        className={`${
          nowState === 2 ? "" : "!hidden"
        } flex justify-center w-full h-fit my-10`}
      >
        <VerifyRecovery userData={formData} state={handleState} email = {formData.email} nowState = {nowState} finalState={2}/>
      </div>
    </div>
  );
};

export default Recovery;
