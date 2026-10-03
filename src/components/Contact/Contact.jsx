import React from "react";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white pt-8 pb-10">
      <div className="mx-5 py-8 px-8  grid grid-cols-1 sm:grid-cols-2 space-y-2 bg-gray-800 dark:bg-gray-900 text-white gap-3 font-sans">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            Let's collaborate on your upcoming car rental venture
          </h1>
          <p className="text-gray-400 font-sans">
            Affordable prices, reliable cars, friendly service, and smooth rentals every time.Affordable prices, reliable cars, friendly service, and smooth rentals every time.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="px-6 py-2 hover:bg-primary/80 font-semibold cursor-pointer tracking-widest uppercase duration-300 text-white bg-primary rounded-xl font-sans">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
