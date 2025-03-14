const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    document.getElementById("error-message").textContent =
      "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        document.getElementById("error-message").textContent = ""; // Clear any previous errors
        document.getElementById(
          "city-name"
        ).textContent = `Weather in ${data.name}, ${data.sys.country}`;
        document.getElementById(
          "temperature"
        ).textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById(
          "humidity"
        ).textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById(
          "weather-condition"
        ).textContent = `Condition: ${data.weather[0].description}`;
      } else {
        document.getElementById("error-message").textContent =
          "City not found. Please try again.";
        document.getElementById("city-name").textContent = "";
        document.getElementById("temperature").textContent = "";
        document.getElementById("humidity").textContent = "";
        document.getElementById("weather-condition").textContent = "";
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      document.getElementById("error-message").textContent =
        "There was an error fetching the data. Please try again.";
    });
}
