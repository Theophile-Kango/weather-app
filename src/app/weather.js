import { app, errorMessage } from './weather-dom';

async function weather(location) {
  try {
    const api = 'https://api.openweathermap.org/data/2.5/weather?';
    const key = 'bb1017f3eae9fbc5e7650c932427e606';
    const response = await fetch(`${api}q=${location}&APPID=${key}`, { mode: 'cors' });
    const data = await response.json();
    const {
      name, main: { temp, pressure, humidity }, sys: { country }, weather: [{ icon }],
    } = data;

    app(country, name, temp, pressure, humidity, icon);
  } catch (err) {
    errorMessage('Give a valid location');
  }
}

export default weather;
