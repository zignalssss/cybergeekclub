"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface newsObj {
  title: string;
  detail: string;
}
interface GridNewsProps {
  news: newsObj[];
  query: string;
}

const GridNews: React.FC<GridNewsProps> = ({ news, query }) => {
  const filteredNews = Array.isArray(news)
    ? news.filter((news) => {
        return news.title.toLowerCase().includes(query.toLowerCase());
      })
    : [];
  const [isFound, setIsFound] = useState("");

  return (
    <div className={`${isFound} grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-fit h-fit overflow-y-auto`}>
      {Array.isArray(news) && filteredNews.length === 0 && (
        <>
        <div className="h-[500px] w-[500px]"/>
        <div className="flex justify-center">
          <h1 className="text-xl font-inter text-center">News Not Found</h1>
        </div>
        <div className="h-[500px] w-[500px]"/>
        </>
      )}
      {Array.isArray(news) &&
        filteredNews.map((element, index) => (
          <motion.div
            key={index}
            className="text-center px-5 py-5 mx-2 my-2 border-solid border-white/50 border-2 rounded-2xl"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://as2.ftcdn.net/v2/jpg/04/79/39/21/1000_F_479392118_SyGDm9Rewoxp5kpSiQBMVd96nl2M4GZs.jpg"
              width={500}
              height={500}
              alt="placeholder"
            ></Image>
            <p>{element.title}</p>
            <p>{element.detail}</p>
          </motion.div>
        ))}
    </div>
  );
};
export default GridNews;
