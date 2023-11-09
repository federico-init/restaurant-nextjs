"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// mock data
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  // state for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((current) =>
          current === data.length - 1 ? 0 : current + 1
        ),
      4000
    );

    // cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-orange-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl md:text-6xl xl:text-7xl text-center uppercase p-4 md:p-10">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 ">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt="home slider"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
