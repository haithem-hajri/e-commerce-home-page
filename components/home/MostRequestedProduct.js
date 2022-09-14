import React from "react";
import ProductCard from "../cards/ProductCard";
import { RequestedProductData } from "../../data/mostRqtPrdctData";
const MostRequestedProduct = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded shadow ">
      <header className="px-[16px] py-3 w-full">
        <h2 className="text-[1.25rem] font-semibold">Les plus demandés</h2>
      </header>
      <section className="p-1">
        <div className="flex md:flex-row  items-center justify-start flex-wrap   ">
          {RequestedProductData?.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MostRequestedProduct;
//overflow-x-auto
