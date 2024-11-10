import React from "react";
import Image from "next/image";
import deliveryImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";


const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src={deliveryImg} alt="delivery" />
        </div>
        {/* text content */}
        <div className="">
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl-text-[60px] uppercase font-bold leading-[3rem] md:leading-[4rem]">
            Your <span className="text-red-600">Favorite Burger</span> On the
            Way
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            At BurgerBite, we take pride in delivering your burgers fresh, hot,
            and right on time! Our dedicated delivery team ensures that every
            order is carefully packed to maintain the perfect temperature and
            quality of your meal. We use insulated packaging to keep the burgers
            juicy and the fries crispy, so you can enjoy the same delicious
            taste as if you were dining in. Whether you're ordering for a quick
            lunch or a late-night craving, we guarantee a smooth and speedy
            delivery experience, making sure your food arrives just the way you
            like it.
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery in 30 minutes
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Free Delivery on Orders Above $75
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery On Your Doorstep
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
