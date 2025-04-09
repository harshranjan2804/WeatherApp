import React from "react";

const ThemeToggle = ({ darkMode, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-2 bg-white dark:bg-gray-700 rounded-full shadow hover:scale-105 transition"
      title="Toggle Theme"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
