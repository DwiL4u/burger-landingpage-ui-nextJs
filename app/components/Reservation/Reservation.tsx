import React from "react";
import { BiPhone } from "react-icons/bi";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <div className="pt-[5rem] bg-center bg-cover relative mt-[2rem] pb-[5rem] mb-[3rem] bg-bg-black">
      {/* overlay */}
      <div className="absolute w-full h-full bg-[#000000a6] top-0 right-0 left-0 bottom-0"></div>
      <div className="w-[80%] relative grid grid-cols-1 lg:grid-cols-2 z-[20] mx-auto items-center gap-[3rem]">
        {/* text content */}
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem]">
            DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
          </h1>
          <p className="text-[17px] mt-[1rem] text-white text-opacity-50">
            To ensure a seamless dining experience, we recommend making a
            reservation in advance. You can easily book your table by filling
            out our online reservation form, and we will have everything ready
            to provide you with an unforgettable meal
          </p>
          <div className="flex mt-[2rem] items-center space-x-4">
            <div className="w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center justify-center flex-col">
              <BiPhone className="w-[1.7rem] h-[1.7rem] text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-white text-[25px]">
                Quick Order 24/7
              </h1>
              <h1 className="font-bold text-yellow-300 text-[30px]">
                +053 123 546
              </h1>
            </div>
          </div>
        </div>
        {/* reservation form */}
      <ReservationForm/>
      </div>
    </div>
  );
};

export default Reservation;
