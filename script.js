const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKey = "0bd93777b73a9d55a014861565a6a41e";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          setFavicon("images/clear.png");
          updateTitle(city); // Mettez à jour la favicon
          break;

        case "Rain":
          image.src = "images/rain.png";
          setFavicon = "images/rain.png";
          updateTitle(city);
          break;

        case "Snow":
          image.src = "images/snow.png";
          setFavicon("images/snow.png");
          updateTitle(city);
          break;

        case "Clouds":
          image.src = "images/cloud.png";
          setFavicon("images/cloud.png");
          updateTitle(city);
          break;

        case "Haze":
          image.src = "images/mist.png";
          setFavicon("images/mist.png");
          updateTitle(city);
          break;

        default:
          image.src = "";
          updateTitle(city);
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "590px";
    });

  localStorage.setItem("lastCity", city);
});
const lastCity = localStorage.getItem("lastCity");
if (lastCity) {
  document.querySelector(".search-box input").value = lastCity;

  updateTitle(lastCity);
}
function setFavicon(iconPath) {
  const favicon = document.querySelector("#favicon");
  favicon.href = iconPath;
}
function updateTitle(city) {
  city = city.toUpperCase();
  document.title = `${city}`;
}
