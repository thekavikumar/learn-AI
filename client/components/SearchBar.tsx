"use client";

import { Search } from "lucide-react";
import React, { FC, useState } from "react";

interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = ({}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      className={`border-2 rounded-md flex p-3 w-1/2 ${
        isFocused ? "border-2 border-gray-500 shadow-md" : ""
      }`}
    >
      <Search className="w-6 h-6 mr-2 text-gray-500" />
      <input
        type="search"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full focus:outline-none bg-transparent"
        placeholder="Search Models and Articles here...."
      />
    </div>
  );
};
