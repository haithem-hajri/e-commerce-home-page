import React from "react";
import Image from "next/image";
const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className= "md:w-[16.6666666667%] w-2/4   cursor-pointer hover:shadow-md p-2 rounded">
     
        <div className="relative w-full aspect-square ">
          <Image src={product?.image} layout="fill" alt="product" />
        </div>
        <div className="flex flex-col justify-start p-2 gap-2">
          <p className="truncate text-sm leading-3">{product?.title}</p>
          <p className="font-semibold text-[1rem] ">{product?.newPrice} TND</p>
          {product?.oldPrice && (
            <p className=" text-sm text-[#75757a] line-through leading-[0]">
              {product?.oldPrice} TND
            </p>
          )}
        </div>
     
    </div>
  );
};

export default ProductCard;
