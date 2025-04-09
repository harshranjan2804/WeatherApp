import React from "react";

const RefreshButton = ({ onRefresh }) => {
  return (
    <button
      onClick={onRefresh}
      className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-500 transition"
    >
      <span className="text-sm">Refresh</span>
    </button>
  );
};

export default RefreshButton;
