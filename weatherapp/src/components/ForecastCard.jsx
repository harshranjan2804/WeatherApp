import React from "react";

const ForecastCard = ({ day, icon, temp, desc }) => {
  return (
    <div className="bg-white dark:bg-gray-700 text-center p-4 rounded-md shadow-sm text-sm text-gray-800 dark:text-white">
      <p className="font-semibold mb-1">{day}</p>
      <img src={icon} alt={desc} className="mx-auto w-12 h-12" />
      <p className="text-lg   font-bold">{temp}°C</p>
      <p className="capitalize mt-1">{desc}</p>
    </div>
  );
};

export default ForecastCard;
