import React from "react";

const SearchBar = () => {
  return (
    <div className="px-4 py-2">
      <input
        type="text"
        placeholder="Search street shop / food"
        className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
