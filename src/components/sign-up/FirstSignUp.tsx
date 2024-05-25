const FirstSignUp = () => {
  return (
    <div className="flex flex-col w-80 h-full md:w-[700px] md:h-4/5 bg-[#181818] rounded-3xl">
      <div className="flex justify-center my-10">
        <h1 className="font-kanit text-3xl">สมัครสมาชิก</h1>
      </div>
      <form>
        <div className="md:flex justify-center grid w-full gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">อีเมล</span>
            </div>
            <input
              type="email"
              placeholder="example@ku.th"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 "
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white font-kanit">รหัสผ่าน</span>
            </div>
            <input
              type="email"
              placeholder="example@#!@#123"
              className="input input-bordered w-full max-w-xs text-white font-kanit focus:ring-2 focus:ring-green-500 invalid:ring-2 invalid:ring-red-500 "
              required
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default FirstSignUp;
