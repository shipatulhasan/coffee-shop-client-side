/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MenuSection = ({ coffee }) => {
  const { id, image, name, price, description } = coffee;
  return (
    <div className="card  p-2 border-[1px] border-slate-300 bg-[#212121] flex flex-col md:flex-row gap-6 justify-between items-start text-start">
      <figure className="self-end md:self-start">
        <img src={image} alt="cup" className="contain w-30 h-40 " />
      </figure>
      <div className="card-body items-center space-y-3  ">
        <div>
          <h2 className=" text-xl font-bold text-white">
            Name: <span className="text-lg font-medium text-white">{name}</span>
          </h2>
          <h2 className=" text-lg text-[#C7A17A]">${price}</h2>
        </div>
        <p className="text-slate-300 text-sm">
          {description.length > 55
            ? description.slice(0, 52) + "..."
            : description}
        </p>
        <div className="card-actions">
          <button className="underline text-[#C7A17A]">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
