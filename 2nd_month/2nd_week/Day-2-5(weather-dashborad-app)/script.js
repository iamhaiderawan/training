const API_KEY = "6591ab8f4266425977a3987736cf0abb";

const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const weatherCard = document.getElementById("weather-card");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");

const cityNameEl = document.getElementById("city-name");
const dateEl = document.getElementById("date");
const iconEl = document.getElementById("weather-icon");
const tempEl = document.getElementById("temperature");
const unitEl = document.getElementById("temp-unit");
const descEl = document.getElementById("description");
const feelsEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");

const cBtn = document.getElementById("c-btn");
const fBtn = document.getElementById("f-btn");

// Variables
let currentTempC = 0;
let isCelsius = true;

// Update date
function updateDate() {
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // Local time
  const localTimeEl = document.getElementById("local-time");
  localTimeEl.textContent = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

// Show/Hide functions
function showLoading() {
  loading.classList.remove("hidden");
}
function hideLoading() {
  loading.classList.add("hidden");
}
function showError(msg) {
  errorDiv.textContent = msg;
  errorDiv.classList.remove("hidden");
  setTimeout(() => errorDiv.classList.add("hidden"), 4000);
}
function showCard() {
  weatherCard.classList.remove("hidden");
}

// Main fetch function
async function getWeather(cityOrLatLon) {
  showLoading();
  errorDiv.classList.add("hidden");
  weatherCard.classList.add("hidden");

  let url;
  if (typeof cityOrLatLon === "string") {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityOrLatLon}&units=metric&appid=${API_KEY}`;
  } else {
    const { lat, lon } = cityOrLatLon;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  }

  try {
    const res = await fetch(url);
    if (!res.ok)
      throw new Error(
        res.status === 404 ? "City not found!" : "Something went wrong",
      );

    const data = await res.json();

    // Update DOM
    cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
    currentTempC = Math.round(data.main.temp);
    updateTemperature();

    descEl.textContent = data.weather[0].description;
    iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    feelsEl.textContent = Math.round(data.main.feels_like);
    humidityEl.textContent = data.main.humidity;
    windEl.textContent = data.wind.speed;

    // Dynamic background
    const mainWeather = data.weather[0].main.toLowerCase();
    document.body.className = mainWeather.includes("clear")
      ? "clear"
      : mainWeather.includes("cloud")
        ? "clouds"
        : mainWeather.includes("rain") || mainWeather.includes("drizzle")
          ? "rain"
          : mainWeather.includes("thunder")
            ? "thunderstorm"
            : mainWeather.includes("snow")
              ? "snow"
              : "default";

    showCard();
    updateDate();

    // Save last city
    localStorage.setItem("lastCity", data.name);
    hideLoading();
  } catch (err) {
    showError(err.message);
  } finally {
    hideLoading();
  }
}

// Temperature display with count-up
function updateTemperature() {
  const target = isCelsius
    ? currentTempC
    : Math.round((currentTempC * 9) / 5 + 32);
  tempEl.textContent = target;
  unitEl.textContent = isCelsius ? "°C" : "°F";
}

// Unit toggle
cBtn.addEventListener("click", () => {
  if (!isCelsius) {
    isCelsius = true;
    cBtn.classList.add("active");
    fBtn.classList.remove("active");
    updateTemperature();
  }
});
fBtn.addEventListener("click", () => {
  if (isCelsius) {
    isCelsius = false;
    fBtn.classList.add("active");
    cBtn.classList.remove("active");
    updateTemperature();
  }
});

// Search form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) getWeather(city);
  cityInput.value = "";
});

// Geolocation
document.getElementById("geo-btn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        getWeather({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => showError("Location access denied or not available"),
    );
  } else {
    showError("Geolocation not supported in your browser");
  }
});

// Load last city on start
window.onload = () => {
  updateDate();
  const lastCity = localStorage.getItem("lastCity") || "Rawalpindi";
  cityInput.value = lastCity;
  getWeather(lastCity);
};
