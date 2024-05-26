"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface activitiesObj {
  banner: string;
  title: string;
  detail: string;
}
interface GridActivitiesProps {
  activities: activitiesObj[];
  query: string;
}

const GridActivities: React.FC<GridActivitiesProps> = ({
  activities,
  query,
}) => {
  const router = useRouter();
  const filteredActivities = useMemo(() => {
    return activities.filter((activitiesItem) =>
      activitiesItem.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [activities, query]);

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
              src={element.banner}
              width={500}
              height={500}
              alt="placeholder"
              onClick={() => {
                router.push(`/activities/${index}`);
              }}
              className="hover:cursor-pointer"
            />
            <article
              className="text-wrap hover:cursor-pointer"
              onClick={() => {
                router.push(`/activities/${index}`);
              }}
            >
              <p className="group-hover:text-green-500 font-kanit text-start text-xl py-4">
                {element.title}
              </p>
              <p className="group-hover:text-green-500 font-kanit text-start text-neutral-300">
                {element.detail}
              </p>
            </article>
            <button className="btn btn-success place-self-center">
              เข้าร่วมกิจกรรม
            </button>
          </motion.div>
        ))}
    </div>
  );
};
export default GridActivities;
