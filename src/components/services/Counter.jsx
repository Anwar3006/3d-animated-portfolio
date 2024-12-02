import { animate } from "motion";
import { useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const Counter = ({ from, to, text }) => {
  const [count, setCount] = useState(from);
  const containerRef = useRef();
  const isInview = useInView(containerRef);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev) => {
        setCount(Math.floor(prev));
      },
    });

    return () => animation.cancel();
  }, [isInview, from, to]);

  return (
    <div className="flex flex-col items-start md:gap-2" ref={containerRef}>
      <h1 className="text-3xl md:text-3xl lg:text-4xl text-[#dd4c62] font-extrabold">
        {count}+
      </h1>
      <p className="md:text-[10px] lg:text-base text-neutral-300 md:text-neutral-400">
        {text}
      </p>
    </div>
  );
};

export default Counter;
