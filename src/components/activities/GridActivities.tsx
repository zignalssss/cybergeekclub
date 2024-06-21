"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import axios from "axios";
import {
  formatThaiDateTime,
  formatEnglishDateTime,
  isPastTime,
} from "@/lib/utils/formatDate";
import {
  corporate_activity,
  register_corporate_activity,
} from "@prisma/client";

// !Comment is part of the code before deployment
const testActivities: corporate_activity[] = [
  {
    id: "1",
    title_th: "กิจกรรมทดสอบ",
    title_en: "Test Activity",
    particulars_th: "กิจกรรมทดสอบ",
    particulars_en: "Test Activity",
    start_period: new Date(),
    end_period: new Date(),
    banner_th:
      "https://cybergeek-club-bucket.s3.ap-southeast-1.amazonaws.com/asset/image/tester/ratioOfpic.png",
    banner_en:
      "https://cybergeek-club-bucket.s3.ap-southeast-1.amazonaws.com/asset/image/tester/ratioOfpic.png",
    published_status: true,
    built: new Date(),
  },
  {
    id: "2",
    title_th: "กิจกรรมทดสอบ2",
    title_en: "Test Activity2",
    particulars_th: "กิจกรรมทดสอบ2",
    particulars_en: "Test Activity2 ",
    start_period: new Date(),
    end_period: new Date(),
    banner_th:
      "https://cybergeek-club-bucket.s3.ap-southeast-1.amazonaws.com/asset/image/tester/ratioOfpic.png",
    banner_en:
      "https://cybergeek-club-bucket.s3.ap-southeast-1.amazonaws.com/asset/image/tester/ratioOfpic.png",
    published_status: true,
    built: new Date(),
  },
];

interface GridActivitiesProps {
  activities: corporate_activity[];
  query: string;
}

