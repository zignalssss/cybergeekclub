"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "axios";
import { formatThaiDateTime, isPastTime } from "@/lib/utils/formatDate";
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
  const [isTH, setIsTH] = useState<boolean>(true);
  const [activitiesHistory, setActivitiesHistory] = useState<
    activitiesHistory[]
  >([]);
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
    const activityHistoryId = activitiesHistory.find(
      (item) => item.corporate_activity_id === id
    )?.id;
    if (activityHistoryId) {
      await axios.delete(`/api/activities/deleteregisteractivities/`, {
        data: { id: activityHistoryId },
      });
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
  };
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
        filteredActivities.map((element, index) => {
          const isPast = isPastTime(element.start_period);
          const isRegistered = activitiesHistory.some(
            (item) => item.corporate_activity_id === element.id
          );
          const isPublished = element.published_status;
          return (
            <motion.div
              key={index}
              className="group md:grid md:grid-cols-3 mx-2 my-2 border-solid border-white/50 border-2 rounded-2xl hover:ring-1 hover:border-green-500 hover:ring-green-500 transition-all duration-200 hover:shadow-[0_0_10px_rgba(34, 197, 94,1)] shadow-zinc-200"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-[512px] w-[512px]">
                <Image
                  src={isTH ? element.banner_th : element.banner_en}
                  width={512}
                  height={512}
                  alt="placeholder"
                  className="rounded-l-2xl"
                />
              </div>
              <article className="mx-5 grid-rows-2 h-full col-span-2 ">
                <div className="w-full max-h-[80%]">
                  <pre className="break-words whitespace-pre-wrap group-hover:text-green-500 font-kanit text-start text-xl py-4">
                    {isTH ? element.title_th : element.title_en}
                  </pre>
                  <h1 className="text-white">รายละเอียดกิจกรรม : </h1>
                  <pre className="my-2 overflow-auto h-64 max-h-64 break-words whitespace-pre-wrap group-hover:text-green-500 font-kanit text-start text-neutral-300">
                    {isTH ? element.particulars_th : element.particulars_en}
                  </pre>
                  <div className="bottom-0">
                    <pre className="break-words whitespace-pre-wrap flex group-hover:text-green-500 font-kanit text-start text-neutral-300">
                      <h1 className="text-white">เวลาเริ่มกิจกรรม : </h1>
                      {formatThaiDateTime(element.start_period)}
                    </pre>
                    <pre className="break-words whitespace-pre-wrap flex group-hover:text-green-500 font-kanit text-start text-neutral-300">
                      <h1 className="text-white">เวลาสิ้นสุดกิจกรรม : </h1>
                      {formatThaiDateTime(element.end_period)}
                    </pre>
                  </div>
                </div>
                <div className="flex justify-center gap-5 h-fit">
                  <div className="flex justify-center">
                    {isPublished && !isRegistered && !isPast && (
                      <button
                        className="btn btn-success place-self-center mt-5"
                        onClick={(e) => handleClickRegister(e, element.id)}
                      >
                        เข้าร่วมกิจกรรม
                      </button>
                    )}
                    {isPublished && isRegistered && !isPast && (
                      <button
                        className="btn btn-error place-self-center mt-5"
                        onClick={(e) => handleClickCancel(e, element.id)}
                      >
                        ยกเลิกการเข้าร่วมกิจกรรม
                      </button>
                    )}
                    {isPast && (
                      <button
                        className="btn !bg-white !text-black place-self-center mt-5"
                        disabled
                      >
                        กิจกรรมปิดรับสมัคร
                      </button>
                    )}
                    {!isPublished && !isPast && (
                      <button
                        className="btn !bg-white !text-black place-self-center mt-5"
                        disabled
                      >
                        กิจกรรมยังไม่เปิดรับสมัคร
                      </button>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="btn btn-primary place-self-center mt-5"
                      onClick={() => {
                        setIsTH(!isTH);
                      }}
                    >
                      {isTH ? "EN" : "TH"}
                    </button>
                  </div>
                </div>
              </article>
            </motion.div>
          );
        })}
    </div>
  );
};
export default GridActivities;
