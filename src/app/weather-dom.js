export const app = (country, name, temp, pressure, humidity) => {
    const temperat = document.querySelector('#temperat');

    temperat.classList.remove('d-none');

    temp -= 273,15; 
    let fahrenheit = temp * 9/5 + 32;
    
    temp = temp.toFixed(2);

    temperat.addEventListener('click', () => {
        if (temperat.textContent === "Deg Fahrenheit"){
            temperat.textContent = "Deg Celcius";
            changeDeg('°F', country, name, fahrenheit.toFixed(2), pressure, humidity);
        }else{
            temperat.textContent = "Deg Fahrenheit"; 
            changeDeg('°C', country, name, temp, pressure, humidity);
        }
    });
    changeDeg('°C', country, name, temp, pressure, humidity);
}

const changeDeg = (deg, country, name, temp, pressure, humidity) => {
    const result = document.querySelector('p');
    result.classList.remove('d-none');

    result.innerHTML = `<strong>Country-Code:</strong> ${country}<br/> 
                        <strong>City:</strong> ${name}<br/>
                        <strong>Temperature:</strong> ${temp} ${deg}<br/>
                        <strong>Pressure:</strong> ${pressure}<br/>
                        <strong>Humidity:</strong> ${humidity}`;
}