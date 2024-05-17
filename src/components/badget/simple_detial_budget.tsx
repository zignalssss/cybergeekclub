import React from "react";

interface budget {
  typeBudget: string;
  income: number;
  budgetSupport: number;
}

export default function Simple_Detial_Budget({ typeBudget, income, budgetSupport }: budget) {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl w-full sm:w-3/4 lg:w-2/4 my-4 mx-2 flex flex-col items-center">
      <h1 className="px-4 py-4 font-kanit font-bold text-2xl">{typeBudget}</h1>
      <div className="flex flex-col sm:flex-row justify-around w-full">
        <div className="px-10 py-2">
          <h2 className="px-10 pt-4 font-kanit font-bold text-xl">เงินรายได้</h2>
          {typeBudget === "งบประมาณ" && <h2 className="px-10 pt-1 text-green-500 font-kanit font-bold text-2xl">+ {income.toFixed(2)} บาท</h2>}
          {typeBudget === "รายจ่าย" && <h2 className="px-10 pt-1 text-red-500 font-kanit font-bold text-2xl">- {income.toFixed(2)} บาท</h2>}
        </div>
        <div className="px-10 py-2">
          <h2 className="px-10 pt-4 font-kanit font-bold text-xl">งบอุดหนุน</h2>
          {typeBudget === "งบประมาณ" && <h2 className="px-10 pt-1 text-green-500 font-kanit font-bold text-2xl">+ {budgetSupport.toFixed(2)} บาท</h2>}
          {typeBudget === "รายจ่าย" && <h2 className="px-10 pt-1 text-red-500 font-kanit font-bold text-2xl">- {budgetSupport.toFixed(2)} บาท</h2>}
        </div>
      </div>
    </div>
  );
}
