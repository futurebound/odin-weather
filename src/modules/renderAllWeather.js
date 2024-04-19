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
        const forecastDiv = renderForecast(forecast);

        contentDiv.appendChild(forecastDiv);
      }
    });
  });

  contentDiv.appendChild(locationInput);
  contentDiv.appendChild(locationButton);
};

const renderForecast = (forecast) => {
  const forecastDiv = document.createElement('div');
  const days = forecast.map((day) => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    console.log(day);

    const date = document.createElement('p');
    date.textContent = day.date;

    const icon = document.createElement('img');
    icon.src = day.condition.icon;

    const description = document.createElement('p');
    description.textContent = day.condition.text;

    const maxTemp = document.createElement('p');
    maxTemp.textContent = `High: ${day.maxTemp}`;

    const minTemp = document.createElement('p');
    minTemp.textContent = `Low: ${day.minTemp}`;

    dayDiv.appendChild(date);
    dayDiv.appendChild(icon);
    dayDiv.appendChild(description);
    dayDiv.appendChild(maxTemp);
    dayDiv.appendChild(minTemp);

    return dayDiv;
  });

  days.forEach((dayDiv) => {
    forecastDiv.append(dayDiv);
  });

  return forecastDiv;
};

export default renderAllWeather;
