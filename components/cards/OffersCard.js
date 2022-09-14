import React from "react";
import Image from "next/image";
const OffersCard = (props) => {
  const { offer } = props;
  return (
   
      <div className="cursor-pointer relative w-1/4 md:w-[calc(16.66667%-8px)] h-[90px] md:h-[115px] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 ">
        <Image
          src={offer?.image}
          alt="offre"
          layout="fill"
        //  className="rounded-md"
        />
      </div>
   
  );
};

export default OffersCard; 
