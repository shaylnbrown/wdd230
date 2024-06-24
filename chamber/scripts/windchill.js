const temp = 26;
const windSpeed = 34;
const windChill=35.74 + (.6215 * temp) - (35.75 * Math.pow(windSpeed,.16)) + (.4275 * temp * Math.pow(windSpeed,.16));
document.getElementById("weatherInfo").innerText = "Florissant Weather\nTemperature: " + temp + " °F\nWind Speed: " + windSpeed 
+ " MPH\nWind Chill: " + Math.round(windChill) + " °F";