import React from "react";
import ProductCard from "../cards/ProductCard";
import { KitchenOffersData } from "../../data/kitchenOffersData";
const KitchenOffers = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded shadow ">
      <header className="px-2 flex justify-between items-center min-h-[50px] py-3 w-full bg-[#fec107]">
        <h2 className="text-[1.25rem] font-semibold">
          Cuisine & Électroménager{" "}
          <span className="font-thin"> | Jusqu à -60%</span>
        </h2>
        <p className="text-[1rem] font-medium cursor-pointer">Voir plus </p>
      </header>
      <section className="p-1">
        <div className="flex items-center justify-start md:flex-row flex-wrap  ">
          {KitchenOffersData?.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default KitchenOffers;
