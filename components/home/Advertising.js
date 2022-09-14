import React from "react";
import Image from "next/image";
const Advertising = () => {
  return (
    <div className="md:flex hidden items-center bg-white  p-[8px] rounded shadow">
      <div className=" h-[252px] relative   w-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200  ">
        <Image
          src={
            "https://tn.jumia.is/cms/0000_Refresh2022/Septembre/W37/UND/Makeup/TN_W37_beauty_SB.jpg"
          }
          alt="pub"
          layout="fill"
          className="rounded cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Advertising; 
