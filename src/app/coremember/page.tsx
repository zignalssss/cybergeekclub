import React from 'react'
import Image from 'next/image'

const Page = () => {
    return (
        <section className="bg-black ">
            <title>Core Member | CyberGeek</title>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 font-kanit">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 font-kanit text-4xl tracking-tight font-extrabold text-white ">อาจารย์ที่ปรึกษา</h2>
                </div>
                <div className="text-center text-gray-300 mb-14">
                    <Image width={1000} height={1000} draggable="false"  className="mx-auto mb-4 w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2FAJN.jpg?alt=media&token=341fad85-fbd8-4b55-9506-c34327605347" alt="avatar img"/>
                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-white ">
                        <a href="#">ผศ.ดร.นันทา จันทร์พิทักษ์</a>
                    </h3>
                    <p>อาจารย์ที่ปรึกษาชมรม</p>
                    <p>ภาควิชาวิศวกรรมคอมพิวเตอร์</p>
                </div>
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 ">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">ฝ่ายบริหารชมรม</h2>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4 w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2Fbell.jpg?alt=media&token=eb17ef1d-7382-4a12-8544-cf1e3e5aeab0" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">บุญญฤทธิ์ เจิดรุจิกุล</a>
                        </h3>
                        <p>ประธาน</p>
                    </div>
                    <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false"  className="mx-auto mb-4 w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2F81100736.png?alt=media&token=eb82ac10-e348-4a75-8612-e457307165ac" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">วิริทธิ์พล ทับขัน</a>
                        </h3>
                        <p>รองประธาน</p>
                    </div>
                    {/* <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2F%E0%B8%93%E0%B8%B1%E0%B8%8F%E0%B8%90%E0%B8%9E%E0%B8%A5.jpg?alt=media&token=3b27ccb0-6685-48c0-b9a9-f372b5ba922a" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">ณัฐพล พิลาไชย</a>
                        </h3>
                        <p>เลขานุการ</p>
                    </div> */}
                    <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2FSunny.PNG?alt=media&token=62819d27-7269-4daf-a211-59c652b009fe" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">วิชญาพร ปุณโณฑก</a>
                        </h3>
                        <p>เหรัญญิก</p>
                    </div>
                    <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2F%E0%B8%9E%E0%B8%B5%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C.jpg?alt=media&token=5d7ab0bc-eae1-42ca-9799-fd23d09a0aa9" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">พีรพัฒน์ แสงเพิ่ม</a>
                        </h3>
                        <p>ฝ่ายประชาสัมพันธ์</p>
                    </div>
                    <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2F4045811111.jpg?alt=media&token=bb411db7-de00-4868-8033-a1c599a660ce" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">สิปปกร กันหาฤกษ์ </a>
                        </h3>
                        <p>ฝ่ายประชาสัมพันธ์</p>
                    </div>
                    {/* <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2F%E0%B8%93%E0%B8%B1%E0%B8%90%E0%B8%99%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B9%8C.jpg?alt=media&token=2aeddd74-8131-4f5d-9c89-95fd308e4c33" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">ณัฐนันท์ ปุณโณทก</a>
                        </h3>
                        <p>ฝ่ายประชาสัมพันธ์</p>
                    </div> */}

                    <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2F450660885_503771315435875_7523920898381233520_n.jpg?alt=media&token=05ac2cca-dd2a-4100-8f1d-fe234ad0ff3e" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">ภาวิต ทองคำ</a>
                        </h3>
                        <p> ฝ่ายงานด้านเทคนิค</p>
                    </div>
                    <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2FS__6561819.jpg?alt=media&token=b66160fa-4942-4a81-9ce1-f37a86249569" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">วรพรต สีสด</a>
                        </h3>
                        <p> ฝ่ายงานด้านเทคนิค</p>
                    </div>
                    {/* <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2Fflame.jpg?alt=media&token=8f898f54-5d14-4ca2-8281-f54dcad24135" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">พิสิฐพงศ์ จันทร์สุขศรี</a>
                        </h3>
                        <p>ฝ่ายชั่วโมงกิจกรรม</p>
                    </div> */}
                    {/* <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2Fcartoon.jpg?alt=media&token=321d511f-ed16-4c06-b56e-e636ca278bf0" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">ชัชนันทร์ กะการดี</a>
                        </h3>
                        <p>ฝ่ายพัสดุ</p>
                    </div> */}
                    <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2FS__6561836.jpg?alt=media&token=b3f0fda3-61ce-4ec2-8a94-f527c341d9fe" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">ปณิตา เอี่ยมสำอางค์</a>
                        </h3>
                        <p>ฝ่ายกิจกรรม</p>
                    </div>
                    {/* <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2Fking.png?alt=media&token=ddb920f8-ace5-45a6-a72a-ede458e45d7e" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">เกรียงเดช เปี่ยมแจง</a>
                        </h3>
                        <p> ฝ่ายกิจกรรม</p>
                    </div> */}
                    <div className="text-center text-gray-300 ">
                        <Image width={1000} height={1000} draggable="false" className="mx-auto mb-4  w-28 object-cover border-2 border-green-500 drop-shadow-[0_0_4px_rgba(22,101,52)] h-28 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/memberprofile%2FO.jpg?alt=media&token=b3c2260d-194b-45df-984e-94708c0e7593" alt="avatar img" />
                        <h3 className="mb-1  text-xl font-bold tracking-tight text-white ">
                            <a href="#">นิสสรณ์ โกระวิโยธิน</a>
                        </h3>
                        <p>ฝ่ายวิเคราะห์ข้อมูล</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page