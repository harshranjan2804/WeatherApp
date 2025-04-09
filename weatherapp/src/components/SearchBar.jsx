import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (!location.trim()) return;
    onSearch(location.trim());
    setLocation("");
  };

  return (
    <form
      onSubmit={handleCitySubmit}
      className="flex flex-col sm:flex-row items-center gap-3"
    >
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter City"
        className="w-full sm:w-64 px-4 py-2 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
      />

      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
