import './style.scss';
import weather from './app/weather';

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
    weather(location);
    if (temperat.textContent === 'Deg Fahrenheit') {
      temperat.textContent = 'Deg Celcius';
    } else {
      temperat.textContent = 'Deg Fahrenheit';
    }
  });
};

start();
