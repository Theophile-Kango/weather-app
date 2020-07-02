import './style.scss';
import { weather } from './app/weather'

const start = () => {
  const form = document.querySelector('#form');
    const location = document.querySelector('#location');
    
    form.onsubmit = function(){ 
      weather(location.value);
      form.reset();
    };

}

start();
