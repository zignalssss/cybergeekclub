import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiFileWarningFill } from "react-icons/ri";
import { document_log_status } from "@prisma/client";
import Link from "next/link";


type LIST = {
  id:string;
  account_id:string;
  document:string;
  status:document_log_status;
  notation:string;
  account_admin_id:string;         
  built:string;
};

const ShowStatus = ({ prop }: { prop: LIST[] }) => {
  return (
    <div className="min-h-screen h-fit w-11/12 border border-white rounded-3xl my-10">
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
                <th>{element.built}</th>
                <td><Link target="_blank" href={element.document}>คลิกเพื่อดูไฟล์</Link></td>
                <td className="flex md:grid md:grid-cols-2">
                  {element.status}
                  {element.status === "PENDING" ? (
                    <span className="loading loading-spinner loading-xs text-warning"></span>
                  ) : element.status === "APPROVE" ? (
                    <BsFillCheckCircleFill className="text-green-500 text-sm"/>
                  ) : element.status === "REJECT" ? (
                    <AiFillCloseCircle className="text-red-500 text-sm"/>
                  ) : (
                    <RiFileWarningFill className="text-yellow-500 text-sm"/>
                  )}
                </td>
                <td>{element.notation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowStatus;
