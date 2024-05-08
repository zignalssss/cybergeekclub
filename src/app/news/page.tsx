import React from "react";
import GridNews from "@/components/news/grid-news";
import SearchNews from "@/components/searchEngine/searchNews";

export default function News({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  interface newsNewsObj {
    title: string;
    detail: string;
  }
  const newsObj: newsNewsObj[] = [
    {
      title: "test1",
      detail: "detail",
    },
    {
      title: "test2",
      detail: "detail",
    },
    {
      title: "test3",
      detail: "detail",
    },
  ];
  return (
    <>
      <div className="h-screen bg-black overflow-auto scroll-smooth scrollbar-hide">
        <h1 className="text-center text-4xl font-inter font-bold py-10">
          News
        </h1>
        <SearchNews />
        <div className="flex justify-center w-[100vw] h-fit">
          <div className="bg-black w-4/5 h-4/5">
            <GridNews news={newsObj} query={query} />
          </div>
        </div>
      </div>
    </>
  );
}
