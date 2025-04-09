import React from "react";

const SearchHistory = ({ recentSearches, handleCityClick }) => {
  if (!recentSearches.length) return null;

  return (
    <div className="mt-4">
      <h3 className="text-base font-medium text-gray-800 dark:text-white mb-2">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {recentSearches.map((city, index) => (
          <button
            key={index}
            onClick={() => handleCityClick(city)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;