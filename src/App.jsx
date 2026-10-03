import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Carlist from "./components/CarListSection/Carlist";
import Testimonial from "./components/Testimonial/Testimonial";
import AppStore from "./components/AppStore/AppStore";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white font-serif">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Carlist />
        <Testimonial />
        <AppStore />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
