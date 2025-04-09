import React from "react";

const WeatherCard = ({ data }) => {
  const {
    name,
    sys: { country },
    main: { temp, humidity },
    wind: { speed },
    weather,
  } = data;

  const iconURL = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md p-6 w-full text-center">
      <h2 className="text-2xl font-semibold mb-2">
        {name}, {country}
      </h2>
      <img
        src={iconURL}
        alt={weather[0].description}
        className="mx-auto w-20 h-20"
      />
      <p className="text-xl capitalize mb-1">{weather[0].description}</p>
      <p className="text-4xl font-bold text-blue-600 dark:text-yellow-300 mb-1">
        {temp}°C 
        {/* typed Alt + 0176 for degree symbol */}
      </p>
      <div className="flex justify-around text-sm text-gray-700 dark:text-gray-300 mt-4">
        <div>
          <p className="font-medium">Humidity</p>
          <p>{humidity}%</p>
        </div>
        <div>
          <p className="font-medium">Wind</p>
          <p>{speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
