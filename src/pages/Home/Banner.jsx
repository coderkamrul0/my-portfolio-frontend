import React from "react";

const Banner = () => {
  return (
    <div className=" h-[70vh] md:h-[100vh] flex items-center">
      <div>
        <div className="flex">
          <div className="text-[#E2E8F0]">
            <p className="text-[#38BDF8] font-semibold">Hello! I am</p>
            <h1 className=" text-5xl md:text-8xl font-bold">Kamrul Hasan</h1>
            <h4 className=" text-2xl md:text-4xl py-4">Front-End Developer</h4>
            <div className="flex items-center gap-3">
              <button className="bg-[#0284C7] border-2 border-transparent py-2 px-3 font-semibold rounded-md hover:bg-transparent hover:border-2 border-[#0284C7]">
                Get Resume
              </button>
              <button className="py-2 px-3 border-2 border-[#0284C7] hover:bg-[#0284C7] rounded-md">
                About Me
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
