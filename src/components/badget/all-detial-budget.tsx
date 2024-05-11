import React from "react";
interface detial{
    typeBudget:string;
    detial_income: { [key: string]: any }[];
    detial_support: { [key: string]: any }[];
}
export default function All_Detial_Budget({typeBudget,detial_income,detial_support}:detial){
    return(
        <div className="bg-[#1E1E1E] rounded-2xl h-full w-2/4 my-4 mx-4 flex flex-col items-center">
            <h1 className="px-4 py-4 font-kanit font-bold text-2xl">รายระเอียดงบประมาณ</h1>
            <div className="flex justify-around w-full h-full overflow-auto scroll-smooth scrollbar-hide">
                <div className="px-10 py-2">
                    <h2 className="px-5 pt-4 font-kanit font-bold text-l">รายได้จากเงินรายได้</h2>
                    {detial_income.map((element,index)=>
                        <div className=" bg-[#302E2E] w-full rounded-lg px-2 py-2 my-2">
                            <h1>{element.key}</h1>
                            {typeBudget == "รายระเอียดงบประมาณ" && <h1 className="text-green-500">+ {element.value.toFixed(2)} บาท</h1>}
                            {typeBudget == "รายระเอียดรายจ่าย" && <h1 className="text-red-500">- {element.value.toFixed(2)} บาท</h1>}
                        </div>
                    )}
                </div>
                <div className="px-5 py-2 py-2 ">
                    <h2 className="px-10 pt-4 font-kanit font-bold text-l ">รายได้จากงบอุดหนุน</h2>
                    {detial_support.map((element,index)=>
                        <div className=" bg-[#302E2E] w-full rounded-lg px-2 py-2 my-2">
                            <h1>{element.key}</h1>
                            {typeBudget == "รายระเอียดงบประมาณ" && <h1 className="text-green-500">+ {element.value.toFixed(2)} บาท</h1>}
                            {typeBudget == "รายระเอียดรายจ่าย" && <h1 className="text-red-500">- {element.value.toFixed(2)} บาท</h1>}
        
                        </div>
                    )}
                
                </div>
            </div>
        </div>
    );
}