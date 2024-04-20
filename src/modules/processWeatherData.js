// need weather description, icon code, hi, lo
const processWeatherData = (data) => {
  if (data === null) return data;

  const { current, forecast, location } = data;
  const cleanForecast = forecast.forecastday.map((day) => {
    const cleanDay = {
      date: day.date,
      condition: day.day.condition,
      maxTemp: day.day.maxtemp_f,
      minTemp: day.day.mintemp_f,
    };

    return cleanDay;
  });

  const processed = {
    condition: current.condition,
    currentTemp: current.temp_f,
    forecast: cleanForecast,
    location,
  };

  return processed;
};

export default processWeatherData;
