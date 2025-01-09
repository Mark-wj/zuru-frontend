"use client";
import { Carousel } from "flowbite-react";
import CardComponent from "./Card";

const CarouselComponent = () => {
    return (
<div className="h-96 sm:h-[30rem] xl:h-[35rem] 2xl:h-[40rem]">
  <Carousel indicators={true} slide={true}>
    {/* Slide 1 */}
    <div className="relative group h-full w-full">
      <img
        src="https://tinyurl.com/59m3pjb8"
        alt="Beaches"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-xl font-bold">Welcome to the Beach</p>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="relative group h-full w-full">
      <img
        src="https://tinyurl.com/bdf96jw9"
        alt="Parks"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-xl font-bold">Explore the Parks</p>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="relative group h-full w-full">
      <img
        src="https://tinyurl.com/ea5jk6rc"
        alt="Resorts"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-xl font-bold">Relax at the Resorts</p>
      </div>
    </div>
  </Carousel>
</div>

    );
};

export default CarouselComponent;
