import React from "react";

const ServiceCard = ({ img, title, counter, index, handleClick }) => {
  return (
    <div
      className="w-full md:w-3/4 bg-[#2f213f] rounded-lg px-2 py-1 md:p-4 flex items-center gap-4 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`w-14 h-10 rounded-full flex items-center justify-center px-2 py-1 ${
          index % 3 === 0
            ? "bg-[#6c5c0c]"
            : index % 3 === 1
            ? "bg-[#f38630]"
            : "bg-[#b3e099]"
        }`}
      >
        <img src={img} alt={title} className="h-full w-full object-contain" />
      </div>

      <div>
        <h2 className="text-lg md:text-lg lg:text-2xl font-semibold mb-2 md:mb-3 text-neutral-400">
          {title}
        </h2>
        <h3 className="text-sm lg:text-base font-light text-neutral-300">
          {counter} Projects
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
