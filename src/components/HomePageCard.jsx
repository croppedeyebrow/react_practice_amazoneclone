import React from "react";

const HomePageCard = ({ title, img, link }) => {
  return (
    <div className="h-[420px] bg-white">
      <div className="text-lg xl:text-xl font-semibold mt-4 ml-4">{title}</div>

      <div className="h-[300px] m-4">
        <img className="h-[100%] w-[100%] object-cover" src={img} alt={title} />
      </div>
      <div className="text-xs xl:text-sm text-blue-400 ml-4 ">{link}</div>
    </div>
  );
};

export default HomePageCard;
