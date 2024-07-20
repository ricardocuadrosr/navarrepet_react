import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Links from "./Links";

const Sidebard = ({ open, onClose }) => {
  return (
    <div>
      <div
        className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
          open ? "translate-x-0" : "-translate-x-96"
        }`}
      >
        {/* <div
        className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0}`}
      > */}
        {/* <span
            className="absolute top-4 right-4 block cursor-pointer xl:hidden"
            onClick={onClose}
        >
          <CloseIcon />
        </span> */}

        <div className="mx-[56px] mt-[50px] flex items-center">
          <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
            {/* Horizon <span className="font-medium">FREE</span> */}
            <img
              src="https://lh3.google.com/u/0/d/1FCPX6Q29HL6hmM09SyUC9tfVUJuSCNG0=w1920-h1032-iv1"
              alt=""
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        </div>
        <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
        {/* Nav item */}
        <ul className="mb-auto pt-1" style={{ listStyle: "none", padding: 0 }}>
          <Links />
        </ul>

        {/* Free Horizon Card */}
        <div className="flex justify-center">{/* <SidebarCard /> */}</div>
        {/* Nav item end */}
      </div>
    </div>
  );
};

export default Sidebard;
