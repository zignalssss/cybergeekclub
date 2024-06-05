"use client";
import React, { useEffect, useState } from "react";
import GridNews from "@/components/news/grid-news";
import SearchNews from "@/components/searchEngine/searchNews";
import axios from "axios";

interface newsObj {
  banner_th : string,
  title_th : string,
  particulars_th : string,
}

const News: React.FC<{ searchParams?: { query?: string } }> = ({
  searchParams,
}) => {
  const query = searchParams?.query || "";
  const [newsObj, setNewsObj] = useState<newsObj[]>([]);
  const getNews = async () => {
    try {
      const res = await axios.get("/api/news/getallnews");
      const newsObj = res.data.data;
      setNewsObj(newsObj);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="h-screen bg-black overflow-auto scroll-smooth">
      <h1 className="text-center text-4xl font-kanit font-bold py-10">
        ข่าวสารชมรม
      </h1>
      <SearchNews />
      <div className="flex justify-center w-full h-fit">
        <div className="bg-black w-4/5 h-4/5">
          <GridNews news={newsObj} query={query} />
        </div>
      </div>
    </div>
  );
};

export default News;
