export async function weather(location){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=bb1017f3eae9fbc5e7650c932427e606`, { mode: 'cors' });
    const data = await response.json();
    return data;
}