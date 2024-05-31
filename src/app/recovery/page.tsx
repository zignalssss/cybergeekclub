"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const FirstRecovery = dynamic(
  () => import("@/components/recovery/FirstRecovery")
);
const Verify = dynamic(
  () => import("@/components/sign-up/VerifySignUp")
);

interface Prop {
  onSubmit: (data: FormData) => void;
  state: (value: number) => void;
}

interface formData {
  password: string;
}

const Recovery = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<formData | null>(null);
  const [nowState, setNowState] = useState<number>(0);
  const [userData, setUserData] = useState<any>({});
  const handleSubmitData = (data: formData) => {
    setPassword(data.password);
  };
  const handleState = (value: number) => {
    setNowState(value);
  };
  const checkPassword = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="grid place-content-center h-fit mb-20">
      <div
        className={`${
          nowState === 0 ? "" : "!hidden"
        } flex justify-center w-full h-fit my-10`}
      >
        <FirstRecovery onSubmit={handleSubmitData} state={handleState} />
      </div>
      <div
        className={`${
          nowState === 1 ? "" : "!hidden"
        } flex justify-center w-full h-fit my-10`}
      >
        <Verify userData={userData} state={handleState} email = {userData.email} nowState = {nowState} finalState={1}/>
      </div>
    </div>
  );
};

export default Recovery;
