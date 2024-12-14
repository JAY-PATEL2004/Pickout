import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:5000/search", {
        query,
      });
      setSearchResults(response.data); // Update parent state with the results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="px-4 py-2">
      <input
        type="text"
        placeholder="Search street shop / food"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
