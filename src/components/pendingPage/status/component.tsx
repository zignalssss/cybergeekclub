import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiFileWarningFill } from "react-icons/ri";


type LIST = {
  time: string;
  name: string;
  status: "pending" | "accept" | "deny" | "error";
  note: string;
};

const ShowStatus = ({ prop }: { prop: LIST[] }) => {
  return (
    <div className="h-fit w-11/12 border border-white rounded-3xl my-10">
      <div className="text-center text-3xl my-10">สถานะใบสมัคร</div>
      <div className=" pb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white font-kanit text-base">
              <th className="border-t">เวลา</th>
              <th className="border-t">รายการ</th>
              <th className="border-t">สถานะ</th>
              <th className="border-t">หมายเหตุ</th>
            </tr>
          </thead>
          <tbody className="font-kanit">
            {prop.map((element, index) => (
              <tr key={index}>
                <th>{element.time}</th>
                <td>{element.name}</td>
                <td className="flex md:grid md:grid-cols-2">
                  {element.status}
                  {element.status === "pending" ? (
                    <span className="loading loading-spinner loading-xs text-warning"></span>
                  ) : element.status === "accept" ? (
                    <BsFillCheckCircleFill className="text-green-500 text-sm"/>
                  ) : element.status === "deny" ? (
                    <AiFillCloseCircle className="text-red-500 text-sm"/>
                  ) : (
                    <RiFileWarningFill className="text-yellow-500 text-sm"/>
                  )}
                </td>
                <td>{element.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowStatus;
