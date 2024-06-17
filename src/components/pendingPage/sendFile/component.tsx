import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import axios from 'axios'
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const Send_File = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
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
        router.push('/')
      })
    } catch ( error: any) {
      console.error(error);
    }
  };
  return (
    <div className="border border-white w-11/12 h-fit rounded-3xl my-10">
      <div className="text-center text-3xl my-10">ส่งใบสมัคร</div>
      <h1 className="text-center font-kanit">ดาวน์โหลดไฟล์เอกสาร</h1>
      <div className="flex justify-center mt-5">
        <label
          htmlFor="my_modal_6"
          className="text-3xl hover:cursor-pointer"
          onClick={() => {
            const modalElement = document.getElementById("my_modal_2") as HTMLDialogElement;
            modalElement.showModal();
          }}
        >
          <FaFilePdf />
        </label>
      </div>
      <dialog id="my_modal_2" className="modal h-full w-screen">
        <div className="modal-box h-[700px] w-full">
          <iframe
            className="w-full h-full"
            src="https://drive.google.com/file/d/1xUulRx52tBVKoI3AubH0F65FnlVfO28w/preview"
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
              className="font-kanit group-hover:text-green-500 "
              href={
                "https://drive.usercontent.google.com/u/0/uc?id=1xUulRx52tBVKoI3AubH0F65FnlVfO28w&export=download"
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
            <label className="form-control w-full h-fit">
              <input
                id="fileInput"
                type="file"
                className="file-input file-input-bordered file-input-sm file-input-success w-full max-w-xs "
                onChange={handleFileChange}
                required
              />
              <div className="flex justify-center mt-5 animate-pulse">
                <span className="label-text text-green-500">
                  {file && <p>Selected file: {file.name}</p>}
                </span>
              </div>
            </label>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-32 h-10 border border-white hover:border-green-500 hover:text-green-500 rounded-3xl m-5 font-kanit"
              >
                ส่งใบสมัคร
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Send_File;
