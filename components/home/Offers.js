import React from "react";
import Image from "next/image";
import OffersCard from "../cards/OffersCard";
import { OffersData } from "../../data/offersData";
const Offers = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-white rounded shadow ">
        <div className="w-full min-h-[48px] flex justify-center items-center">
          <h1 className="font-semibold text-[1.25rem] text-center ">
            Découvrir nos offres et services
          </h1>
        </div>

        <div className="flex  items-center  gap-[9px] md:w-full    py-[4px] flex-wrap justify-center 	">
          {OffersData?.map((offer) => (
            <OffersCard key={offer.image} offer={offer} />
          ))}
        </div>
      </div>

      <div className="flex md:flex-row flex-col  items-center w-full bg-white rounded shadow p-[8px] gap-2 	">
        <div className="relative h-[252px] w-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
          <Image
            src="https://tn.jumia.is/cms/000_Festival22/00_Brands_days/Loreal_Maybelline/Loreal_TB2.jpg"
            alt="offer"
            layout="fill"
            className="rounded-md cursor-pointer "
          />
        </div>
        <div className="relative h-[252px] w-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
          <Image
            src="https://tn.jumia.is/cms/000_Festival22/ACD/bRAZILIANgLOW_TB.jpg"
            alt="offer"
            layout="fill"
            className="rounded-md cursor-pointer "
          />
        </div>
        <div className="relative h-[252px] w-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
          <Image
            src="https://tn.jumia.is/cms/0000_Refresh2022/Septembre/W37/ADS/iqos_TB.jpg"
            alt="offer"
            layout="fill"
            className="rounded-md cursor-pointer "
          />
        </div>
      </div>
    </>
  );
};

export default Offers;
