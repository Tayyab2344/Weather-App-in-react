import React from "react";
import moment from 'moment';

const Weather = ({ weatherData }) => {
  const sunriseTime = moment.unix(weatherData.sys.sunrise).format('hh:mm A');
  const sunsetTime = moment.unix(weatherData.sys.sunset).format('hh:mm A');

  return (
    <div className="bg-opacity-40 backdrop-blur-lg rounded-2xl shadow-lg p-8 max-w-xl mx-auto h-screen md:h-2/3 flex flex-col justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center">{weatherData.name}</h2>
      <div className="text-white">
        <p className="text-3xl font-semibold mb-4 text-center">
          Temperature: <span className="text-white">{weatherData.main.temp} &deg;C</span>
        </p>
        <div className="flex justify-between text-xl mb-4">
          <p>Sunrise: <span className="font-medium text-yellow-800">{sunriseTime}</span></p>
          <p>Sunset: <span className="font-medium text-red-800">{sunsetTime}</span></p>
        </div>
        <p className="text-2xl font-medium text-center mb-4">
          Description: <span className="font-semibold text-gray-300">{weatherData.weather[0].main}</span>
        </p>
        <p className="text-xl font-medium text-center mb-4">
          Humidity: <span className="font-semibold text-gray-300">{weatherData.main.humidity}%</span>
        </p>
        <p className="font-bold text-gray-200 text-center mt-6">Day: {moment().format('dddd')}</p>
        <p className="font-bold text-gray-200 text-center">Date: {moment().format('LL')}</p>
      </div>
    </div>
  );
};

export default Weather;
