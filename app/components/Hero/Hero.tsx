"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerImg1 from "@/public/images/b1.png";
import BurgerImg2 from "@/public/images/b2.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      {/* first hero slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] m-auto">
          {/* images */}
          <Image src={BurgerImg1} alt="burger" className="hidden md:block"/>
          {/* information */}
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
              Fast Food Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Best <br />
              Burgers
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
              Craving a juicy, mouth-watering burger? You have come to the right
              place! At Grill & Thrill, we are all about crafting the perfect
              burger with freshly grilled patties, crisp veggies, and
              melt-in-your-mouth cheese. Our secret? It is all about the passion
              we put into every bite!
            </p>
            <button className="px-8 mt-[2rem] py-3  text-[16px] bg-green-600 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>
      {/* second hero slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] m-auto">
          {/* images */}
          <Image src={BurgerImg2} alt="burger" className="hidden md:block"/>
          {/* information */}
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
             Tasty Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Most <br />
              Delicious
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                Hungry but short on time? At Speedy Buns, we know life moves
                fast—that is why we serve up fresh, hot burgers in record time!
                Our quick, no-fuss service means you will be enjoying a juicy
                burger in just minutes.
            </p>
            <button className="px-8 mt-[2rem] py-3  text-[16px] bg-yellow-600 transition-all duration-200 hover:bg-green-600 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
