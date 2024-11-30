import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <motion.div
      className="hidden md:w-1/2 md:flex gap-2 justify-between overflow-hidden h-[100px]"
      animate={{ opacity: [0, 1], transition: { duration: 1 } }}
    >
      <div className="w-full bg-white text-neutral-600 rounded-t-lg rounded-bl-lg px-2 py-1 md:p-4 text-[8px] md:text-[12px]">
        <TypeAnimation
          sequence={[
            1000,
            "We produce food for Mice",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Aliqua cupidatat deserunt consequat labore nisi.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={70}
          //   style={{ fontSize: "12px", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>

      <div className="self-end">
        <img
          src="./man.png"
          alt="man"
          className="w-12 h-fit border border-gray-600 rounded-full bg-[#dd4c62] object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Speech;
