const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.78&lon=-90.32&appid=708710d42c81822883148ad8ec2fd92e';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) 
        {
        const weatherData = await response.json();
        console.log(data); 
      } 
      else 
      {
          throw Error(await response.text());
      }
    } catch (error) 
    {
        console.log(error);
    }
    displayResults(weatherData);
  }

  apiFetch();

  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
  }

  
