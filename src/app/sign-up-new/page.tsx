"use client"

import FirstSignUp from "@/components/sign-up/FirstSignUp"
import ProgressBar from "@/components/ui/ProgressBarforSignUp"

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