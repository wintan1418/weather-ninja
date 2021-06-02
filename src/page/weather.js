const weather = (() => {
  function convertData(data) {
    const {
      name: city,
      main: { temp: temperature, feels_like: possibility, humidity },
      wind: { speed: windSpeed },
    } = data;
    return {
      city, temperature, possibility, humidity, windSpeed,
    };
  }

  async function getData(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=716282e50b3279ab43fcb00aa8720927`;
    try {
      const response = await fetch(endpoint, { mode: 'cors' });
      if (!response.ok) throw new Error(`City ${city} not found`);
      const data = convertData(await response.json());
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  return { getData };
})();

export default weather;
