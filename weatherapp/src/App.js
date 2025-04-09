// Redesigned and humanized App.jsx layout
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import SearchHistory from "./components/SearchHistory";
import RefreshButton from "./components/RefreshButton";
import UseMyLocation from "./components/UseMyLocation";
import Loader from "./components/Loader";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [currentCity, setCurrentCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  const apiKey = "acec4bff5a722bb91db6a590d8dae764";

  const handleSearch = async (city) => {
    const query = city.trim();
    if (!query) return;

    setLoading(true);
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=metric`)
      ]);

      if (!weatherRes.ok || !forecastRes.ok) throw new Error("City not found");

      const weatherJson = await weatherRes.json();
      const forecastJson = await forecastRes.json();
      const daily = forecastJson.list.filter(item => item.dt_txt.includes("12:00:00"));

      setWeatherData(weatherJson);
      setForecastData(daily);
      setCurrentCity(query);

      setSearchHistory((prev) => {
        const updated = [query, ...prev.filter(c => c !== query)];
        return updated.slice(0, 5);
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSearch = (data) => {
    setWeatherData(data);
    setCurrentCity(data.name);
    setSearchHistory((prev) => {
      const updated = [data.name, ...prev.filter((c) => c !== data.name)];
      return updated.slice(0, 5);
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-100 to-sky-300 dark:from-gray-900 dark:to-gray-800 p-4 transition-all">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-white">Weather App</h1>
          <ThemeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />
        </div>

        <div className="space-y-4">
          <SearchBar onSearch={handleSearch} />
          <UseMyLocation onLocationSuccess={handleLocationSearch} />
          <SearchHistory history={searchHistory} onSelect={handleSearch} />
        </div>

        {loading && <Loader />}

        {!loading && weatherData && (
          <div className="mt-6 space-y-6">
            <div className="flex justify-end">
              <RefreshButton onRefresh={() => handleSearch(currentCity)} />
            </div>

            <WeatherCard data={weatherData} />

            {forecastData.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">5-Day Forecast</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {forecastData.map((f, index) => (
                    <ForecastCard
                      key={index}
                      day={new Date(f.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}
                      icon={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
                      temp={f.main.temp.toFixed(1)}
                      desc={f.weather[0].description}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
