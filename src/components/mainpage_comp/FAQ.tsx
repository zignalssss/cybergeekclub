import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const contacus = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-black pb-12 pt-20  lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block font-semibold text-xl">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-dark sm:text-[40px]/[48px] font-kanit">
                                มีคำถามใด ๆ หรือไม่?
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                           header="จะสมัครเข้าร่วมชมรมทำได้อย่างไร?"
                           text="สามารถกดปุ่ม สมัครเข้าชมรม ใน Website ของเราจากนั้น กรอกแบบฟอร์มสำหรับสมัครสมาชิกเพื่อสร้างโปรไฟล์ใน Website จากนั้นเมื่อกรอกข้อมูลเสร็จระบบจะให้ทำการอัพโหลดใบสมัครในเว็บของเราโดยเเนบมาเป็น pdf เป็นอันเสร็จเรียบร้อย { ปล.โปรดอัพโหลดใบสมัครภายใน 7 วัน ไม่เช่นนั้นข้อมูลการสมัครของท่านจะโดนลบ }"
                        />
                        <AccordionItem
                            header="ผู้สมัครจำเป็นต้องเคยเขียนโค้ดหรือไม่?"
                            text="ผู้สมัครไม่จำเป็นต้องเขียนโค้ดเป็น ขอเเค่คุณเป็นคนที่มีความสนใจใน Technology ต่างๆชมรมCyberGeekClub ก็ตอบโจทย์คุณนั่นเอง!"
                        />
                        <AccordionItem
                            header="ติดต่อเราได้ที่ไหน?"
                            text="สามารถติดต่อเราได้ที่ IG : cybergeekclub.src หรือ FB:CyberGeekClub"   
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="เเต้ม GeekPoint คืออะไร?"
                            text="GeekPoint คือเเต้มที่จะใช้เข้าร่วมกิจกรรมต่างของ CyberGeekClub โดยเเต้ม GeekPoint จะถูกหักก็ต่อเมื่อ มีการลงทะเบียนเข้าร่วมกิจกรรมเเล้วเเต่ไม่เข้ากิจกรรม เท่านั้น โดยถ้าเเต้มGeekPoint ไม่พอก็จะไม่สามารถเข้าร่วมกิจกรรมที่เราจัด โดยในกรณีนี้จะต้องติดต่อเจ้าหน้าที่เท่านั้น"
                        />
                        <AccordionItem
                            header="การเเข่งขัน CTF Capture The Flag คืออะไร?"
                            text="การแข่งขัน Capture The Flag (CTF) เป็นกิจกรรมที่ให้ผู้เข้าร่วมพยายามเรียกข้อมูลหรือซ่อนไปจาก ธง(flag) ซึ่งเป็นรหัสหรือข้อมูลที่ถูกตั้งไว้ลึกลับภายในระบบหรือเซิร์ฟเวอร์ขององค์กรหรือโครงการใดๆ ผู้เข้าแข่งขันจะต้องใช้ทักษะในการเข้าถึงระบบ (เช่น hacking, programming, cryptography, reverse engineering) เพื่อให้สามารถหาธงและส่งมอบให้กับผู้จัดแข่งขันเป็นการสะสมคะแนน"
                        />
                        <AccordionItem
                            header="เข้าร่วมกิจกรรมกับเราจะได้อะไรบ้าง?"
                            text="ได้รับชั่วโมงกิจกรรม เเละ ได้ความรู้ที่เกี่ยวกับ Technology ต่างๆเเละทักษะการเขียนโปรเเกรม"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default contacus

const AccordionItem = ({ header, text }: {header:string ,text:string}) => {
    const [active, setActive] = useState(false);

    const handleToggle = (e: any) => {
        e.preventDefault();
        setActive(!active);
    };
    return (
        <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)]  sm:p-8 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={(e) => handleToggle(e)}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary ">
                    <svg
                        className={`fill-green-700 stroke-green-500 duration-200 ease-in-out ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-black">
                        {header}
                    </h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
                    }`}
            >
                <p className="py-3 text-base leading-relaxed text-black">
                    {text}
                </p>
            </div>
        </div>
    );
};