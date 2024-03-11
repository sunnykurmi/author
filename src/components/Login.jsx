import React from "react";
import 'remixicon/fonts/remixicon.css'

const Login = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] bg-green-400"></div>
      <div className="w-[60%]  grid items-center">
        <div className="flex flex-col items-center justify-center gap-5 loginCard w-3/5 h-3/4 shadow-xl ml-10 rounded-lg ">
          <h1 className="text-2xl font-semibold">LOG IN</h1>
          <form className="flex gap-2 flex-col">
            <input type="email" placeholder="E-mail" className=" outline-none p-3 border-rose-600 border-2 rounded-md" />
            <div className="flex justify-between items-center gap-10 p-2 border-rose-600 border-2 rounded-md">
              <input type="password" placeholder="Password" className=" p-1 outline-none" />
              <i class="ri-eye-fill"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
