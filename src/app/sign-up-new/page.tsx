"use client"

import dynamic from "next/dynamic"
const ProgressBar = dynamic(()=> import("@/components/ui/ProgressBarforSignUp") )
const FirstSignUp = dynamic(()=> import("@/components/sign-up/FirstSignUp") )

const SignUp = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center w-full h-fit my-10">
        <ProgressBar maximumState={3} nowState={2} text={["1.", "2.", "3."]}/>
      </div>
      <div className="flex justify-center w-full h-screen">
        <FirstSignUp/>
      </div>
    </div>
  )
}

export default SignUp