const changeBg = (temp) => {
  const result = document.querySelector('.weather');
  const bg = ['one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

  for (let i = 0; i < bg.length; i += 1) {
    if (temp <= i * 10) {
      result.classList.add(bg[i]);
      break;
    }
  }
};

const changeIconDeg = (deg, country, name, temp, pressure, humidity, icon) => {
  const weather = document.querySelector('.weather');
  const result = weather.querySelector('p');
  const img = document.querySelector('#icon');
  const warning = document.querySelector('#warning');

  img.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);

  weather.classList.remove('d-none');
  warning.classList.add('d-none');

  result.innerHTML = `<strong>Country-Code:</strong> ${country}<br/> 
                          <strong>City:</strong> ${name}<br/>
                          <strong>Temperature:</strong> ${temp} ${deg}<br/>
                          <strong>Pressure:</strong> ${pressure} hPa<br/>
                          <strong>Humidity:</strong> ${humidity} %<br/>
                          `;
};

const app = (country, name, temp, pressure, humidity, icon) => {
  const temperat = document.querySelector('#temperat');

  temperat.classList.remove('d-none');

  const celcius = Number(temp - 273, 15);
  temp = celcius.toFixed(2);

  const fahrenheit = temp * (9 / 5) + 32;

  if (temperat.textContent === 'Deg Fahrenheit') {
    changeIconDeg('°C', country, name, temp, pressure, humidity, icon);
  } else {
    changeIconDeg('°F', country, name, fahrenheit.toFixed(2), pressure, humidity, icon);
  }

  changeBg(temp);
};

const errorMessage = (message) => {
  const warning = document.querySelector('#warning');
  const weather = document.querySelector('.weather');
  const temperat = document.querySelector('#temperat');
  weather.classList.add('d-none');
  temperat.classList.add('d-none');
  warning.classList.remove('d-none');
  warning.textContent = message;
};


export { app, errorMessage };