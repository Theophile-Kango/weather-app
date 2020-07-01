import './style.scss';
import { weather } from './app/weather'
import { render } from './app/weather-dom'

const start = () => {
  //console.log(weather(render()));
  render();
}

start();
