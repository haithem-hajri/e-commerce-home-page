import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#fe9900] px-[8px] hidden md:flex ">
      <div className="w-full max-h-[80px] relative h-[60px] max-w-[950px] m-auto ">
        <Image
          src={
            "https://tn.jumia.is/cms/0000_Refresh2022/Septembre/W37/GEN/TN_W37_Beauty_Topstrip.gif"
          }
          alt="banner"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Banner;
