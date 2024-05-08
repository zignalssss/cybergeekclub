"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface newsObj {
  banner: string;
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

  return (
    <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-fit h-fit overflow-y-auto`}>
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
            className="group px-5 py-5 mx-2 my-2 border-solid border-white/50 border-2 rounded-2xl hover:ring-1 hover:border-green-500 hover:ring-green-500 transition-all duration-200 hover:shadow-[0_0_10px_rgba(34, 197, 94,1)] shadow-zinc-200"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={element.banner}
              width={500}
              height={500}
              alt="placeholder"
            ></Image>
            <article className="text-wrap">
              <p className="group-hover:text-green-500 font-kanit text-start text-xl py-4">{element.title}</p>
              <p className="group-hover:text-green-500 font-kanit text-start text-neutral-300">{element.detail}</p>
            </article>
          </motion.div>
        ))}
    </div>
  );
};
export default GridNews;
