import React from "react";
import Pic1 from "../../assets/1772957663258.png";
import Pic2 from "../../assets/IMG_20251202_201927.jpg";
import Pic3 from "../../assets/warrior.jpg";
import { IoStarHalf } from "react-icons/io5";

const TestiData = [
  {
    id: 1,
    image: Pic1,
    desc: "Affordable prices, reliable cars, friendly service, and smooth. ",
    name: "Habibullah",
    aosDelay: 0,
  },
  {
    id: 2,
    image: Pic2,
    desc: "Affordable prices, reliable cars, friendly service, and smooth.",
    name: "Bahar_Dev",
    aosDelay: 500,
  },
  {
    id: 3,
    image: Pic3,
    desc: "Affordable prices, reliable cars, friendly service, and smooth.",
    name: "Warior",
    aosDelay: 1000,
  },
];

const Testimonial = () => {
  return (
    <div className="dark:bg-black pb-6">
      <div className="mb-16">
        <div className="py-24 ">
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl"
          >
            What Our Clients Say About Us
          </h1>
          <p data-aos="fade-up" className="text-center font-sans mx-2 sm:px-34">
            Our customers love our affordable prices, reliable cars, friendly
            service, and smooth rental experience every time.
          </p>
        </div>
        {/* card-section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 gap-3">
          {TestiData.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              key={item.id}
              className="w-full text-center rounded-lg bg-gray-100 dark:bg-white/20 px-6 py-12 space-y-3 "
            >
              <div className="flex justify-center items-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-20 h-20 object-cover rounded-full "
                />
              </div>
              <div className="flex gap-2 items-center justify-center">
                <IoStarHalf className="text-primary text-lg" />
                <IoStarHalf className="text-primary text-lg" />
                <IoStarHalf className="text-primary text-lg" />
                <IoStarHalf className="text-primary text-lg" />
                <IoStarHalf className="text-primary text-lg" />
              </div>
              <p className="font-sans">{item.desc} </p>
              <p className="text-lg font-semibold font-sans py-4">
                {item.name}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
