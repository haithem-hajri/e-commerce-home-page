import React from "react";
import Image from "next/image";
const CatalogCard = (props) => {
  const { item } = props;
  return (
    <div
      className="w-[133px] px-[4px] py-[8px] flex flex-col justify-center
     cursor-pointer hover:shadow-xl   rounded"
    >
      <div className="relative w-full aspect-square ">
        <Image src={item?.image} layout="fill" alt="catalog" />
      </div>
      <p className="text-sm text-center">{item?.title}</p>
    </div>
  );
};

export default CatalogCard;
