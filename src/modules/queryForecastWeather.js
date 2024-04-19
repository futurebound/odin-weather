import processWeatherData from './processWeatherData.js';

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = process.env.WEATHER_BASE_URL;

async function queryForecastWeather(location) {
  let output = null;
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=3`
    );
    // console.log(response);
    if (!response.ok) {
      console.log(`Error code ${response.status}: ${response.statusText}`);
    } else {
      const weatherData = await response.json();
      const processedData = processWeatherData(weatherData);
      output = processedData;
    }
  } catch (error) {
    console.error(error);
  }
  return output;
}

export default queryForecastWeather;
