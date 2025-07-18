
import React from 'react';

function NavBar() {
  return (
    <>

      <div className="w-full bg-white py-6 px-4 flex justify-between items-center max-w-[1440px] mx-auto">
        <h1 className="text-[32px] md:text-[48px] font-inter font-semibold text-black">
          Genius Lab
        </h1>
        <div className="flex gap-4">
          <button className="w-[100px] md:w-[135px] h-[40px] md:h-[48px] border border-black rounded-full hover:scale-105 transition">
            Sign Up
          </button>
          <button className="w-[100px] md:w-[135px] h-[40px] md:h-[48px] bg-[#0C2FAC] text-white border-[1.5px] rounded-full hover:scale-105 transition">
            Login
          </button>
        </div>
      </div>

      
      <div className="w-full bg-[#0069FF38] py-2">
        <div className="flex justify-around max-w-[1440px] mx-auto text-sm md:text-base">
          <button className="text-[#000000C4] hover:scale-110 transition">Home</button>
          <button className="text-[#000000C4] hover:scale-110 transition">Our Curriculum</button>
          <button className="text-[#000000C4] hover:scale-110 transition">Book a Free Demo</button>
          <button className="text-[#000000C4] hover:scale-110 transition">Our Team</button>
        </div>
      </div>

     
      <div className="w-full bg-[#F0DDFF] py-4 px-4">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 md:gap-0">
          <p className="text-[18px] md:text-[24px] font-inter font-semibold text-[#000000C4]">
            New Introducing
          </p>
          <p className="text-[28px] md:text-[40px] text-[#15609E] font-inter font-bold">
            TESTWALE.AI
          </p>
          <p className="text-[14px] md:text-[16px] text-[#000000C4] font-inter font-semibold max-w-md">
            A Custom Test Generator and Doubt solving AI with Other Great Features
          </p>
          <button className="w-[130px] md:w-[155px] h-[44px] md:h-[52px] bg-[#001E32] text-white text-[16px] md:text-[20px] font-inter font-semibold rounded-full hover:scale-105 transition">
            Check Out
          </button>
        </div>
      </div>

    </>
  );
}

export default NavBar;
