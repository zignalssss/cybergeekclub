import React from "react";
import { formatThaiDateTimeShort } from "@/lib/utils/formatDate";
interface activitiesObj {
  id: string;
  published_status: boolean;
  banner_th: string;
  banner_en: string;
  title_th: string;
  title_en: string;
  particulars_th: string;
  particulars_en: string;
  start_period: string;
  end_period: string;
}

interface activitiesHistory {
  id: string;
  email: string;
  corporate_activity_id: string;
  built: string;
}

interface Prop {
  activitiesObj : activitiesObj[];
  activitiesHistory : activitiesHistory[];
}

const ActivitiesHistory = ({activitiesObj, activitiesHistory} : Prop) => {
  return (
    <div className="w-full min-h-full h-fit border border-white/25 rounded-3xl">
      <div className="grid grid-cols-5 font-kanit m-5 pb-5 border-b border-white/25">
        <div>
          <p className="text-center">ลำดับ</p>
        </div>
        <div className="col-span-3 border-x border-white/25">
          <p className="text-center">ชื่อกิจกรรม</p>
        </div>
        <div>
          <p className="text-center">เวลาที่ลงทะเบียน</p>
        </div>
      </div>
      {activitiesHistory.map((element: activitiesHistory, index: number) => {
        const activity = activitiesObj.find(obj => obj.id === element.corporate_activity_id);
        return (
          <div
            key={index}
            className="grid grid-cols-5 m-5 border-b border-white/25"
          >
            <div>
              <p className="text-center">{index + 1}</p>
            </div>
            <div className="col-span-3 border-x border-white/25">
              <p className="pl-2">{activity?.title_th}</p>
            </div>
            <div>
              <p className="text-center">{formatThaiDateTimeShort(element.built)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivitiesHistory;
