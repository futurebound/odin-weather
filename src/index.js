import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode!');
} else if (process.env.NODE_ENV === 'production') {
  console.log('We are in production mode!');
}

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';

// need weather description, icon code, hi, lo
const processWeatherData = (data) => {
  const {current, location} = data;
  // const {condition} = current;
  // console.log(current);
  // console.log(location);
  // console.log(condition);
  
  const processed = {
    condition: current.condition,
    country: location.country,
    name: location.name,
    region: location.region,
    temp: current.temp_f
  }

  return processed;
}

async function getCurrentWeather(location) {
  try {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
    const weatherData = await response.json();
    // console.log(weatherData);
    const processedData = processWeatherData(weatherData);
    console.log(processedData);
  } catch (error) {
    console.error(error);
  }
}



getCurrentWeather('seattle');