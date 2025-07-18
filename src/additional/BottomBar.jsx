import React from 'react';

function BottomBar() {
  return (
    <div className="w-full bg-[#000000C4] px-4 md:px-12 py-8">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-20 flex-wrap">
   
        <h1 className="font-semibold text-[24px] md:text-[36px] text-[#FFFFFF] text-center md:text-left">
          Genius Labs Digital School
        </h1>

        
        <div className="text-[#FFFFFF] space-y-2 text-center md:text-left">
          {[
            "Terms & Conditions",
            "Privacy Policy",
            "Refund Policy",
            "Pricing-Policy",
            "Contact US",
          ].map((item, index) => (
            <p
              key={index}
              className="hover:underline underline-offset-4 decoration-white transition duration-300 cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
