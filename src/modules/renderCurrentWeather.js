const renderCurrentWeather = (condition, currentTemp, location) => {
  const currentDiv = document.createElement('div');
  currentDiv.id = 'current';

  const locationInfo = document.createElement('p');
  const icon = document.createElement('img');
  const description = document.createElement('p');
  const temp = document.createElement('p');

  locationInfo.textContent = `Current Weather in ${location.name}, ${location.region} ${location.country}`;
  icon.src = condition.icon;
  description.textContent = condition.text;
  temp.textContent = `${currentTemp} °F`;

  currentDiv.appendChild(locationInfo);
  currentDiv.appendChild(icon);
  currentDiv.appendChild(description);
  currentDiv.appendChild(temp);

  return currentDiv;
};

export default renderCurrentWeather;
