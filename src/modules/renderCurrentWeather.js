const renderCurrentWeather = (condition, currentTemp, location) => {
  const currentDiv = document.createElement('div');

  const name = document.createElement('p');
  const country = document.createElement('p');
  const icon = document.createElement('img');
  const description = document.createElement('p');
  const temp = document.createElement('p');

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

export default renderCurrentWeather;
