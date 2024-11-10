import React from "react";
import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      {/* heading */}
      <h1 className="heading">
        Burgers made with <br />
        love and
        <span className="text-red-600"> Care</span>
      </h1>
      {/* cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* first card */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white rounded-md transition-all duration-200">
            <Image src={Img1} alt="burger" className="rounded-3xl" />
            <h1 className="text-[24px] font-semibold mt-[1.5rem] text-black text-center">
              Combo Burger
            </h1>
            <p className="text-opacity-60 mt-[0.2rem] text-black text-center">
              Our combo meals are a crowd favorite, and with our speedy
              drive-thru, you will be in and out before you know it. Great
              burgers, fast service.
            </p>
          </div>
        </div>
        {/* second card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-md transition-all duration-200">
            <Image src={Img3} alt="burger" className="rounded-3xl" />
            <h1 className="text-[24px] font-semibold mt-[1.5rem] text-black text-center">
              Classic Burger
            </h1>
            <p className="text-opacity-60 mt-[0.2rem] text-black text-center">
              Black-charcoal buns to avocado-lime aioli, crafted with todays
              foodies in mind.Toppings caramelized onions, sun-dried tomatoes,
              and arugula.
            </p>
          </div>
        </div>
        {/* third card */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white rounded-md transition-all duration-200">
            <Image src={Img2} alt="burger" className="rounded-3xl" />
            <h1 className="text-[24px] font-semibold mt-[1.5rem] text-black text-center">
              Chicken Burger
            </h1>
            <p className="text-opacity-60 mt-[0.2rem] text-black text-center">
              Our classic burger is made with freshly grilled patties, crisp
              cooked to perfection for that juicy, mouth-watering bite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
