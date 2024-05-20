"use client";
import React, { useState } from "react";
import OTPInput from "@/components/otp/OTPInput";
import { useRouter } from "next/navigation";
import { faculty } from "./faculty";
import { IoMdLink } from "react-icons/io";

interface Department {
  id: number;
  th: string;
  en: string;
  regular : string;
  special : string;
}

export default function SignUp() {
  const router = useRouter();
  const onChange = (value: string) => setOpt(value);

  const [showVerify, setShowVerify] = useState("hidden");
  const [showPersonalInfo1, setShowPersonalInfo1] = useState("hidden");
  const [showPersonalInfo2, setShowPersonalInfo2] = useState("hidden");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [opt, setOpt] = useState("");

  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<Department>();

  // Function to populate departments based on selected faculty
  const populateDepartments = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.selectedIndex;
    const selectedFaculty = faculty.find(
      (faculty) => faculty.id === selectedId
    );
    if (selectedFaculty) {
      setDepartments(selectedFaculty.departments as Department[]);
    } else {
      setDepartments([]);
    }
  };
  return (
    <div className="grid h-svh place-content-center">
      <div className="flex justify-center md:max-w[500px] md:max-h-[700px] drop-shadow-[0_0_30px_rgba(23,23,23,0.7)] transition-all duration-400">
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
                    setShowVerify("hidden");
                    setShowPersonalInfo1("");
                    setShowPersonalInfo2("hidden");
                  }}
                >
                  next step
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
        {/* personal data 1 */}
        <div className={`absolute ${showPersonalInfo1}`}>
          <div className="bg-[#181818] md:w-[700px] md:h-[700px] rounded-3xl font-kanit ">
            <h1 className="text-3xl text-center font-bold py-20">
              ข้อมูลส่วนตัว
            </h1>
            <div className="flex flex-col gap-y-2 justify-center w-full h-fit">
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control flex-none w-28 max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">คำนำหน้า</span>
                  </div>
                  <select
                    id="prefixTH"
                    defaultValue=""
                    className="select select-bordered bg-[#302E2E]"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const facultyEnDropdown = document.getElementById(
                        "prefixEN"
                      ) as HTMLSelectElement;
                      if (facultyEnDropdown) {
                        facultyEnDropdown.selectedIndex = selectedIndex;
                      }
                    }}
                  >
                    <option value="" disabled>
                      เลือก
                    </option>
                    <option>นาย</option>
                    <option>นาง</option>
                    <option>นางสาว</option>
                  </select>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">ชื่อ</span>
                  </div>
                  <input
                    type="text"
                    placeholder="เด็กไทย"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E]"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">นามสกุล</span>
                  </div>
                  <input
                    type="text"
                    placeholder="ใจดี"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E]"
                  />
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control flex-none w-28 max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">prefix</span>
                  </div>
                  <select
                    id="prefixEN"
                    defaultValue=""
                    className="select select-bordered bg-[#302E2E]"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const facultyEnDropdown = document.getElementById(
                        "prefixTH"
                      ) as HTMLSelectElement;
                      if (facultyEnDropdown) {
                        facultyEnDropdown.selectedIndex = selectedIndex;
                      }
                    }}
                  >
                    <option value="" disabled>
                      choose
                    </option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                  </select>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Dekthai"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E]"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Surname</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Jaidee"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E]"
                  />
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">ชื่อเล่น</span>
                  </div>
                  <input
                    type="text"
                    placeholder="สุดสวย"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E]"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Nickname</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Sudsuay"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E]"
                  />
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">เบอร์โทรศัพท์</span>
                  </div>
                  <input
                    type="text"
                    placeholder="0xxxxxxxxxx"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E]"
                  />
                </label>
                <label className="form-control flex-none w-fit max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">ศาสนา</span>
                  </div>
                  <select
                    defaultValue=""
                    className="select select-bordered bg-[#302E2E]"
                    required
                  >
                    <option value="" disabled>
                      เลือก
                    </option>
                    <option>พุทธ</option>
                    <option>อิสลาม</option>
                    <option>คริสต์</option>
                    <option>ไม่มี</option>
                  </select>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">วันเกิด</span>
                  </div>
                  <input
                    type="date"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E]"
                  />
                </label>
              </div>
              <div className="flex justify-end w-full px-10 gap-2">
                <button
                  className="btn bg-black my-10 font-inter text-white"
                  type="submit"
                  onClick={() => {
                    setShowVerify("hidden");
                    setShowPersonalInfo1("hidden");
                    setShowPersonalInfo2("");
                  }}
                >
                  next step
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* personal data 2 */}
        <div className={`absolute ${showPersonalInfo2}`}>
          <div className="bg-[#181818] md:w-[700px] md:h-[700px] rounded-3xl font-kanit ">
            <h1 className="text-3xl text-center font-bold py-20">
              ข้อมูลในสถานศึกษา
            </h1>
            <div className="flex flex-col gap-y-2 justify-center w-full h-fit">
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">รหัสนักศึกษา</span>
                  </div>
                  <input
                    type="text"
                    placeholder="ex. 65xxxxxxxx"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E]"
                  />
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">คณะ</span>
                  </div>
                  <select
                    id="facultyTh"
                    defaultValue=""
                    className="select select-bordered bg-[#302E2E]"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const facultyEnDropdown = document.getElementById(
                        "facultyEn"
                      ) as HTMLSelectElement;
                      const departmentTh = document.getElementById(
                        "majorTh"
                      ) as HTMLSelectElement;
                      const departmentEn = document.getElementById(
                        "majorEn"
                      ) as HTMLSelectElement;
                      if (facultyEnDropdown) {
                        facultyEnDropdown.selectedIndex = selectedIndex;
                      }
                      populateDepartments(e);
                      departmentTh.selectedIndex = 0;
                      departmentEn.selectedIndex = 0;
                    }}
                  >
                    <option value="" disabled>
                      เลือก
                    </option>
                    {faculty.map((obj) => (
                      <option key={obj.id}>{obj.th}</option>
                    ))}
                  </select>
                </label>
                <div className="flex pt-12 h-full w-fit">
                  <IoMdLink className="text-center text-xl " />
                </div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">faculty</span>
                  </div>
                  <select
                    id="facultyEn"
                    defaultValue=""
                    className="select select-bordered bg-[#302E2E]"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const facultyEnDropdown = document.getElementById(
                        "facultyTh"
                      ) as HTMLSelectElement;
                      if (facultyEnDropdown) {
                        facultyEnDropdown.selectedIndex = selectedIndex;
                      }
                    }}
                  >
                    <option value="" disabled>
                      choose
                    </option>
                    {faculty.map((obj) => (
                      <option key={obj.id}>{obj.en}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">สาขา</span>
                  </div>
                  <select
                    id="majorTh"
                    defaultValue=""
                    className="select select-bordered bg-[#302E2E]"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const departmentEnDropdown = document.getElementById(
                        "majorEn"
                      ) as HTMLSelectElement;
                      const tagDropdown = document.getElementById(
                        "tag"
                      ) as HTMLSelectElement;
                      if (departmentEnDropdown) {
                        departmentEnDropdown.selectedIndex = selectedIndex;
                        setSelectedDepartment(departments[selectedIndex]);
                        tagDropdown.selectedIndex = 0;
                      }
                    }}
                  >
                    <option value="" disabled>
                      เลือก
                    </option>
                    {departments.map((obj) => (
                      <option key={obj.id} value={obj.id}>{obj.th}</option>
                    ))}
                  </select>
                </label>
                <div className="flex pt-12 h-full w-fit">
                  <IoMdLink className="text-center text-xl " />
                </div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">major</span>
                  </div>
                  <select
                    id="majorEn"
                    defaultValue=""
                    className="select select-bordered bg-[#302E2E]"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const facultyEnDropdown = document.getElementById(
                        "majorTh"
                      ) as HTMLSelectElement;
                      if (facultyEnDropdown) {
                        facultyEnDropdown.selectedIndex = selectedIndex;
                      }
                    }}
                  >
                    <option value="" disabled>
                      choose
                    </option>
                    {departments.map((obj) => (
                      <option key={obj.id}>{obj.en}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">
                      รหัส (tag)
                    </span>
                  </div>
                  <select
                    id="tag"
                    defaultValue=""
                    className="select select-bordered bg-[#302E2E]"
                    required
                  >
                    <option value="" disabled>
                      choose
                    </option>
                    <option>
                      {selectedDepartment?.regular}
                    </option>
                    <option>
                      {selectedDepartment?.special}
                    </option>
                  </select>
                </label>
              </div>

              <div className="flex justify-end w-full px-10 gap-2">
                <button
                  className="btn bg-black my-10 font-inter text-white"
                  type="submit"
                  onClick={() => {
                    setShowVerify("");
                    setShowPersonalInfo1("hidden");
                    setShowPersonalInfo2("hidden");
                  }}
                >
                  next step
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* verify page */}
        <div className={`absolute ${showVerify}`}>
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
