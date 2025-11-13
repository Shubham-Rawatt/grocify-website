import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import costomer1 from "../../assets/images/customer1.jpg";
import costomer2 from "../../assets/images/customer2.jpg";
import costomer3 from "../../assets/images/customer3.jpg";
import costomer4 from "../../assets/images/customer4.jpg";
import costomer5 from "../../assets/images/customer5.jpg";
import { FaStar } from "react-icons/fa";

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "food blogger",
    rating: 3,
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, commodi.",
    image: costomer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "chef",
    rating: 3,
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, commodi.",
    image: costomer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "model",
    rating: 3,
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, commodi.",
    image: costomer3,
  },
  {
    id: 4,
    name: "Carlos Zahra",
    profession: "fitness coach",
    rating: 3,
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, commodi.",
    image: costomer4,
  },
  {
    id: 5,
    name: " ",
    profession: "nutritionist",
    rating: 3,
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, commodi.",
    image: costomer5,
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-[1400px] px-10 mx-auto py-20">
      <Heading highlight="Customers" heading="Saying" />

      <div className="py-5 flex justify-end gap-x-5">
        <button className=" custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center ">
          {" "}
          <IoIosArrowBack />{" "}
        </button>
        <button className=" custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center ">
          {" "}
          <IoIosArrowForward />{" "}
        </button>
      </div>

      <Swiper navigation={{nextEl: ".custom-next" , prevEl: ".costom-prev" }} loop={true} breakpoints={{640: {slidesPerView: 1, spaceBetween: 20}, 768: {slidesPerView: 2, spaceBetween: 20}, 1024: {slidesPerView: 3, spaceBetween: 20} }} modules={[Navigation]} className="mySwiper">
        {review.map((item) => (
          <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
            <div className="flex gap-5 items-center">
              <div className="w-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden"> 
                <img src={item.image} className="w-full h-full"/>
              </div>
                <div>
                  <h5 className="text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600 ">{item.profession}</p>
                  <span className="flex text-yellow-300 mt-3 text-xl gap-1">
                    {Array.from({lenght: item.rating} , (_, index) =>( < FaStar/> ) )}
                    </span>
                </div>
              {/* </div> */}
            </div>

            <div className="mt-10 min-h-[15vh]">
              <p className="text-zinc-600">
                {item.para}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
