import React, { useState } from "react";
import Heading from "../Heading/heading";
import products from '../ProductList/productList'
import Cards from "../../pages/Cards/cards";

const Product = () => {

    const categories  = ['All' , 'Fruits' , 'Vegetables' , 'Dairy' , 'SeaFood']
    const [activeTab , setActiveTab] = useState('All')

    const renderCards = products.map((product) =>(
     <div key={product.id}>
      <Cards img={product.image} title={product.name} rate={product.price}/> </div>
    ))
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        <div className="flex gap-3 justify-center mt-10">
            {categories.map((category) => (
                <button key={category} className={`px-5 py-2 text-lg rounded-lg cursor-pointer
                ${activeTab  === category ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}  
                onClick={()=> setActiveTab(category)}> 
                {category} 
                </button>
            ))}
        </div>

        <div className="grid grid-cols-4 gap-9 mt-20">
            {renderCards}
        </div>
      </div>
    </section>
  );
};
export default Product;
