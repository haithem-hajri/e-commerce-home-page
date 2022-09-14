import React from "react";
import CatalogCard from "../cards/CatalogCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CatalogData } from "../../data/catalogData";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 8, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};
const CatalogList = () => {
  return (
    <div className="flex flex-col w-full bg-white py-[8px] px-[10px] rounded shadow ">
      <Carousel
        dotListClass="custom-dot-list-style"
        //  itemClass="carousel-item-padding-40-px"
        swipeable={true}
        draggable={true}
        responsive={responsive}
        // transitionDuration={9000}
      >
        {CatalogData.map((catalog) => (
          <CatalogCard key={catalog.title} item={catalog} />
        ))}
      </Carousel>
    </div>
  );
};

export default CatalogList;

