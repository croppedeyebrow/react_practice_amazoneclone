import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const categories = [
  "All",
  "Deals",
  "Amazon",
  "Fashion",
  "Computers",
  "Home",
  "Mobiles",
];

const Search = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center">
        <select>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
        />
        <button className="w-[46px]">
          <MagnifyingGlassIcon className="h-[28px]" />
        </button>
      </div>
    </div>
  );
};

export default Search;
