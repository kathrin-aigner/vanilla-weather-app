function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "1516ff45c0055b56ce372bbf8f475ed9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=metrics`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
