"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const ActivitiesHistory = dynamic(
  () => import("@/components/activities/ActivitiesHistory")
);
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
  built : string;
}

const UserActivitieshistory = () => {
  const [activitiesObj, setActivitiesObj] = useState<activitiesObj[]>([]);
  const [activitiesHistory, setActivitiesHistory] = useState<
    activitiesHistory[]
  >([]);
  const getAllActivities = async () => {
    try {
      const res = await axios.get("/api/activities/getallactivities");
      const activities = res.data.data;
      setActivitiesObj(activities);
    } catch (error) {
      console.log(error);
    }
  };
  const getActivitiesHistory = async () => {
    try {
      const res = await axios.get("/api/activities/getactivitieshistory");
      const activitiesHistory = res.data.data;
      setActivitiesHistory(activitiesHistory);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllActivities();
    getActivitiesHistory();
  },[])
  
  return (
    <div className="min-h-screen h-fit">
      <h1 className="text-3xl font-kanit text-center p-10">ประวัติกิจกรรม</h1>
      <div className="flex justify-center w-full h-screen">
        <div className="w-4/5 h-4/5">
          <ActivitiesHistory activitiesObj={activitiesObj} activitiesHistory={activitiesHistory} />
        </div>
      </div>
    </div>
  );
};

export default UserActivitieshistory;
