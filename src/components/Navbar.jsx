/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState("");
  const [username, setUsername] = useState("STAY AWAKE ");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const cTime = date.toLocaleTimeString();
      setTime(cTime);
    }, 1000);
  }, [time]);

  return (
    <>
      <div>
        <nav className="flex justify-between p-7 shadow-slate-400 shadow-sm">
          <h1 className="flex gap-3 items-center text-xl md:text-3xl text-blue-100 font-bold  tracking-wider font-mono">
            ToDo IT{" "}
            <span>
              <img src="/nike.svg" alt="logo" className="w-8 invert" />
            </span>
          </h1>

          <h1 className="text-blue-100 font-mono text-2xl hidden md:block">
            {username} ◢◤
          </h1>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className=" text-slate-100 bg-green-700 p-2 rounded-md font-mono font-semibold text-sm hover:bg-green-500 hover:text-slate-950"
            >
              Login
            </a>

            <h3 className=" text-blue-100 font-mono text-xl ">{time}</h3>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
