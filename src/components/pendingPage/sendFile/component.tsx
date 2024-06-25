import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import axios from 'axios'
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { FaFileUpload } from "react-icons/fa";

interface prop {
  onClick: (right : boolean) => void;
}

const Send_File = ({ onClick } : prop) => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
  });
  

  const handleSubmit = async(event: FormEvent) => {
    event.preventDefault();
    setIsSending(true);
    try {
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);
    
      await axios.post('/api/user/uploaddocs', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        Toast.fire({
          icon: "success",
          title: "ส่งเอกสารสำเร็จ!!"
        })
      })
    } catch ( error: any) {
      console.error(error);
      Toast.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาดในการส่งเอกสาร"
      })
    }
    setIsSending(false);
    onClick(true);
  };
  return (
    <div className="border border-white w-11/12 h-fit rounded-3xl my-10">
      <div className="text-center text-3xl my-10">ส่งใบสมัคร</div>
      <h1 className="text-center font-kanit">ดาวน์โหลดไฟล์เอกสาร<span className="font-semibold text-green-500">&nbsp;(คลิกเพื่อตรวจสอบ)</span></h1>
      <div className="flex justify-center mt-5">
        <label
          htmlFor="my_modal_6"
          className="text-3xl hover:cursor-pointer"
          onClick={() => {
            const modalElement = document.getElementById("my_modal_2") as HTMLDialogElement;
            modalElement.showModal();
          }}
        >
          <FaFilePdf className="hover:text-green-500 hover:scale-110 animate-bounce transition-all duration-150" />
        </label>
      </div>
      <dialog id="my_modal_2" className="modal h-full w-screen">
        <div className="modal-box h-[700px] w-full">
          <iframe
            className="w-full h-full"
            src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/%E0%B9%83%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%2F%E0%B9%83%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%8A%E0%B8%A1%E0%B8%A3%E0%B8%A1%20CyberGeekClub.pdf?alt=media&token=abbbd368-3ca2-4f59-8930-1bff7cc08768"
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="flex flex-col w-full h-fit mb-10">
        <div className="flex justify-center w-full h-fit my-10 ">
          <button className="group w-32 h-10 border border-white hover:border-green-500 rounded-3xl">
            <Link
              target="_blank"
              className="font-kanit group-hover:text-green-500 "
              href={
                "https://drive.usercontent.google.com/u/0/uc?id=1_r2S9XxdEhViHwX9IMk2M0OZC14JZoLb&export=download"
              }
              
            >
              ดาวน์โหลด 
            </Link>
          </button>
        </div>
      </div>
      <h1 className="text-center font-kanit">ส่งไฟล์เอกสาร</h1>
      <div className="flex flex-col w-full h-fit my-10">
        <div className="flex justify-center w-full h-fit">
          <form onSubmit={handleSubmit}>
            <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                required
              />
            <label className="form-control w-full h-fit text-white bg-gradient-to-r  from-green-900 to-green-700 hover:scale-105 transition-all duration-200   rounded-lg font-kanit " htmlFor="fileInput">
              <div className="flex justify-center items-center m-2">
                <FaFileUpload className="text-xl mr-2"/>
                <div className="mr-2">เลือกไฟล์</div>
                {file && <p title={file.name} className="truncate max-w-40">{"-> "+file.name}</p>}
              </div>
              {/* <div className="flex justify-center mt-5 animate-pulse">
                <span className="label-text text-green-500">
                  {file && <p>Selected file: {file.name}</p>}
                </span>
              </div> */}
            </label>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSending}
                className={`w-32 h-10 border border-white hover:border-green-500 hover:text-green-500 rounded-3xl m-5 font-kanit disabled:border-white/20 disabled:text-white/20 ${isSending ? 'cursor-not-allowed !w-36' : 'hover:cursor-pointer'}`}
              >
                {isSending ? <div className="flex justify-center"><p>กำลังส่งใบสมัคร</p><span className="loading loading-spinner loading-xs"></span></div> : <p>ส่งใบสมัคร</p>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Send_File;
