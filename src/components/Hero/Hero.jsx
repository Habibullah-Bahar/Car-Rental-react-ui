import React from "react";
import CarPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";

const Hero = () => {
  return (
    <div>
      <div className=" dark:bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center px-10 sm:px-25">
          <div className="pt-6">
            <div className="space-y-5 sm:pr-32">
              <h1 data-aos="fade-up" className="text-2xl text-primary">
                Effortless
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-5xl lg:text-7xl font-semibold "
              >
                Car Rental
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="1000"
                className="text-gray-600 dark:text-gray-400"
              >
                Car Rental offers 15 flexible daily or weekly booking choices for local, outstation, and corporate travel needs.
              </p>
              <div>
                <button className="px-6 py-2 bg-primary hover:bg-primary/80 text-black rounded-md duration-300 cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="zoom-in" data-aos-duration="1500">
              <img
                src={yellowCar}
                alt=""
                className="h-[600px] w-[600px] object-contain duration-500 dark:hidden sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.5)]"
              />
              <img
                src={CarPng}
                alt=""
                className="hidden h-[600px] w-[600px] object-contain duration-500 dark:block max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
