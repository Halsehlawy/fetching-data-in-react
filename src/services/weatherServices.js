const API_KEY = '968a3d9c0a504867b5e103041253007';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

// src/services/weatherService.js

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log('Data:', data);
    return data;
  } catch (err) {
    console.log('Error:', err);
  }
};

export{
    show
};