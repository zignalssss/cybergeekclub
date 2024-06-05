"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface newsObj {
  banner_th : string,
  title_th : string,
  particulars_th : string,
}
interface GridNewsProps {
  news: newsObj[];
  query: string;
}

const GridNews: React.FC<GridNewsProps> = ({ news, query }) => {
  const router = useRouter();
  const filteredNews = useMemo(() => {
    return news.filter((newsItem) =>
      newsItem.title_th.toLowerCase().includes(query.toLowerCase())
    );
  }, [news, query]);

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
            className="group px-10 py-10 hover:px-5 hover:cursor-pointer hover:py-5 mx-2 my-2 border-solid border-white/50 border-2 rounded-2xl hover:ring-1 hover:border-green-500 hover:ring-green-500 transition-all duration-200 hover:shadow-[0_0_10px_rgba(34, 197, 94,1)] shadow-zinc-200"
            initial={{ opacity: 0, y: -10}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            onClick={()=>{
              router.push(`/news/${index}`)
            }}
          >
            <Image
              src={element.banner_th}
              width={500}
              height={500}
              alt="placeholder"
            ></Image>
            <article className="text-wrap">
              <p className="group-hover:text-green-500 font-kanit text-start text-xl py-4">{element.title_th}</p>
              <p className="group-hover:text-green-500 font-kanit text-start text-neutral-300">{element.particulars_th}</p>
            </article>
          </motion.div>
        ))}
    </div>
  );
};
export default GridNews;
