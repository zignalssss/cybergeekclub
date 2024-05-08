import React from "react";
import GridNews from "@/components/news/grid-news";

export default function News() {
  return (
    <>
      <div className="h-screen bg-black overflow-auto scroll-smooth scrollbar-hide">
        <h1 className="text-center text-4xl font-inter font-bold py-10">
          News
        </h1>
        <div className="flex justify-center w-[100vw] h-fit">
          <div className="bg-black w-4/5 h-4/5">
            <GridNews list={["titleTest","titleTest","titleTest","titleTest","titleTest","titleTest","titleTest","titleTest","titleTest","titleTest"]} />
          </div>
        </div>
      </div>
    </>
  );
}
