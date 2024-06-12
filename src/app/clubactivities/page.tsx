"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const SearchActivities = dynamic(
  () => import("@/components/searchEngine/SearchActivities")
);
const GridActivities = dynamic(
  () => import("@/components/activities/GridActivities")
);

interface activitiesObj {
  id : string,
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

const Activities: React.FC<{ searchParams?: { query?: string } }> = ({
  searchParams,
}) => {
  const query = searchParams?.query || "";
  const [activitiesObj, setActivitiesObj] = useState<activitiesObj[]>([]);
  const getActivities = async () => {
    try {
      const res = await axios.get("/api/activities/getallactivities");
      const activities = res.data.data;
      setActivitiesObj(activities);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActivities();
  }, []);
  return (
    <>
      <div className="h-fit min-h-screen">
        <h1 className="text-3xl font-kanit text-center p-10">กิจกรรมองค์กร</h1>
        <SearchActivities />
        <div className="flex justify-center w-full h-fit">
          <div className="bg-black w-4/5 h-4/5">
            <GridActivities activities={activitiesObj} query={query} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
