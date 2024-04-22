import queryForecastWeather from './queryForecastWeather.js';
import renderCurrentWeather from './renderCurrentWeather.js';
import renderForecastWeather from './renderForecastWeather.js';

const renderAllWeather = () => {
  const contentDiv = document.getElementById('content');
  const searchDiv = document.createElement('div');
  const weatherDiv = document.createElement('div');

  const searchForm = document.createElement('form');
  const searchLabel = document.createElement('label');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');

  searchDiv.id = 'search';
  weatherDiv.id = 'weather';

  searchLabel.textContent = 'Location:';

  searchInput.type = 'text';
  searchLabel.appendChild(searchInput);

  searchButton.type = 'submit';
  searchButton.textContent = 'Get Weather';
  searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    weatherDiv.replaceChildren(); // clear prior

    // PROMISE HANDLE STYLE w/ .then() since queryForecastWeater exports async function
    const searchLocation = searchInput.value;
    queryForecastWeather(searchLocation).then((response) => {
      console.log(response);
      if (response !== null) {
        const { condition, currentTemp, forecast, location } = response;

        const forecastDiv = renderForecastWeather(forecast);
        const currentDiv = renderCurrentWeather(
          condition,
          currentTemp,
          location,
        );

        weatherDiv.appendChild(currentDiv);
        weatherDiv.appendChild(forecastDiv);
        contentDiv.appendChild(weatherDiv);
      }
    });
  });

  searchForm.appendChild(searchLabel);
  searchForm.appendChild(searchButton);
  searchDiv.appendChild(searchForm);
  contentDiv.appendChild(searchDiv);
};

export default renderAllWeather;
