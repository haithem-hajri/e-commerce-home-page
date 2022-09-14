import React from "react";
import Hero from "./Hero";
import MostRequestedProduct from "./MostRequestedProduct";
import CatalogList from "./CatalogList";
import Offers from "./Offers";
import Advertising from "./Advertising";
import KitchenOffers from "./KitchenOffers";
const HomeComponents = () => {
  return (
    <div className="max-w-[1184px] w-full m-auto py-[16px] px-[8px] flex flex-col justify-center gap-3 ">
      <Hero />
      <CatalogList />
      <MostRequestedProduct /> 
      <Offers />
      <Advertising/>
      <KitchenOffers/> 
      <CatalogList />
    </div>
  );
};

export default HomeComponents; 
