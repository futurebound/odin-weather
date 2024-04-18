import queryForecastWeather from './modules/queryForecastWeather.js';
import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode!');
} else if (process.env.NODE_ENV === 'production') {
  console.log('We are in production mode!');
}

// mock query
const defaultQuery = queryForecastWeather('seattle');
console.log(defaultQuery);

const contentDiv = document.getElementById('content');
const locationInput = document.createElement('input');
const locationButton = document.createElement('button');

locationButton.textContent = 'Search Location';
locationButton.addEventListener('click', () => {
  const location = locationInput.value;
  const locationForecast = queryForecastWeather(location);
  console.log(locationForecast);
});

contentDiv.appendChild(locationInput);
contentDiv.appendChild(locationButton);
