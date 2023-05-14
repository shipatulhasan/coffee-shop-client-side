/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../Components/Shared/Banner";
import img from "../assets/images/bg-2.jpeg";
import { useLoaderData } from "react-router-dom";
import MenuSection from "../Components/HomePage/MenuSection";

const Menu = () => {
  const coffees = useLoaderData();
  return (
    <>
      <Banner title={"Menu"} img={img} />
      <div className="grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 mx-auto py-10 lg:py-20">
        {coffees.map((coffee) => (
          <MenuSection type={true} key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Menu;
