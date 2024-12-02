import { motion, useInView, useScroll, useTransform } from "motion/react";
import projects from "./AllProjects";
import { useEffect, useRef, useState } from "react";
import "./projects.css";

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const listRef = useRef(null);
  // For Animation of List items
  const isInView = useInView(listRef, { margin: "-100px" });

  return (
    <div
      className="w-screen h-screen overflow-hidden flex items-center justify-center gap-6 lg:gap-12 flex-col lg:flex-row"
      id="listItem"
      ref={listRef}
    >
      <motion.div
        className="w-[80%] lg:w-[40%] rounded-2xl overflow-hidden"
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="w-[80%] lg:w-[40%] flex flex-col gap-3 lg:gap-6"
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
      >
        <motion.h1
          className="text-xl md:text-3xl lg:text-5xl font-semibold"
          variants={textVariants}
        >
          {item.title}
        </motion.h1>
        <motion.p
          className="text-[10px] md:text-base lg:text-lg font-light text-neutral-300"
          variants={textVariants}
        >
          {item.desc}
        </motion.p>
        <a href={item.link}>
          <motion.button
            className="flex items-center justify-center px-2 py-1 md:px-3 md:py-2 bg-[#fd0a54] hover:bg-[#fd0a54]/50 text-[12px] md:text-semibold text-white rounded-lg cursor-pointer"
            variants={textVariants}
          >
            View Project
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  // For Scrolling - Converting vertical scroll to horizontal
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * projects.length]
  );

  const [containerLeft, setContainerLeft] = useState();
  useEffect(() => {
    const rect = containerRef.current.getBoundingClientRect();
    setContainerLeft(rect.left);
  }, []);

  return (
    <div className="h-[600vh] relative" ref={containerRef}>
      <motion.div
        className="flex h-screen w-max sticky top-0"
        style={{ x: xTranslate }}
      >
        <div
          style={{
            width: window.innerWidth - containerLeft,
          }}
        />
        {projects.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>

      <section className="h-screen max-h-screen snap-center" />
      <section className="h-screen max-h-screen snap-center" />
      <section className="h-screen max-h-screen snap-center" />
      <section className="h-screen max-h-screen snap-center" />
      <section className="h-screen max-h-screen snap-center" />

      <div className="sticky w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px]  left-[100%] bottom-[3%] lg:left-0 lg:bottom-[80%]">
        <svg height="100%" width="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#fd0a54"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Projects;
