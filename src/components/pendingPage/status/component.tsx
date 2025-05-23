import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiFileWarningFill } from "react-icons/ri";
import Link from "next/link";
import { formatThaiDateTime } from "@/lib/utils/formatDate";
import { document_log } from "@prisma/client";

const ShowStatus = ({ prop }: { prop: document_log[] }) => {
  return (
    <div className="min-h-screen h-fit md:w-11/12 border border-white rounded-3xl my-10">
      <div className="text-center text-3xl my-10">สถานะใบสมัคร</div>
      <div className="pb-10 w-screen overflow-x-auto md:w-full md:overflow-auto">
        <table className="table w-[800px] md:w-full">
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
                <th>{formatThaiDateTime(element.built.toString())}</th>
                <td><Link target="_blank" href={element.document}>คลิกเพื่อดูไฟล์</Link></td>
                <td>
                  <div className="flex md:grid md:grid-cols-2">
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
                  </div>
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
