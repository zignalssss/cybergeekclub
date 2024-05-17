import React from "react";

interface budget_para {
  title: string;
  cost: number;
}

export default function All_Budget({ title, cost }: budget_para) {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl w-full sm:w-3/4 lg:w-2/4 my-4 mx-2">
      <h1 className="px-8 py-4 font-kanit font-bold text-xl">{title}</h1>
      {cost >= 0 ? (
        <h1 className="px-8 py-4 font-kanit font-bold text-green-500 text-4xl">+ {cost.toFixed(2)} บาท</h1>
      ) : (
        <h1 className="px-8 py-4 font-kanit font-bold text-red-500 text-4xl">- {(-cost).toFixed(2)} บาท</h1>
      )}
    </div>
  );
}
