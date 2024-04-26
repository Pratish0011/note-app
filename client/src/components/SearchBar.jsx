import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex w-fit">
      <input
        type="search"
        className="h-[3.5rem] w-[62vw] bg-[#494D7D] m-10 mb-4 rounded-xl pl-10 text-white"
        placeholder="Search Here..."
      />
      <div className="h-fit w-fit p-5 bg-[#494D7D] mt-10 rounded-xl">
        <IoSearch className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
