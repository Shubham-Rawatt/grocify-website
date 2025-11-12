import React from "react";
import Button from "../Button/button";
import backgroundImg from '../../assets/images/fresh-Fruits.png'

const Discount = () => {
  return (
    <section className="bg-zinc-100 bg-right bg-contain bg-no-repeat" style={{backgroundImage:`url(${backgroundImg})`}}>
      <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10">
        <span className="md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">20%</span>

        <div className="max-w-[700px]">
            <h3 className="md:text-7xl text-4xl font-bold text-zinc-800">First order discount</h3>
            <p className="text-zinc-600 my-6">Enjoy an exclusive first order discount on our grocery website shop fresh essentials and save bigon your first purchase fast delivery and quality guaranteed</p>
        
            <Button title="Get a Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
