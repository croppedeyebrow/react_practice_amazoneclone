import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

import { callAPI } from "../utils/CallApi";

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
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="w-[46px]">
          <MagnifyingGlassIcon className="h-[28px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute ">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div key={suggestion.id}>{suggestion.title}</div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
