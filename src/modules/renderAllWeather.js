import queryForecastWeather from './queryForecastWeather.js';

const renderCurrentWeather = (condition, currentTemp, location) => {
  const currentDiv = document.createElement('div');

  // const date = document.createElement('p');
  const name = document.createElement('p');
  const country = document.createElement('p');
  const icon = document.createElement('img');
  const description = document.createElement('p');
  const temp = document.createElement('p');

  // date.textContent = day.date;
  name.textContent = `${location.name}, ${location.region}`;
  country.textContent = location.country;
  icon.src = condition.icon;
  description.textContent = condition.text;
  temp.textContent = `Current Temp: ${currentTemp} °F`;

  currentDiv.appendChild(name);
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
  const searchDiv = document.createElement('div');
  const weatherDiv = document.createElement('div');

  const searchForm = document.createElement('form');
  const searchLabel = document.createElement('label');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');

  searchForm.id = 'search-form';
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
