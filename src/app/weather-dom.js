export const app = (country, name, temp, pressure, humidity, icon) => {
    const temperat = document.querySelector('#temperat');

    temperat.classList.remove('d-none');

    temp -= 273,15; 
    let fahrenheit = temp * 9/5 + 32;
    
    temp = temp.toFixed(2);

    temperat.addEventListener('click', () => {
        if (temperat.textContent === "Deg Fahrenheit"){
            temperat.textContent = "Deg Celcius";
            changeIconDeg('°F', country, name, fahrenheit.toFixed(2), pressure, humidity, icon);
        }else{
            temperat.textContent = "Deg Fahrenheit"; 
            changeIconDeg('°C', country, name, temp, pressure, humidity, icon);
        }
    });
    changeIconDeg('°C', country, name, temp, pressure, humidity, icon);
    changeBg(temp);
    
}

const changeBg = (temp) => {
    const result = document.querySelector('.weather');
    const bg = ['one', 'two', 'three', 'four', 'five', 'six', 
                'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
                
    for(let i = 0; i < bg.length; i += 1) {
        if(temp <= i * 10){
            result.classList.add(bg[i]);
            break;
        }
    };
}

const changeIconDeg = (deg, country, name, temp, pressure, humidity, icon) => {
    const weather = document.querySelector('.weather');
    const result = weather.querySelector('p');
    const img = document.querySelector('#icon');
    img.setAttribute('src',`http://openweathermap.org/img/wn/${icon}@2x.png`);

    weather.classList.remove('d-none');
    
    result.innerHTML = `<strong>Country-Code:</strong> ${country}<br/> 
                        <strong>City:</strong> ${name}<br/>
                        <strong>Temperature:</strong> ${temp} ${deg}<br/>
                        <strong>Pressure:</strong> ${pressure} hPa<br/>
                        <strong>Humidity:</strong> ${humidity} %<br/>
                        `;
}
