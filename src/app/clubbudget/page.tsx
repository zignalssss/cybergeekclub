import React from "react";
import All_Budget from "@/components/badget/all-budget";
import Simple_Detial_Budget from "@/components/badget/simple_detial_budget";
import All_Detial_Budget from "@/components/badget/all-detial-budget";

export default function Budget() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black overflow-auto scroll-smooth scrollbar-hide">
      <div className="grid grid-cols-1 gap-4 w-11/12 sm:w-4/5 h-full pb-8">
        {/* งบประมาณทั้งหมดทั้ง รายรับ กับ รายจ่าย */}
        <div className="col-span-1 flex flex-col sm:flex-row justify-around">
          <All_Budget title="งบประมาณทั้งหมด" cost={51500.00} />
          <All_Budget title="รายจ่ายทั้งหมด" cost={-1500} />
        </div>
        {/* รายละเอียดรายรับรายจ่ายบางส่วน */}
        <div className="col-span-1 flex flex-col sm:flex-row justify-around">
          <Simple_Detial_Budget typeBudget="งบประมาณ" income={0} budgetSupport={0} />
          <Simple_Detial_Budget typeBudget="รายจ่าย" income={0} budgetSupport={0} />
        </div>
        {/* รายละเอียดรายรับรายจ่าย */}
        <div className="col-span-1 flex flex-col sm:flex-row justify-around">
          <All_Detial_Budget
            typeBudget="รายระเอียดงบประมาณ"
            detial_income={[{ key: "งบสนับสนุน", value: 1000 }]}
            detial_support={[{ key: "งบสนับสนุน", value: 1000 }]}
          />
          <All_Detial_Budget
            typeBudget="รายระเอียดรายจ่าย"
            detial_income={[{ key: "งบสนับสนุน", value: 1000 }]}
            detial_support={[{ key: "งบสนับสนุน", value: 1000 }]}
          />
        </div>
      </div>
    </div>
  );
}
