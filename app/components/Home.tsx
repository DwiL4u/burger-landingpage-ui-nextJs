"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Feature from "./Features/Feature";
import PopularBurger from "./PopularBurger/PopularBurger";
import Delivery from "./Delivery/Delivery";
import Team from "./Team/Team";
import Reservation from "./Reservation/Reservation";
import Newsletter from "./Newsletter/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease",
        anchorPlacement: "top-center",
      });
    };
    initAos();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
      <Newsletter />
    </div>
  );
};

export default Home;
