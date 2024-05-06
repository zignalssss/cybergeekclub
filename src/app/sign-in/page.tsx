"use client";
import React, { useState } from "react";

export default function News() {
  const [email, setEmail] = useState("");

  return (
    <div className="grid h-svh w-svw place-content-center">
      <div className="bg-[#181818] md:w-[500px] md:h-[700px] rounded-3xl">
        <h1 className="text-3xl text-center font-inter font-bold py-20">
          Sign in
        </h1>
        <div className="flex justify-center">
          <div className="">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-white font-inter">Email</span>
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
                <span className="label-text text-white font-inter mt-10">Password</span>
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
              <button className="btn bg-black my-20 font-inter text-white" type="submit">
                sign in
              </button>
            </label>
            <label className="font-inter">
              Don't have an account ?
              <a href="sign-up" className="underline underline-offset-8 font-inter mx-2">
                sign-up
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
