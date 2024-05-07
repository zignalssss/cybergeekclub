"use client";
import React, { useState } from "react";
import OTPInput from "@/components/otp/OTPInput";
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const router = useRouter();
  const [session, setSession] = useState(true);
  const [hidden, setHidden] = useState("hidden");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [opt, setOpt] = useState("");
  const onChange = (value: string) => setOpt(value);

  return (
    <div className="grid h-svh w-svw place-content-center">
      <div className="flex md:max-w[500px] md:max-h-[700px] drop-shadow-[0_0_30px_rgba(23,23,23,0.7)]">
        <div className="bg-[#181818] md:w-[500px] md:h-[700px] rounded-3xl">
          <h1 className="text-3xl text-center font-inter font-bold py-20">
            Sign In
          </h1>
          <div className="flex justify-center">
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white font-inter">
                    Email
                  </span>
                </div>
                <input
                  required
                  type="email"
                  placeholder="example@ku.th"
                  className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 transition-all duration-100"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <div className="label">
                  <span className="label-text text-white font-inter mt-10">
                    Password
                  </span>
                </div>
                <input
                  required
                  type="password"
                  placeholder="example123456!@#"
                  className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 transition-all duration-100"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <button
                  className="btn bg-black my-20 font-inter text-white"
                  type="submit"
                  onClick={() => {
                    if (!session) {
                      setHidden("");
                    } else {
                      router.push("/");
                    }
                  }}
                >
                  sign in
                </button>
              </label>
              <label className="font-inter">
                Don&apos;t have an account ?
                <a
                  href="sign-up"
                  className="underline underline-offset-8 font-inter mx-2"
                >
                  sign-up
                </a>
              </label>
            </div>
          </div>
        </div>
        <div className={`absolute ${hidden}`}>
          <div className="bg-[#181818] md:w-[500px] md:h-[700px] rounded-3xl justify-center">
            <h1 className="text-3xl text-center font-inter font-bold py-20">
              Verify
            </h1>
            <div className="flex justify-center">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white font-inter">
                    Enter OPT code
                  </span>
                </div>
                <div className="flex flex-col gap-2 py-5">
                  <OTPInput value={opt} valueLength={6} onChange={onChange} />
                </div>
                <div className="label">
                  <span className="label-text text-white font-inter">
                    Don&apos;t get the OPT ?
                    <a
                      href={""}
                      className="label-text font-inter text-white underline underline-offset-8 px-2"
                    >
                      resent
                    </a>
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
