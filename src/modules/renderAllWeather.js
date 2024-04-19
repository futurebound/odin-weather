import queryForecastWeather from './queryForecastWeather.js';

const renderAllWeather = () => {
  const contentDiv = document.getElementById('content');
  const locationInput = document.createElement('input');
  const locationButton = document.createElement('button');

  locationButton.textContent = 'Search Location';
  locationButton.addEventListener('click', () => {
    // PROMISE HANDLE STYLE w/ .then() since queryForecastWeater exports async function
    const location = locationInput.value;
    queryForecastWeather(location).then((response) => {
      console.log(response);
      if (response !== null) {
        const { condition, country, currentTemp, forecast, name, region } =
          response;
        const currentDiv = document.createElement('div');
        const forecastDiv = document.createElement('div');
      }
    });
  });

  contentDiv.appendChild(locationInput);
  contentDiv.appendChild(locationButton);
};

const renderForecast = (forecast) => {
  const forecastDiv = document.createElement('div');
};

export default renderAllWeather;
