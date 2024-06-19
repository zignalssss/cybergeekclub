"use client";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loading from "./loading";
import { document_log_status } from "@prisma/client";

const Send_File = dynamic(() => import("@/components/pendingPage/sendFile/component"));
const ShowStatus = dynamic(() => import("@/components/pendingPage/status/component"));

type LIST = {
  id:string;
  account_id:string;
  document:string;
  status:document_log_status;
  notation:string;
  account_admin_id:string;         
  built:string;
};

interface Props {
  onClick: (right : boolean) => void;
}

const PendingPage: React.FC = () => {
  const [userrole,setuserrole] = useState<string>("")
  const [right, setRight] = useState<boolean>(false);
  const [documents_log, setDocuments_log] = useState<LIST[]>([]);
  const {data:session,status} = useSession();
  const router = useRouter();
  const controls: AnimationControls = useAnimation();
  const rolecheck = async() =>{
    try{
      if(session){
        const email = session.user?.email
        const role = await axios.post("/api/user/getrolebyemail",{email:email})
        const userrole = role.data.data.role;
        if(userrole === "CERTIFIED"){
          router.push("/");
        }
      }
    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    rolecheck();
    if (status === "unauthenticated") {
      router.push("/sign-in");
    }
  }, [status, router]);

  const get_user_document_log = async () => {
    try {
      const documents_log = await axios.get("/api/doc/getalldocs");
      setDocuments_log(documents_log.data.data);
    } catch (error: any) {
      console.error(error);
    }
  }

  const onClick = (right : boolean) => {
    setRight(right);
  }

  const handleButton1 = () => {
    setRight(false);
  };

  const handleButton2 = () => {
    setRight(true);
  };

  useEffect(() => {
    const updateAnimation = () => {
      const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;
      controls.start({ x: right ? (isMediumScreen ? 190 : 95) : 0 });
    };

    updateAnimation();
    window.addEventListener("resize", updateAnimation);

    get_user_document_log();

    return () => window.removeEventListener("resize", updateAnimation);
  }, [right, controls]);

  // If session status is loading or unauthenticated, show nothing or a loading indicator
  if (status === "loading" || status === "unauthenticated") {
    return <Loading/>;
  }

  // Render the main content only if the user is authenticated
  return (
    <div className="min-h-screen h-fit flex flex-col">
      <div className="p-10">
        <h1 className="text-center text-3xl font-kanit">กำลังดำเนินการ</h1>
      </div>
      <div className="flex justify-center">
        <div className="border border-white md:h-16 md:w-96 h-16 w-48 rounded-3xl grid grid-cols-2 transition-all duration-75 font-kanit">
          <motion.div
            className="absolute md:w-48 md:h-16 w-24 h-16 bg-green-500 rounded-3xl z-0"
            animate={controls}
          ></motion.div>
          <button id="btn1" className={`z-10 ${!right ? "text-black" : "text-white"}`} onClick={handleButton1}>
            ส่งใบสมัคร
          </button>
          <button id="btn2" className={`z-10 ${right ? "text-black" : "text-white"}`} onClick={handleButton2}>
            สถานะ
          </button>
        </div>
      </div>
      <div className={`${right ? "!hidden" : ""} flex justify-center`}>
        <Send_File onClick={onClick}/>
      </div>
      <div className={`${!right ? "!hidden" : ""} flex justify-center h-fit`}>
        <ShowStatus prop={documents_log} />
      </div>
    </div>
  );
};

export default PendingPage;
