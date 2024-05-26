"use client";
import React, { useState } from "react";
import OTPInput from "@/components/otp/OTPInput";
import { useRouter } from "next/navigation";
import { faculty } from "./faculty";
import { IoMdLink } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import ProgressBar from "@/components/sign-up/ProgressBarforSignUp";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Department {
  id: number;
  th: string;
  en: string;
  regular: string;
  special: string;
}

export default function SignUp() {
  const router = useRouter();

  const [showVerify, setShowVerify] = useState("hidden");
  const [showPersonalInfo1, setShowPersonalInfo1] = useState("hidden");
  const [showPersonalInfo2, setShowPersonalInfo2] = useState("hidden");
  const [nowState, setNowState] = useState(0);
  const texts = ["1.ข้อมูลส่วนตัว", "2.ข้อมูลในสถานศึกษา", "3.ยืนยันตัวตน"];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    prefixTH: "",
    prefixEN: "",
    nameTH: "",
    nameEN: "",
    surnameTH: "",
    surnameEN: "",
    nicknameTH: "",
    nicknameEN: "",
    phoneNumber: "",
    birthDate: "",
    nisitID: "",
    facultyTh: "",
    facultyEn: "",
    majorTh: "",
    majorEn: "",
    tag: "",
    otp: "",
  });
  // for OTP only
  const onChange = (value: string) => {
    setFormData({
      ...formData,
      otp: value,
    });
  };
  // for everything
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const [Major, setMajor] = useState<Department[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<Department>();

  // Function to populate Major based on selected faculty
  const populateMajor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.selectedIndex;
    const selectedFaculty = faculty.find(
      (faculty) => faculty.id === selectedId
    );
    if (selectedFaculty) {
      setMajor(selectedFaculty.Major as Department[]);
    } else {
      setMajor([]);
    }
  };

  return (
    <div className="grid place-content-center">
      <div className="p-5 rounded-3xl">
        <h1 className="text-center text-3xl font-kanit font-bold mb-10">
          {nowState === 3 ? (
            <div className="flex justify-center">
              <BsFillCheckCircleFill />
            </div>
          ) : nowState > 0 ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            "3 Step"
          )}
        </h1>
        <ProgressBar maximumState={3} nowState={nowState} text={texts} />
      </div>

      <div className="flex justify-center md:max-w[500px] md:max-h-[700px] drop-shadow-[0_0_30px_rgba(23,23,23,0.7)] transition-all duration-400">
        <div className="bg-[#181818] md:w-[500px] md:h-[700px] rounded-3xl border border-white/15 ">
          <h1 className="text-3xl text-center font-kanit font-bold py-20">
            สมัครสมาชิก
          </h1>
          <div className="flex justify-center">
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white font-kanit">
                    อีเมล
                  </span>
                </div>
                <input
                  required
                  id="email"
                  type="email"
                  placeholder="example@ku.th"
                  className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 transition-all duration-100 focus:ring-2 focus:ring-green-500"
                  onChange={handleInputChange}
                />
                <div className="label">
                  <span className="label-text text-white font-kanit mt-5">
                    รหัสผ่าน
                  </span>
                </div>
                <input
                  id="password"
                  required
                  type="password"
                  placeholder="example123456!@#"
                  className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 transition-all duration-100 focus:ring-2 focus:ring-green-500"
                  onChange={handleInputChange}
                />
                <div className="label">
                  <span className="label-text text-white font-kanit mt-5">
                    ยืนยันรหัสผ่าน
                  </span>
                </div>
                <input
                  required
                  type="password"
                  placeholder="example123456!@#"
                  className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 transition-all duration-100 focus:ring-2 focus:ring-green-500"
                  onChange={handleInputChange}
                />
                <button
                  className="btn bg-black my-10 font-kanit text-white hover:text-green-500"
                  type="button"
                  onClick={() => {
                    setShowVerify("hidden");
                    setShowPersonalInfo1("");
                    setShowPersonalInfo2("hidden");
                    setNowState(1);
                  }}
                >
                  ต่อไป <FaArrowRightLong />
                </button>
              </label>
              <div className="text-center">
                <label className="font-kanit">
                  มีบัญชีแล้ว ?
                  <a
                    href="sign-in"
                    className="underline underline-offset-8 font-kanit mx-2 hover:text-green-500"
                  >
                    เข้าสู่ระบบ
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* personal data 1 */}
        <div className={`absolute ${showPersonalInfo1}`}>
          <div className="bg-[#181818] md:w-[700px] md:h-[700px] rounded-3xl font-kanit border border-white/15">
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
                    className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const facultyEnDropdown = document.getElementById(
                        "prefixEN"
                      ) as HTMLSelectElement;
                      if (facultyEnDropdown) {
                        facultyEnDropdown.selectedIndex = selectedIndex;
                      }
                      handleSelectChange(e);
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
                    id="nameTH"
                    type="text"
                    placeholder="เด็กไทย"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleInputChange}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">นามสกุล</span>
                  </div>
                  <input
                    id="surnameTH"
                    type="text"
                    placeholder="ใจดี"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleInputChange}
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
                    className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const facultyThDropdown = document.getElementById(
                        "prefixTH"
                      ) as HTMLSelectElement;
                      if (facultyThDropdown) {
                        facultyThDropdown.selectedIndex = selectedIndex;
                      }
                      handleSelectChange(e);
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
                    id="nameEN"
                    type="text"
                    placeholder="Dekthai"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleInputChange}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Surname</span>
                  </div>
                  <input
                    id="surnameEN"
                    type="text"
                    placeholder="Jaidee"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">ชื่อเล่น</span>
                  </div>
                  <input
                    id="nicknameTH"
                    type="text"
                    placeholder="สุดสวย"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleInputChange}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Nickname</span>
                  </div>
                  <input
                    id="nicknameEN"
                    type="text"
                    placeholder="Sudsuay"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">เบอร์โทรศัพท์</span>
                  </div>
                  <input
                    id="phoneNumber"
                    type="text"
                    placeholder="0xxxxxxxxxx"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleInputChange}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">วันเกิด</span>
                  </div>
                  <input
                    id="birthDate"
                    type="date"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-20">
                <button
                  className="btn btn-ghost my-10 font-kanit text-white hover:text-green-500"
                  type="button"
                  onClick={() => {
                    setShowVerify("hidden");
                    setShowPersonalInfo1("hidden");
                    setShowPersonalInfo2("hidden");
                    setNowState(0);
                  }}
                >
                  <FaArrowLeftLong /> ย้อนกลับ
                </button>
                <button
                  className="btn bg-black my-10 font-kanit text-white hover:text-green-500"
                  type="button"
                  onClick={() => {
                    setShowVerify("hidden");
                    setShowPersonalInfo1("hidden");
                    setShowPersonalInfo2("");
                    setNowState(2);
                  }}
                >
                  ต่อไป <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* personal data 2 */}
        <div className={`absolute ${showPersonalInfo2}`}>
          <div className="bg-[#181818] md:w-[700px] md:h-[700px] rounded-3xl font-kanit border border-white/15">
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
                    id="nisitID"
                    type="text"
                    placeholder="ex. 65xxxxxxxx"
                    className="input input-bordered w-full max-w-xs bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleInputChange}
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
                    className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
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
                      populateMajor(e);
                      departmentTh.selectedIndex = 0;
                      departmentEn.selectedIndex = 0;
                      handleSelectChange(e);
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
                    className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const facultyEnDropdown = document.getElementById(
                        "facultyTh"
                      ) as HTMLSelectElement;
                      if (facultyEnDropdown) {
                        facultyEnDropdown.selectedIndex = selectedIndex;
                      }
                      handleSelectChange(e);
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
                    className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
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
                        setSelectedDepartment(Major[selectedIndex]);
                        tagDropdown.selectedIndex = 0;
                      }
                      handleSelectChange(e);
                    }}
                  >
                    <option value="" disabled>
                      เลือก
                    </option>
                    {Major.map((obj) => (
                      <option key={obj.id} value={obj.id}>
                        {obj.th}
                      </option>
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
                    className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedIndex = e.target.selectedIndex;
                      const facultyEnDropdown = document.getElementById(
                        "majorTh"
                      ) as HTMLSelectElement;
                      if (facultyEnDropdown) {
                        facultyEnDropdown.selectedIndex = selectedIndex;
                      }
                      handleSelectChange(e);
                    }}
                  >
                    <option value="" disabled>
                      choose
                    </option>
                    {Major.map((obj) => (
                      <option key={obj.id}>{obj.en}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">รหัส (tag)</span>
                  </div>
                  <select
                    id="tag"
                    defaultValue=""
                    className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500"
                    required
                    onChange={handleSelectChange}
                  >
                    <option value="" disabled>
                      choose
                    </option>
                    <option>{selectedDepartment?.regular}</option>
                    <option>{selectedDepartment?.special}</option>
                  </select>
                </label>
              </div>
              <div className="flex justify-center w-full px-10 gap-20">
                <button
                  className="btn btn-ghost my-10 font-kanit text-white hover:text-green-500"
                  type="button"
                  onClick={() => {
                    setShowVerify("hidden");
                    setShowPersonalInfo1("");
                    setShowPersonalInfo2("hidden");
                    setNowState(1);
                  }}
                >
                  <FaArrowLeftLong /> ย้อนกลับ
                </button>
                <button
                  className="btn bg-black my-10 font-kanit text-white hover:text-green-500"
                  type="button"
                  onClick={() => {
                    setShowVerify("");
                    setShowPersonalInfo1("hidden");
                    setShowPersonalInfo2("hidden");
                    setNowState(3);
                  }}
                >
                  ต่อไป <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* verify page */}
        <div className={`absolute ${showVerify}`}>
          <div className="bg-[#181818] md:w-[500px] md:h-[700px] rounded-3xl justify-center border border-white/15">
            <h1 className="text-3xl text-center font-kanit font-bold py-20">
              ยืนยันตัวตน
            </h1>
            <div className="flex justify-center">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white font-kanit">
                    ใส่รหัส OPT
                  </span>
                </div>
                <div className="flex flex-col gap-2 py-5">
                  <OTPInput
                    value={formData.otp}
                    valueLength={6}
                    onChange={onChange}
                  />
                </div>
                <div className="">
                  <span className="text-white font-kanit">
                    ไม่ได้รับรหัส OTP ?
                    <a
                      href={""}
                      className="font-kanit text-white underline underline-offset-8 px-2 hover:text-green-500"
                    >
                      ส่งอีกครั้ง
                    </a>
                  </span>
                </div>
                <div className="flex justify-center w-full px-10 gap-20">
                  <button
                    className="btn btn-ghost my-10 font-kanit text-white hover:text-green-500"
                    type="button"
                    onClick={() => {
                      setShowVerify("hidden");
                      setShowPersonalInfo1("hidden");
                      setShowPersonalInfo2("");
                      setNowState(2);
                    }}
                  >
                    <FaArrowLeftLong /> ย้อนกลับ
                  </button>
                  <button
                    className="btn bg-black my-10 font-kanit text-white hover:text-green-500"
                    type="button"
                    onClick={() => {
                      router.push(`/`);
                      console.log(formData);
                    }}
                  >
                    เสร็จสิ้น <FaCheck />
                  </button>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
