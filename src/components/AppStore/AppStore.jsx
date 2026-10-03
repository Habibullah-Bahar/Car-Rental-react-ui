import React from "react";
import AppStoreimg from "../../assets/website/app_store.png";
import PlayStore from "../../assets/website/play_store.png";
import Banner from "../../assets/website/pattern.jpeg";

const AppStore = () => {
  return (
    <div className="dark:bg-black">
      <div className="mx-5 pb-16 dark:bg-black">
        <div
          className="flex justify-center px-3 items-center rounded-xl py-28 "
          style={{
            backgroundImage: `url(${Banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="space-y-6 flex flex-col justify-center items-center mx-auto ">
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl font-semibold "
            >
              Get Started with our app
            </h1>
            <p data-aos="fade-up" className="font-sans sm:px-36 text-center">
              Affordable prices, reliable cars, friendly service, and smooth rentals every time.
            </p>
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <img
                src={PlayStore}
                alt=""
                className="w-[150px] sm:w-[200px] cursor-pointer"
              />
              <img
                src={AppStoreimg}
                alt=""
                className="w-[150px] sm:w-[200px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
