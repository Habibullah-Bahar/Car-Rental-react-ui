import React from "react";
import car1 from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const CarList = [
  {
    id: 1,
    name: "BMW UX",
    price: "100",
    image: car1,
    aosDelay: 0,
  },
  {
    id: 2,
    name: "KIA UX",
    price: "140",
    image: car2,
    aosDelay: 500,
  },
  {
    id: 3,
    name: "BMW UX",
    price: "100",
    image: car3,
    aosDelay: 1000,
  },
];

const Carlist = () => {
  return (
    <div>
      <div className="px-5 py-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
            Our Special Cars
          </h1>
          <p className="text-sm pb-10">
            A car is a four-wheeled motorized vehicle built primarily to
            transport 1 to 8 people on roads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16   ">
          {CarList.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="group"
            >
              <div className="border-2  border-gray-300 group-hover:border-primary rounded-xl px-3 py-2 space-y-3  duration-700 transition-all">
                <h1 className="text-xl font-semibold">12Km</h1>
                <div className="w-full h-[120px]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full object-contain h-[120px] sm:translate-x-8 
                  duration-700 transition-all
                  group-hover:sm:translate-x-16 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]"
                  />
                </div>
                <h1 className="text-primary font-semibold">{item.name} </h1>
                <p className="flex text-xl font-semibold justify-between items-center">
                  ${item.price}/Day{" "}
                  <a
                    className="bg-gradient-to-b from-yellow-500 to-yellow-200 tracking-tight bg-clip-text text-transparent hover:text-primary"
                    href="#"
                  >
                    Details
                  </a>{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pt-8">
          <button className="border-2 text-primary border-primary rounded-md px-6 py-2 font-sans cursor-pointer hover:text-black hover:bg-primary/80">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carlist;
