import { motion } from "motion/react";
import Speech from "./Speech";
import { Canvas } from "@react-three/fiber";
import Bg3DShape from "./Bg3DShape";
import { Suspense } from "react";

const frameworkVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const socialsVariant = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-100 overflow-hidden flex flex-col items-start justify-between md:flex-row">
      {/* Left Side of Hero Section */}
      <div className="w-full h-1/2 flex flex-col md:w-1/2 md:h-screen md:justify-between">
        {/* Title */}
        <motion.h1
          className="mt-12 text-5xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-pink-500 font-bold tracking-widest text-nowrap text-center md:text-left"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hey there!👋 <br />
          <span className="text-white font-semibold tracking-tight text-3xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-nowrap">
            I'm Anwar-Sadat
          </span>
          <p className="font-bold text-base md:hidden text-pink-800">
            A Full-Stack Developer
          </p>
        </motion.h1>

        {/* Frameworks */}
        <motion.div
          variants={frameworkVariant}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center mt-4 md:mt-0 md:items-start"
        >
          <motion.h2
            variants={frameworkVariant}
            className="font-semibold text-base md:text-2xl"
          >
            Frameworks:
          </motion.h2>
          <motion.p
            variants={frameworkVariant}
            className="text-xs md:text-sm text-neutral-500 font-light mb-0 tracking-tight md:w-full"
          >
            the ones I'm most comfortable with:
          </motion.p>

          <div className="flex items-center justify-center w-full md:grid md:grid-cols-2 gap-2 mt-3 md:max-w-40">
            <motion.div
              variants={frameworkVariant}
              className="bg-white h-15 w-14 md:w-12 rounded-xl"
            >
              <img
                src="/nextjs.svg"
                alt="nextjs"
                width={24}
                height={24}
                className="h-10 w-full"
              />
            </motion.div>
            <motion.div
              variants={frameworkVariant}
              className="bg-white h-15 w-14 md:w-12 rounded-xl"
            >
              <img
                src="/nextjs.svg"
                alt="laravel"
                width={24}
                height={24}
                className="h-10 w-full"
              />
            </motion.div>
            <motion.div
              variants={frameworkVariant}
              className="bg-white h-15 w-14 md:w-12 rounded-xl"
            >
              <img
                src="/nextjs.svg"
                alt="nextjs"
                width={24}
                height={24}
                className="h-10 w-full"
              />
            </motion.div>
            <motion.div
              variants={frameworkVariant}
              className="bg-white h-15 w-14 md:w-12 rounded-xl"
            >
              <img
                src="/nextjs.svg"
                alt="laravel"
                width={24}
                height={24}
                className="h-10 w-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll SVG */}
        <motion.a
          href="#services"
          className="mx-auto md:mx-0 mt-5 md:mt-0 md:mb-12 w-fit"
          animate={{ y: [0, 5, 0], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      {/* Right Side of Hero Section */}
      <div className="hidden md:ml-0 md:mt-0 md:w-1/2 md:h-screen md:flex md:flex-col justify-end md:justify-between items-end">
        {/* Socials */}
        <motion.div
          className="hidden md:flex flex-col space-y-3 py-4 px-1 md:px-2 bg-[#2f204e] rounded-br-lg items-center justify-start w-8 md:w-12"
          variants={socialsVariant}
          initial="initial"
          animate="animate"
        >
          <motion.a href="" variants={socialsVariant}>
            <img
              src="/telegram.png"
              alt="telegram"
              className="h-4 w-fit md:h-8"
            />
          </motion.a>
          <motion.a href="" variants={socialsVariant}>
            <img
              src="/linkedin.png"
              alt="linkedin"
              className="h-4 w-fit md:h-8"
            />
          </motion.a>
          <motion.div
            className="w-max h-[100%] text-nowrap"
            variants={socialsVariant}
          >
            <div className="bg-[#dd4c52] text-[8px] md:text-[12px] h-[100%] rotate-90 px-2 py-[0.5px] origin-top-left translate-x-[36px]  md:translate-x-[50px] md:translate-y-1 rounded-br-xl uppercase">
              Hit me up.
            </div>
          </motion.div>
        </motion.div>

        {/* Speech Bubble */}
        <Speech />

        {/* Certification */}
        <motion.div
          className="hidden md:flex md:flex-col gap-0.5 lg:gap-2 items-end md:items-center justify-center md:mr-2 lg:mr-10"
          animate={{ opacity: [0, 1], transition: { duration: 2, delay: 1 } }}
        >
          <div className="w-12 h-12 md:w-auto md:h-16 lg:w-24 lg:h-24 rounded-lg object-cover bg-white flex items-center justify-center">
            <img
              src="/java-certified.png"
              alt="java"
              className="h-12 md:h-16 lg:h-24 w-fit"
            />
          </div>
          <p className="text-[10px] md:text-[10px] lg:text-sm text-neutral-400 font-light text-right">
            Oracle Certified
          </p>
          <p className="text-[10px] md:text-[10px] lg:text-sm text-neutral-400 font-light">
            Full-Stack Developer
          </p>
          <p className="text-[10px] md:text-[10px] lg:text-sm text-neutral-400 font-light">
            Backend Engineer
          </p>
        </motion.div>

        {/* Contact Us */}
        <motion.a
          href="/#contact"
          className="mb-6 md:mb-12"
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="relative flex justify-center items-center w-full"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-[7rem] max-w-[150px] md:w-2/3 md:max-w-[200px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="tracking-widest">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="tracking-widest">
                <textPath href="#innerCirclePath" startOffset="47%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                className="h-[20px] w-[20px] md:h-[40px] md:w-[40px]"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_27_"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>

      {/* Mid Section of Hero */}
      <div>
        {/* Hero image */}
        <div className="absolute -z-10 top-0 left-0 w-full h-screen">
          <div className="relative w-full h-full flex items-end justify-center">
            {/* 3d Background */}
            <div className="absolute inset-0 -z-10">
              <Canvas>
                <Suspense fallback="Loading...">
                  <Bg3DShape />
                </Suspense>
              </Canvas>
            </div>

            <img
              src="/myhero.png"
              alt="myself"
              className="w-auto md:w-[100%] xl:w-[50%] max-w-full max-h-[100%] object-contain lg:max-h-screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
