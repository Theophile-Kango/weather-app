import './style.scss';
import { weather, currentWeather } from './app/weather';

const start = () => {
  const form = document.querySelector('#form');
  const input = document.querySelector('#location');
  const temperat = document.querySelector('#temperat');
  let location = '';

  form.onsubmit = () => {
    location = input.value;
    weather(location);
    form.reset();
  };
  temperat.addEventListener('click', () => {
    if (temperat.textContent === 'Deg Fahrenheit') {
      temperat.textContent = 'Deg Celcius';
      currentWeather();
    } else {
      temperat.textContent = 'Deg Fahrenheit';
      currentWeather();
    }
  });
};

start();
