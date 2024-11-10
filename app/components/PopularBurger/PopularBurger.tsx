"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 754, min: 0 },
    items: 1,
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-600">Burgers</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <BurgerCard
            title="Beefy Bite"
            image="/images/b1.png"
            reviews="6"
            price="10.88$"
          />
          <BurgerCard
            title="Double Cheese Burger"
            image="/images/b2.png"
            reviews="6"
            price="10.20$"
          />
          <BurgerCard
            title="Chicken Burger"
            image="/images/b3.png"
            reviews="6"
            price="9.65$"
          />
          <BurgerCard
            title="Spicy Burger"
            image="/images/b4.png"
            reviews="6"
            price="11.30$"
          />
          <BurgerCard
            title="Surf & Turf Burger"
            image="/images/b5.png"
            reviews="6"
            price="90.25$"
          />
          <BurgerCard
            title="Veggie Burger"
            image="/images/b6.png"
            reviews="6"
            price="12.95$"
          />
          <BurgerCard
            title="Smoky Burger"
            image="/images/b7.png"
            reviews="6"
            price="10.88$"
          />
          <BurgerCard
            title="Angus Burger"
            image="/images/b8.png"
            reviews="6"
            price="10.88$"
          />
          <BurgerCard
            title="Combo Burger"
            image="/images/b9.png"
            reviews="6"
            price="10.88$"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