const GridActivities: React.FC<GridActivitiesProps> = ({
  activities,
  query,
}) => {
  const [activitiesHistory, setActivitiesHistory] = useState<
    register_corporate_activity[]
  >([] as register_corporate_activity[]);
  const [isCertified, setIsCertified] = useState<boolean>(false);
  const filteredActivities = useMemo(() => {
    return activities.filter((activitiesItem) =>
      activitiesItem.title_th.toLowerCase().includes(query.toLowerCase())
    );
  }, [activities, query]);
  const [isTH, setIsTH] = useState<boolean[]>(
    new Array(filteredActivities.length).fill(true)
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  const handleClickRegister = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const email = session?.user?.email;
      const role = await axios.post("/api/user/getrolebyemail", {
        email: email,
      });
      if (role.data.data.role === "MEMBER") {
        return;
      }
      await axios.post("/api/activities/registeractivities", { id });
      getActivitiesHistory();
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleClickCancel = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const activityHistoryId = activitiesHistory.find(
        (item) => item.corporate_activity_id === id
      )?.id;
      if (activityHistoryId) {
        await axios.delete(`/api/activities/deleteregisteractivities/`, {
          data: { id: activityHistoryId },
        });
      }
      getActivitiesHistory();
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
    setIsTH(new Array(filteredActivities.length).fill(true));
    const getRole = async () => {
      try {
        const email = session?.user?.email;
        const role = await axios.post("/api/user/getrolebyemail", {
          email: email,
        });
        if (role.data.data.role === "CERTIFIED") {
          setIsCertified(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRole();
    getActivitiesHistory();
  }, [filteredActivities, session]);
  return (
    <div className={`grid grid-cols-1 w-full h-fit`}>
      {Array.isArray(activities) && filteredActivities.length === 0 && (
        <>
          <div className="flex justify-center">
            <h1 className="text-xl font-inter text-center">
              activities Not Found
            </h1>
          </div>
        </>
      )}
      {/* filteredActivities for Product / testActivities for testing */}
      {Array.isArray(activities) &&
        testActivities.map((element, index) => {
          const isPast = isPastTime(element.start_period.toString());
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
              <picture className="xl:h-[512px] xl:w-full flex justify-center place-items-center">
                <Image
                  src={isTH[index] ? element.banner_th : element.banner_en}
                  width={512}
                  height={512}
                  alt="placeholder"
                  className="md:rounded-l-2xl md:rounded-none rounded-t-2xl size-full"
                />
              </picture>
              <article className="mx-5 grid-rows-2 h-full col-span-2 ">
                <div className="w-full max-h-[80%]">
                  <p className="break-words whitespace-pre-wrap text-white font-kanit text-start text-2xl py-4">
                    {element.title_th && isTH[index]
                      ? element.title_th
                      : element.title_en && !isTH[index]
                      ? element.title_en
                      : isTH[index]
                      ? "ไม่มีชื่อเรื่อง"
                      : "No title"}
                  </p>
                  <h1 className="text-green-500">
                    {isTH[index]
                      ? "รายละเอียดกิจกรรม : "
                      : "Activity details :"}
                  </h1>
                  <pre className="my-2 overflow-auto h-64 max-h-64 break-words whitespace-pre-wrap font-kanit text-start text-neutral-300">
                    {isTH[index]
                      ? element.particulars_th
                      : element.particulars_en}
                  </pre>
                  <div className="bottom-0">
                    <pre className="break-words whitespace-pre-wrap flex font-kanit text-start text-neutral-300">
                      <h1 className="text-green-500">
                        {isTH[index] ? "เวลาเริ่มกิจกรรม : " : "Event Start :"}
                      </h1>
                      {isTH[index]
                        ? formatThaiDateTime(element.start_period.toString())
                        : formatEnglishDateTime(
                            element.start_period.toString()
                          )}
                    </pre>
                    <pre className="break-words whitespace-pre-wrap flex font-kanit text-start text-neutral-300">
                      <h1 className="text-green-500">
                        {isTH[index] ? "เวลาสิ้นสุดกิจกรรม : " : "Event End :"}
                      </h1>
                      {isTH[index]
                        ? formatThaiDateTime(element.end_period.toString())
                        : formatEnglishDateTime(element.end_period.toString())}
                    </pre>
                  </div>
                </div>
                <div className="flex justify-center gap-5 h-fit">
                  <div className="flex justify-center">
                    {isLoading && (
                      <button className="btn place-self-center my-5" disabled>
                        {isTH[index] ? "กำลังดำเนินการ" : "Loading..."}
                      </button>
                    )}
                    {isPublished &&
                      !isRegistered &&
                      !isPast &&
                      isCertified &&
                      !isLoading && (
                        <button
                          className="btn btn-success place-self-center my-5"
                          onClick={(e) => handleClickRegister(e, element.id)}
                        >
                          {isTH[index]
                            ? "เข้าร่วมกิจกรรม"
                            : "Join the activity"}
                        </button>
                      )}
                    {isPublished &&
                      isRegistered &&
                      !isPast &&
                      isCertified &&
                      !isLoading && (
                        <button
                          className="btn btn-error place-self-center my-5"
                          onClick={(e) => handleClickCancel(e, element.id)}
                        >
                          {isTH[index]
                            ? "ยกเลิกการเข้าร่วมกิจกรรม"
                            : "Cancel the activity"}
                        </button>
                      )}
                    {isPast && isCertified && (
                      <button
                        className="btn !bg-white/75 !text-black place-self-center my-5"
                        disabled
                      >
                        {isTH[index] ? "กิจกรรมปิดรับสมัคร" : "Activity closed"}
                      </button>
                    )}
                    {!isPublished && !isPast && isCertified && !isLoading && (
                      <button
                        className="btn !bg-white/75 !text-black place-self-center my-5"
                        disabled
                      >
                        {isTH[index]
                          ? "กิจกรรมยังไม่เปิดรับสมัคร"
                          : "Activity not open"}
                      </button>
                    )}
                    {!isCertified && (
                      <button
                        className="btn !bg-white/75 !text-black place-self-center my-5"
                        disabled
                      >
                        {isTH[index] ? "ดูอย่างเดียว" : "View only"}
                      </button>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="btn btn-primary place-self-center my-5"
                      onClick={() => {
                        setIsTH((prev) => [
                          ...prev.slice(0, index),
                          !prev[index],
                          ...prev.slice(index + 1),
                        ]);
                      }}
                    >
                      {isTH[index] ? "EN" : "TH"}
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
