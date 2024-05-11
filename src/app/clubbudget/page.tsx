import React from "react";
import All_Budget from "@/components/badget/all-budget";
import Simple_Detial_Budget from "@/components/badget/simple_detial_budget";
import All_Detial_Budget from "@/components/badget/all-detial-budget";
export default function Budget(){
    return(
        <div className="flex flex-col items-center h-dvh bg-black overflow-auto scroll-smooth scrollbar-hide">
            <div className="grid grid-rows-4 w-4/5 h-full pb-8">
                {/* งบประมาณทั้งหมดทั้ง รายรับ กับ รายจ่าย */}
                <div className="row-span-1 flex justify-around">
                    <All_Budget title="งบประมาณทั้งหมด"  cost={51500.00} />
                    <All_Budget title="รายจ่ายทั้งหมด" cost={-1500}/>
                </div>
                <div className=" row-span-1 flex justify-around">
                {/* รายละเอียดรายรับรายจ่ายบางส่วน */}
                    <Simple_Detial_Budget typeBudget="งบประมาณ" income={0} budgetSupport={0}/>
                    <Simple_Detial_Budget typeBudget="รายจ่าย" income={0} budgetSupport={0}/>
                </div>
                <div className="row-span-2 flex justify-around">
                {/* รายละเอียดรายรับรายจ่าย */}
                    <All_Detial_Budget typeBudget="รายระเอียดงบประมาณ" detial_income={[{ key: "งบสนับสนุน", value: 1000 }]} detial_support={[{ key: "งบสนับสนุน", value: 1000 },]}/>
                    <All_Detial_Budget typeBudget="รายระเอียดรายจ่าย" detial_income={[{ key: "งบสนับสนุน", value: 1000 }]} detial_support={[{ key: "งบสนับสนุน", value: 1000 },]}/>
                </div>
            </div>
        </div>
    );
}