import { motion, useInView } from "motion/react";
import Counter from "./Counter";
import LaptopModelContainer from "./LaptopModel/LaptopModelContainer";
import PlaystationModelContainer from "./PlayStationModel/PlaystationModelContainer";
import SculptureModelContainer from "./Sculpture/SculptureModelContainer";
import ServiceCard from "./ServiceCard";

import { useRef, useState } from "react";

const services = [
  {
    id: 1,
    img: "service1.png",
    title: "Web Application Design & Development",
    counter: 15,
  },
  {
    id: 2,
    img: "api.png",
    title: "API Integration & Development",
    counter: 10,
  },
  {
    id: 3,
    img: "fullstack2.png",
    title: "Fullstack Maintenance & Optimization",
    counter: 8,
  },
];

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};
const servicesVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 3.5,
    },
  },
};

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);

  const containerRef = useRef();
  const isMobile = window.innerWidth < 768; // Accommodating for mobile screens
  const isInView = useInView(containerRef, {
    margin: isMobile ? "-100px" : "-300px",
  });
  return (
    <div className="h-[100%] overflow-hidden flex relative" ref={containerRef}>
      {/* Left Side */}
      <div className="relative top-0 left-0 w-full z-20 flex flex-col items-center justify-center md:z-0 md:w-1/2 md:flex md:flex-col md:justify-center md:items-start">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="text-2xl mb-4 md:mb-6 md:text-4xl lg:text-6xl xl:text-8xl font-bold text-nowrap"
        >
          How can I help?
        </motion.h1>

        {/* Services Carrds */}
        <motion.div
          variants={servicesVariants}
          animate={isInView ? "animate" : "initial"}
          className="flex flex-col gap-4 mb-6 md:mb-5"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              index={service.id}
              img={service.img}
              title={service.title}
              counter={service.counter}
              handleClick={() => setCurrentServiceId(service.id)}
            />
          ))}
        </motion.div>

        {/* Counter */}
        <div
          className={`${
            isMobile ? "w-full" : "w-2/3"
          } flex items-center justify-between space-x-3`}
        >
          <Counter from={0} to={30} text="Projects Completed" />
          <Counter from={0} to={15} text="Satisfied Clients" />
        </div>
      </div>

      {/* Right Side */}
      <div className="absolute top-0 left-0 h-full w-full -z-10 flex flex-col items-center justify-center md:static md:z-0 md:w-1/2 md:flex md:flex-col md:justify-center">
        {currentServiceId === 1 ? (
          <LaptopModelContainer />
        ) : currentServiceId === 2 ? (
          <PlaystationModelContainer />
        ) : (
          <SculptureModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
