/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const Banner = ({ img, title }) => {
  return (
    <>
      <section
        className="relative min-h-[300px] pt-10 lg:py-32  flex items-center justify-start bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-full h-full top-0 absolute bg-gradient-to-r from-black to-transparent opacity-80" />
        <div className="px-6 md:px-16 lg:px-0 w-full max-w-2xl xl:pl-16 xl:mb-0 xl:w-3/4 z-10">
          <h2
            className="max-w-2xl mb-4 md:mb-6 text-5xl font-normal tracking-wide text-white md:text-6xl capitalize"
            style={{ fontFamily: "Bebas Neue" }}
          >
            {title}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Banner;
