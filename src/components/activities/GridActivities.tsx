"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "axios";

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
}
interface GridActivitiesProps {
  activities: activitiesObj[];
  query: string;
}

const GridActivities: React.FC<GridActivitiesProps> = ({
  activities,
  query,
}) => {
  const [activitiesHistory, setActivitiesHistory] = useState<activitiesHistory[]>([]);
  const router = useRouter();
  const filteredActivities = useMemo(() => {
    return activities.filter((activitiesItem) =>
      activitiesItem.title_th.toLowerCase().includes(query.toLowerCase())
    );
  }, [activities, query]);

  const handleClickRegister = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    await axios.post("/api/activities/registeractivities", { id });
    getActivitiesHistory();
  };
  const handleClickCancel = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    const activityHistoryId = activitiesHistory.find(item => item.corporate_activity_id === id)?.id;
    if (activityHistoryId) {
      await axios.delete(`/api/activities/deleteregisteractivities/`, { data: { id: activityHistoryId } });
    }
    getActivitiesHistory();
  };
  const getActivitiesHistory = async () => {
    try {
      const res = await axios.get("/api/activities/getactivitieshistory");
      const activitiesHistory = res.data.data;
      setActivitiesHistory(activitiesHistory);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getActivitiesHistory();
  }, []);
  return (
    <div className={`grid grid-cols-1 w-full h-fit overflow-y-auto`}>
      {Array.isArray(activities) && filteredActivities.length === 0 && (
        <>
          <div className="flex justify-center">
            <h1 className="text-xl font-inter text-center">
              activities Not Found
            </h1>
          </div>
        </>
      )}
      {Array.isArray(activities) &&
        filteredActivities.map((element, index) => (
          <motion.div
            key={index}
            className="group md:grid md:grid-cols-3 px-10 py-10 hover:px-5 hover:py-5 mx-2 my-2 border-solid border-white/50 border-2 rounded-2xl hover:ring-1 hover:border-green-500 hover:ring-green-500 transition-all duration-200 hover:shadow-[0_0_10px_rgba(34, 197, 94,1)] shadow-zinc-200"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={`/asset/image/${element.banner_th}`}
              width={500}
              height={500}
              alt="placeholder"
            />
            <article
              className="text-wrap"
            >
              <p className="group-hover:text-green-500 font-kanit text-start text-xl py-4">
                {element.title_th}
              </p>
              <p className="group-hover:text-green-500 font-kanit text-start text-neutral-300">
                {element.particulars_th}
              </p>
            </article>
            {element.published_status && !activitiesHistory.some(item => item.corporate_activity_id === element.id) ? (
              <button
                className="btn btn-success place-self-center"
                onClick={(e) => handleClickRegister(e, element.id)}
              >
                เข้าร่วมกิจกรรม
              </button>
            ) : element.published_status && activitiesHistory.some(item => item.corporate_activity_id === element.id) ? (
              <button
                className="btn btn-error place-self-center"
                onClick={(e) => handleClickCancel(e, element.id)}
              >
                ยกเลิกการเข้าร่วมกิจกรรม
              </button>
            ) : (
              <button
                className="btn btn-warning place-self-center btn-disabled"
              >
                กิจกรรมปิดรับสมัคร
              </button>
            )}
          </motion.div>
        ))}
    </div>
  );
};
export default GridActivities;
