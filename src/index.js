import renderAllWeather from './modules/renderAllWeather.js';
import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode!');
} else if (process.env.NODE_ENV === 'production') {
  console.log('We are in production mode!');
}

renderAllWeather();
