import queryForecastWeather from './queryForecastWeather.js';

const renderForecast = () => {
  const contentDiv = document.getElementById('content');
  const locationInput = document.createElement('input');
  const locationButton = document.createElement('button');

  locationButton.textContent = 'Search Location';
  locationButton.addEventListener('click', () => {
    // PROMISE HANDLE STYLE w/ .then() since queryForecastWeater exports async function
    const location = locationInput.value;
    const forecast = queryForecastWeather(location)
      .then((response) => {
        console.log(response);
    });
  });
  
  contentDiv.appendChild(locationInput);
  contentDiv.appendChild(locationButton);
}

export default renderForecast;