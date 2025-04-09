import React from "react";

const UseMyLocation = ({ onLocationSuccess }) => {
  const apiKey = "acec4bff5a722bb91db6a590d8dae764";

  const fetchByCoordinates = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error("Could not fetch location weather");
      const data = await response.json();
      onLocationSuccess(data);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported in this browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetchByCoordinatess(latitude, longitude);
      },
      () => {
        alert("Permission denied or location unavailable.");
      }
    );
  };

  return (
    <button
      onClick={handleLocationClick}
      className="px-4 py-2 mt-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
    >
      Current Location
    </button>
  );
};

export default UseMyLocation;
