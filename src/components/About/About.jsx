import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white bg-gray-100 py-24 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 px-6 ">
        <div>
          <img
            data-aos="slide-right"
            data-aos-duration="1500"
            src={CarPng}
            alt=""
            className="h-[300px] w-[300px] object-contain sm:scale-125 sm:translate-x-11 drop-shadow-[2px_10px_6px_rgba(0,0,0,0.5)] "
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex flex-col space-y-6 px-6"
        >
          <h1 className="text-3xl sm:text-4xl font-bold">About us</h1>
          <p className="tracking-wide leading-8">
            Reliable car rentals for every journey. Enjoy comfortable vehicles,
            flexible booking options, affordable rates, and a smooth driving
            experience wherever you go. Choose from quality vehicles at
            affordable prices. Book easily, travel comfortably, and enjoy a
            hassle-free rental experience for every trip.
          </p>
          <div>
            <button className="px-6 py-2 text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-black cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
