"use client";
import React, { useState } from "react";

export default function News() {
  const [hidden, setHidden] = useState("hidden");
  const [email, setEmail] = useState("");

  return (
    <div className="grid h-svh w-svw place-content-center">
      <div className="flex md:max-w[500px] md:max-h-[700px]">
        <div className="bg-[#181818] md:w-[500px] md:h-[700px] rounded-3xl">
          <h1 className="text-3xl text-center font-inter font-bold py-20">
            Sign Up
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
                  className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500"
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
                  className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <button
                  className="btn bg-black my-20 font-inter text-white"
                  type="submit"
                  onClick={() => {
                    setHidden("");
                  }}
                >
                  sign up
                </button>
              </label>
              <label className="font-inter">
                Already have an account ?
                <a
                  href="sign-in"
                  className="underline underline-offset-8 font-inter mx-2"
                >
                  sign-in
                </a>
              </label>
            </div>
          </div>
        </div>
        <div
          className={`absolute ${hidden}`}
        >
          <div className="bg-[#181818] md:w-[500px] md:h-[700px] rounded-3xl justify-center">
          <h1 className="text-3xl text-center font-inter font-bold py-20">Verify</h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-inter">Enter OPT</span>
            </div>
            <input
              required
              type="email"
              placeholder="example@ku.th"
              className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          </div>
        </div>
      </div>
    </div>
  );
}
