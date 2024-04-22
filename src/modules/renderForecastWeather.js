const renderForecastWeather = (forecast) => {
  const forecastDiv = document.createElement('div');
  forecastDiv.id = 'forecast';

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

export default renderForecastWeather;
