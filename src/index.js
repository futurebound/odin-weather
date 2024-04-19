import queryForecastWeather from './modules/queryForecastWeather.js';
import renderForecast from './modules/renderForecast.js';
import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode!');
} else if (process.env.NODE_ENV === 'production') {
  console.log('We are in production mode!');
}

// mock query
// const defaultQuery = queryForecastWeather('seattle');
// console.log(defaultQuery);
renderForecast();