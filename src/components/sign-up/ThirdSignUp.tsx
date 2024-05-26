"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import ALL_DATA from "./curriculum.json"
type Prop = {
  onSubmit: (data: FormData) => void;
  state: (value: number) => void;
};
type Program = {
  name: string;
  name_th: string;
  codes: string[];
}

type Faculty = {
  name: string;
  name_th: string;
  programs: Program[];
}

type FormData = {
  student_id: string;
  faculty_TH: string;
  faculty_EN: string;
  major_TH: string;
  major_EN: string;
  tag: string;
};
const ThirdSignUp = ({ onSubmit, state }: Prop) => {
  const [facultySelectedIndex, setFacultySelectIndex] = useState<number>(0);
  const [majorSelectedIndex, setMajorSelectIndex] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    student_id: "",
    faculty_TH: "",
    faculty_EN: "",
    major_TH: "",
    major_EN: "",
    tag: "",
  });
  const handleFacultySelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { selectedIndex } = e.target;
    const majorElement = document.getElementById("major_TH") as HTMLSelectElement;
    const tagElement = document.getElementById("tag") as HTMLSelectElement;
    majorElement.selectedIndex = 0;
    tagElement.selectedIndex = 0;
    setFacultySelectIndex(selectedIndex-1);
    setFormData({
      ...formData,
      faculty_TH : ALL_DATA.faculty[selectedIndex-1].name_th,
      faculty_EN : ALL_DATA.faculty[selectedIndex-1].name_en,
    });
  };
  const handleMajorSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { selectedIndex } = e.target;
    const tagElement = document.getElementById("tag") as HTMLSelectElement;
    tagElement.selectedIndex = 0;
    setMajorSelectIndex(selectedIndex-1);
    setFormData({
      ...formData,
      major_TH : ALL_DATA.faculty[facultySelectedIndex].programs[selectedIndex-1].name_th,
      major_EN : ALL_DATA.faculty[facultySelectedIndex].programs[selectedIndex-1].name_en,
    });
  };
  const handleTagSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { selectedIndex } = e.target;
    setFormData({
      ...formData,
      tag : ALL_DATA.faculty[facultySelectedIndex].programs[majorSelectedIndex].codes[selectedIndex-1],
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleBackBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    state(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    state(3);
  };
  return (
    <div className="flex flex-col w-80 sm:w-[500px] h-full md:w-[700px] md:h-[700px] md: bg-[#181818] rounded-3xl border border-white/15">
      <div className="flex justify-center my-10">
        <h1 className="font-kanit text-3xl">ข้อมูลในสถานศึกษา</h1>
      </div>
      <form id="registrationForm3" onSubmit={handleSubmit}>
        <div className="md:px-10 md:grid-cols-2 md:place-items-center justify-center grid w-full gap-3">
          <label className="form-control w-full max-w-xs md:col-span-2">
            <div className="label">
              <span className="label-text text-white font-kanit">
                รหัสนักศึกษา
              </span>
            </div>
            <input
              id="student_id"
              type="text"
              placeholder="65xxxxxxxx"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.student_id}
            />
          </label>
          <label className="form-control w-full max-w-xs md:col-span-2">
            <div className="label">
              <span className="label-text text-white font-kanit">คณะ</span>
            </div>
            <select
              id="faculty_TH"
              defaultValue=""
              className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500 font-kanit"
              required
              onChange={handleFacultySelectChange}
            >
              <option value="" disabled>
                เลือก
              </option>
              {ALL_DATA.faculty.map((value, index, array)=>(
                <option key={index}>
                  {array[index].name_th}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control w-full max-w-xs md:col-span-2">
            <div className="label">
              <span className="label-text text-white font-kanit">สาขา</span>
            </div>
            <select
              id="major_TH"
              defaultValue=""
              className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500 font-kanit"
              required
              onChange={handleMajorSelectChange}
            >
              <option value="" disabled>
                เลือก
              </option>
              {ALL_DATA.faculty[facultySelectedIndex].programs.map((value, index, array)=>(
                <option key={index}>
                  {array[index].name_th}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control w-full max-w-xs md:col-span-2">
            <div className="label">
              <span className="label-text text-white font-kanit">สาขา</span>
            </div>
            <select
              id="tag"
              defaultValue=""
              className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500 font-kanit" 
              required
              onChange={handleTagSelectChange}
            >
              <option value="" disabled>
                เลือก
              </option>
              {ALL_DATA.faculty[facultySelectedIndex].programs[majorSelectedIndex].codes.map((value, index, array)=>(
                <option key={index}>
                  {array[index]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3 my-10 md:gap-52 md:mx-5">
          <button
            type="button"
            className="btn btn-ghost min-w-20 bg-transparent font-kanit hover:text-green-500"
            onClick={handleBackBtn}
          >
            <FaArrowLeftLong />
            ย้อนกลับ
          </button>
          <button
            type="submit"
            className="btn btn-ghost min-w-20 bg-black font-kanit hover:text-green-500"
          >
            ต่อไป
            <FaArrowRightLong />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ThirdSignUp;
