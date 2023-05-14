/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../assets/images/hero-img-3-1.jpeg";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative min-h-[400px]  flex items-center justify-start bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-full absolute top-0 bg-gradient-to-r from-black to-transparent opacity-60" />
        <div className="lg:w-[1240px] lg:mx-auto z-10">
          <div className="px-6  lg:px-0 w-full max-w-xl  ">
            <h2
              className=" mb-4 md:mb-6 text-5xl  tracking-normal text-white md:text-7xl lg:text-8xl line-height-md  capitalize "
              style={{ fontFamily: "Bebas Neue" }}
            >
              roasted coffee for you
            </h2>
            <p className="text-white text-sm md:text-lg mb-6 ">
              The coffee is brewed by first roasting the green coffee beans over
              hot coals in a brazier. given an opportunity to sample.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
