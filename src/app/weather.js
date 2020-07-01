export async function weather(location){
    const api = "http://api.openweathermap.org/data/2.5/weather?"
    const key = "bb1017f3eae9fbc5e7650c932427e606"
    const response = await fetch(`${api}q=${location}&APPID=${key}`, { mode: 'cors' });
    const data = await response.json();
    const { name, main: {temp, pressure, humidity}, sys: { country } } = data;
    return `country-code: ${country} name: ${name} temperature: ${temp} pressure: ${pressure} humidity: ${humidity}`;
}

