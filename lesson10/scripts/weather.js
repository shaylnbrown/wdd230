const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=708710d42c81822883148ad8ec2fd92e';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&units=imperial&lon=6.63&appid=708710d42c81822883148ad8ec2fd92e';
let data = "";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) 
        {  
              
        data = await response.json();        
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
    
    displayResults(data);
    
  }

  apiFetch();

  function displayResults(weatherInfo) {    
    currentTemp.innerHTML = `${weatherInfo.main.temp} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
    let desc = weatherInfo.weather[0].description;
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
  }

  
