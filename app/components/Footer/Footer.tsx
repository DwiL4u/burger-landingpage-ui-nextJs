import React from "react";
import { FaBurger } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.5rem] items-start">
        {/* first part */}
        <div>
          {/* logo */}
          <div className="flex items-center space-x-2 text-white">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold">
              BurgerBite
            </h1>
          </div>
          <p className="text-white text-opacity-60 mt-[0.4rem]">
            Enjoy the best burgers in town—order online for pickup or delivery.
          </p>
          <p className="mt-[1rem] text-white">support@burgerbite.com</p>
          <p className="text-red-400 text-[20px] font-bold">(053) 123 456</p>
        </div>
        {/* second part */}
        <div>
          <h1 className="text-white text-[23px] font-semibold mb-[2rem]">
            Products
          </h1>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Chicken Burger
          </p>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Beef Burger
          </p>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Chrispy Burger
          </p>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Cheese Burger
          </p>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Spicy Burger
          </p>
        </div>
        {/* third part */}
        <div>
          <h1 className="text-white text-[23px] font-semibold mb-[2rem]">
            Quick Links
          </h1>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Home
          </p>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            About
          </p>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Menu
          </p>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Products
          </p>
          <p className="text-white opacity-60 mt-[0.7rem] hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Newsletter
          </p>
        </div>
        {/* fourth part */}
        <div className="text-white">
          <h1 className="text-[23px] font-semibold mb-[2rem] uppercase tracking-wide">
            Opening Hours
          </h1>
          <div className="space-y-2">
            <div className="flex items-center text-[20px]">
              <FiClock className="mr-2 text-yellow-300 w-[1.2rem] h-[1.1rem]" />
              <p>
                Monday - Friday:{" "}
                <span className="text-yellow-300">07:00am - 11:00pm</span>
              </p>
            </div>
            <div className="flex items-center text-[20px]">
              <FiClock className="mr-2 text-yellow-300 w-[1.2rem] h-[1.1rem]" />
              <p>
                Saturday - Sunday:{" "}
                <span className="text-yellow-300">06:00am - 12:00pm</span>
              </p>
            </div>
            {/* social icons */}
            <div className="mt-[2rem] items-center flex space-x-6">
              <FaFacebook className="w-[1.2rem] h-[1.2rem] text-blue-500" />
              <FaXTwitter className="w-[1.2rem] h-[1.2rem] text-white" />
              <FaInstagram className="w-[1.2rem] h-[1.2rem] text-red-500" />
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="text-white text-center mt-[2rem] opacity-50">
        <p>&copy; 2024 BurgerBite. All rights reserved.</p>
        <p>
          Designed by <span className="text-yellow-300">DwiL</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
