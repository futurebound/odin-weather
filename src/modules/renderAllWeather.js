import queryForecastWeather from './queryForecastWeather.js';

const renderCurrentWeather = (condition, currentTemp, location) => {
  const currentDiv = document.createElement('div');

  // const date = document.createElement('p');
  const name = document.createElement('p');
  const region = document.createElement('p');
  const country = document.createElement('p');
  const icon = document.createElement('img');
  const description = document.createElement('p');
  const temp = document.createElement('p');

  // date.textContent = day.date;
  name.textContent = location.name;
  region.textContent = location.region;
  country.textContent = location.country;
  icon.src = condition.icon;
  description.textContent = condition.text;
  temp.textContent = `Current Temp: ${currentTemp} °F`;

  currentDiv.appendChild(name);
  currentDiv.appendChild(region);
  currentDiv.appendChild(country);
  currentDiv.appendChild(icon);
  currentDiv.appendChild(description);
  currentDiv.appendChild(temp);

  return currentDiv;
};

const renderForecastWeather = (forecast) => {
  const forecastDiv = document.createElement('div');
  const days = forecast.map((day) => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    console.log(day);

    const date = document.createElement('p');
    const icon = document.createElement('img');
    const description = document.createElement('p');
    const maxTemp = document.createElement('p');
    const minTemp = document.createElement('p');

    date.textContent = day.date;
    icon.src = day.condition.icon;
    description.textContent = day.condition.text;
    maxTemp.textContent = `High: ${day.maxTemp} °F`;
    minTemp.textContent = `Low: ${day.minTemp} °F`;

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

const renderAllWeather = () => {
  const contentDiv = document.getElementById('content');
  const locationInput = document.createElement('input');
  const locationButton = document.createElement('button');

  locationButton.textContent = 'Search Location';
  locationButton.addEventListener('click', () => {
    // PROMISE HANDLE STYLE w/ .then() since queryForecastWeater exports async function
    const searchLocation = locationInput.value;
    queryForecastWeather(searchLocation).then((response) => {
      console.log(response);
      if (response !== null) {
        const { condition, currentTemp, forecast, location } = response;
        const currentDiv = renderCurrentWeather(
          condition,
          currentTemp,
          location,
        );
        const forecastDiv = renderForecastWeather(forecast);

        contentDiv.appendChild(currentDiv);
        contentDiv.appendChild(forecastDiv);
      }
    });
  });

  contentDiv.appendChild(locationInput);
  contentDiv.appendChild(locationButton);
};

export default renderAllWeather;
