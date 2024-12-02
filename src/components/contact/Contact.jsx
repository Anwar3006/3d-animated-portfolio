import { motion, useInView } from "motion/react";
import ContactSVG from "./ContactSVG";
import Form from "./Form";
import { useRef } from "react";

const formVariants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};
const Contact = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <div
      className="contact flex flex-col md:flex-row items-center justify-between h-screen gap-[10px] md:gap-[24px]"
      ref={ref}
    >
      {/* Left Side */}
      <motion.div
        className="w-full h-[70%] md:w-1/2 md:h-full p-6 flex items-center justify-center"
        variants={formVariants}
        animate={inView ? "animate" : "initial"}
      >
        <Form />
      </motion.div>

      {/* Right Side */}
      <div className="w-full h-[30%] md:w-1/2 md:h-full px-6 pt-0 md:p-6 flex items-center justify-center">
        <ContactSVG />
      </div>
    </div>
  );
};

export default Contact;
