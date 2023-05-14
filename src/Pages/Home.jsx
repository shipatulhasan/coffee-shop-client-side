/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import banner from "../assets/images/hero-img-3-1.jpeg";
import HeroSection from "../Components/HomePage/HeroSection";
import MenuSection from "../Components/HomePage/MenuSection";
import { Link } from "react-router-dom";

const Home = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("https://coffee-shop-server-chi.vercel.app/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data.slice(0, 3)));
  }, []);
  return (
    <section className="container mx-auto">
      <HeroSection />{" "}
      <div className="mx-auto px-3 py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {coffees.map((coffee) => (
            <MenuSection key={coffee.id} coffee={coffee} />
          ))}
        </div>
        <div className="text-center pt-10">
          <Link
            to="/menu"
            className="border border-slate-300 px-8 py-2 text-white tracking-widest uppercase text-xs bg-slate-100 bg-opacity-20 hover:bg-[#C7A17A] "
          >
            see more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
