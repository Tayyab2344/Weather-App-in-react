import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";

const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Gujranwala"); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/weather?q=${city}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`
        );
        if (!response.ok) throw new Error("City not found");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (event) => {
    event.preventDefault();
    setCity(event.target.elements.city.value);
  };

  return (
    <div className="App min-h-screen  bg-blue-900 flex flex-col items-center">
      <div className="w-full max-w-md p-4">
        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            name="city"
            placeholder="Enter city name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Search
          </button>
        </form>

        {loading && <div className="text-gray-700">Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {data && !loading && !error && <Weather weatherData={data} />}
      </div>
    </div>
  );
};

export default App;
