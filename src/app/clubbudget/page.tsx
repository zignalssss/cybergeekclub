import React from "react";
import All_Budget from "@/components/badget/all-budget";
import Simple_Detial_Budget from "@/components/badget/simple_detial_budget";
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
                    <div className="bg-[#1E1E1E] rounded-2xl h-full w-2/4 my-4 mx-4 flex flex-col items-center">
                        <h1 className="px-4 py-4 font-kanit font-bold text-2xl">รายระเอียดงบประมาณ</h1>
                        <div className="flex justify-around w-full h-full overflow-auto scroll-smooth scrollbar-hide">
                            <div className="px-10 py-2">
                                <h2 className="px-5 pt-4 font-kanit font-bold text-l">รายได้จากเงินรายได้</h2>
                                <div className=" bg-[#302E2E] w-full rounded-lg px-2 py-2 my-2">
                                    <h1>งบสนับสนุน</h1>
                                    <h1 className="text-green-500">+ 100.00 บาท</h1>
                                </div>
                        
                                
                            </div>
                            <div className="px-5 py-2 py-2 ">
                                <h2 className="px-10 pt-4 font-kanit font-bold text-l ">รายได้จากงบอุดหนุน</h2>
                                <div className=" bg-[#302E2E] w-full rounded-lg px-2 py-2 my-2">
                                    <h1>งบสนับสนุน</h1>
                                    <h1 className="text-green-500">+ 100.00 บาท</h1>
                                </div>
                          
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-2xl h-full w-2/4 my-4 mx-4 flex flex-col items-center">
                        <h1 className="px-4 py-4 font-kanit font-bold text-2xl">รายระเอียดรายจ่าย</h1>
                        <div className="flex justify-around w-full h-full overflow-auto scroll-smooth scrollbar-hide">
                            <div className="px-10 py-2 ">
                                <h2 className="px-5 pt-4 font-kanit font-bold text-l">รายจ่ายจากเงินรายจ่าย</h2>
                                <div className=" bg-[#302E2E] w-full rounded-lg px-2 py-2 my-2">
                                    <h1>งบสนับสนุน</h1>
                                    <h1 className="text-red-500">- 100.00 บาท</h1>
                                </div>
                            </div>
                            <div className="px-10 py-2">
                                <h2 className="px-5 pt-4 font-kanit font-bold text-l">รายจ่ายจากงบอุดหนุน</h2>
                                <div className=" bg-[#302E2E] w-full rounded-lg px-2 py-2 my-2">
                                    <h1>งบสนับสนุน</h1>
                                    <h1 className="text-red-500">- 100.00 บาท</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}