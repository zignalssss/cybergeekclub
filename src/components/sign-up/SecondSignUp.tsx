"use client";

import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
type Prop = {
  onSubmit: (data: FormData) => void;
  state: (value: number) => void;
};
type FormData = {
  prefix_TH: string;
  prefix_EN: string;
  name_TH: string;
  name_EN: string;
  surname_TH: string;
  surname_EN: string;
  nickname_TH: string;
  nickname_EN: string;
  phone_number: string;
  birth_date: string;
};
const SecondSignUp = ({ onSubmit, state }: Prop) => {
  const [formData, setFormData] = useState<FormData>({
    prefix_TH: "",
    prefix_EN: "",
    name_TH: "",
    name_EN: "",
    surname_TH: "",
    surname_EN: "",
    nickname_TH: "",
    nickname_EN: "",
    phone_number: "",
    birth_date: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const prefix = [
    ["นาย", "Mr"],
    ["นาง", "Mrs"],
    ["นางสาว", "Miss"],
  ];
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { selectedIndex } = e.target;
    setFormData({
      ...formData,
      prefix_TH: prefix[selectedIndex - 1][0],
      prefix_EN: prefix[selectedIndex - 1][1],
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
    state(0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    onSubmit(formData);
    state(2);
  };
  return (
    <div className="flex flex-col w-80 sm:w-[500px] h-full md:w-[700px] md:h-[700px] md: bg-[#181818] rounded-3xl border border-white/15">
      <div className="flex justify-center my-10">
        <h1 className="font-kanit text-3xl">ข้อมูลส่วนตัว</h1>
      </div>
      <form id="registrationForm2" onSubmit={handleSubmit}>
        <div className="md:px-10 md:grid-cols-2 md:place-items-center justify-center grid w-full gap-3">
          <label className="form-control w-full max-w-xs md:col-span-2">
            <div className="label">
              <span className="label-text text-white font-kanit">คำนำหน้า</span>
            </div>
            <select
              id="prefixTH"
              defaultValue=""
              className="select select-bordered bg-[#302E2E] invalid:ring-2 invalid:ring-red-500 focus:ring-2 focus:ring-green-500 font-kanit"
              required
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                เลือก
              </option>
              {prefix.map((value, index, array)=>(
                <option key={index} className="font-kanit">
                  {array[index][0]}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text text-white font-kanit">
                ชื่อ (TH)
              </span>
            </div>
            <input
              id="name_TH"
              type="text"
              placeholder="เด็กไทย"
              className="input input-bordered w-full max-w-xs md: text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.name_TH}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">
                นามสกุล (TH)
              </span>
            </div>
            <input
              id="surname_TH"
              type="text"
              placeholder="ใจดี"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.surname_TH}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">
                FirstName (EN)
              </span>
            </div>
            <input
              id="name_EN"
              type="text"
              placeholder="Dekthai"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.name_EN}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">
                LastName (EN)
              </span>
            </div>
            <input
              id="surname_EN"
              type="text"
              placeholder="Jaidee"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.surname_EN}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">
                ชื่อเล่น (TH)
              </span>
            </div>
            <input
              id="nickname_TH"
              type="text"
              placeholder="สุดสวย"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.nickname_TH}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">
                Nickname (EN)
              </span>
            </div>
            <input
              id="nickname_EN"
              type="text"
              placeholder="Sudsuay"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.nickname_EN}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">
                เบอร์โทรศัพท์
              </span>
            </div>
            <input
              id="phone_number"
              type="text"
              placeholder="0xxxxxxxxxx"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.phone_number}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">วันเกิด</span>
            </div>
            <input
              id="birth_date"
              type="date"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 bg-[#302E2E]"
              required
              onChange={handleInputChange}
              value={formData.birth_date}
            />
          </label>
          {errorMessage && (
            <div className="text-center text-red-500 font-kanit">
              {errorMessage}
            </div>
          )}
          
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

export default SecondSignUp;
