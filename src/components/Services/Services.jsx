import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const Services = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="py-10 space-y-8">
        <div>
          <h1 className="text-3xl font-semibold text-center sm:text-4xl my-6">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-[350px]  place-items-center gap-5 px-5 py-3 font-sans ">
          <div data-aos="fade-up" data-aos-duration="400" className="group">
            <div className="flex flex-col justify-center items-center space-y-5 bg-black py-14 px-6 rounded-lg dark:bg-gray-900 group-hover:bg-primary duration-300  ">
              <div>
                <FaCameraRetro className="text-5xl text-primary group-hover:text-black" />
              </div>
              <h1 className="text-lg text-white group-hover:text-black ">
                Best Price
              </h1>
              <p className="text-white text-center sm:px-5 group-hover:text-black ">
                Affordable car rentals with transparent pricing, great value.
                
              </p>
              <p className="text-primary text-lg font-semibold group-hover:text-black cursor-pointer ">
                Learn More
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="900" className="group">
            <div className="flex flex-col justify-center items-center space-y-5 bg-black py-14 px-6 rounded-lg dark:bg-gray-900 group-hover:bg-primary duration-300  ">
              <div>
                <GiNotebook className="text-5xl text-primary group-hover:text-black" />
              </div>
              <h1 className="text-lg text-white group-hover:text-black ">
                Fast and Safe
              </h1>
              <p className="text-white text-center group-hover:text-black ">
                Fast, reliable, and safe car rentals for a smooth and
                stress-free journey.
              </p>
              <p className="text-primary text-lg font-semibold group-hover:text-black cursor-pointer ">
                Learn More
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" className="group">
            <div className="flex flex-col justify-center items-center space-y-5 bg-black py-14 px-6 rounded-lg dark:bg-gray-900 group-hover:bg-primary duration-300  ">
              <div>
                <SlNote className="text-5xl text-primary group-hover:text-black" />
              </div>
              <h1 className="text-lg text-white group-hover:text-black ">
                Experience Drivers
              </h1>
              <p className="text-white text-center group-hover:text-black ">
                Experienced drivers providing safe, reliable, and comfortable
                rides for every journey.
              </p>
              <p className="text-primary text-lg font-semibold group-hover:text-black cursor-pointer ">
                Learn More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
