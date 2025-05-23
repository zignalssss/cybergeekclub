"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { corporate_activity } from "@prisma/client";
const SearchActivities = dynamic(
  () => import("@/components/searchEngine/SearchActivities")
);
const GridActivities = dynamic(
  () => import("@/components/activities/GridActivities")
);


const Activities: React.FC<{ searchParams?: { query?: string } }> = ({
  searchParams,
}) => {
  const query = searchParams?.query || "";
  const [activitiesObj, setActivitiesObj] = useState<corporate_activity[]>([] as corporate_activity[]);
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
        <title>Activities | CyberGeek</title>
        <h1 className="text-4xl font-extrabold font-kanit text-center p-10">กิจกรรมองค์กร</h1>
        <SearchActivities />
        <div className="flex justify-center w-full h-fit">
          <div className="bg-black w-11/12 h-4/5">
            <GridActivities activities={activitiesObj} query={query} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
