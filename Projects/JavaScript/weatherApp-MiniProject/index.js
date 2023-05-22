// Fetching Elements
const userTab = document.querySelector("[data-UserWeatherTab]");
const SearchTab = document.querySelector("[data-SearchWeatherTab]");
const userContainer = document.querySelector(".main-container");
const grantUserLocation = document.querySelector(".grant-location-container");
const searchBarContainer = document.querySelector("[location-searchForm]");
const loadingScreen = document.querySelector(".loading-screen-container");
const weatherInfoContainer = document.querySelector(".weather-info-container");
const grantBtn = document.querySelector("[data-grantAccess]");
const weatherIcon = document.querySelector(".weatherIcon")

// keep this in situatable place
const searchBar = document.querySelector("[location-searchInput]");

// Variables
const API_KEY = "c30dafcd337461868e68ebd745919280";

// handling current tab
let currentTab = userTab;
currentTab.classList.add("currentTab");

getfromSessionStorage();

// tab Switching concept
function switchTab(clickedTab) {
  if (clickedTab != currentTab) {
    currentTab.classList.remove("currentTab");
    currentTab = clickedTab;
    currentTab.classList.add("currentTab");

    if (!searchBarContainer.classList.contains("active")) {
      grantUserLocation.classList.remove("active");
      weatherInfoContainer.classList.remove("active");
      searchBarContainer.classList.add("active");
    } else {
      searchBarContainer.classList.remove("active");
      weatherInfoContainer.classList.remove("active");
      getfromSessionStorage();
    }
  }
}

async function getfromSessionStorage() {
  if (navigator.geolocation) {
    try {
      console.log("in try");
      const localCorrdinates = sessionStorage.getItem("userCoordinates");
      if (!localCorrdinates) {
        grantUserLocation.classList.add("active");
      } else {
        console.log("location is avaliable");
        getUserLocation();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
grantBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(getLocation);
});
async function getLocation(position) {
  try {
    console.log("in getlocation");

    let { latitude, longitude } = position.coords;
    let userCoordinates = { latitude, longitude };
    sessionStorage.setItem("userCoordinates", JSON.stringify(userCoordinates));
    getUserLocation();
  } catch (error) {
    console.log(error);
  }
}

async function getUserLocation() {
  let storedCoordinates = JSON.parse(sessionStorage.getItem("userCoordinates"));
  console.log(storedCoordinates.latitude, storedCoordinates.longitude);
  grantUserLocation.classList.remove("active");
  loadingScreen.classList.add("active");
  try {
    const apiResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${storedCoordinates.latitude}&lon=${storedCoordinates.longitude}&appid=${API_KEY}&units=metric`
    );
    console.log("in api fetched");
    const responseData = await apiResponse.json();
    loadingScreen.classList.remove("active");
    console.log("going to render");
    renderWeatherInfo(responseData);
  } catch (error) {
    loadingScreen.classList.add("active");
  }
}

function renderWeatherInfo(data) {
  weatherInfoContainer.classList.add("active");
  const cityName = document.querySelector(".cityName");
  const cityFlag = document.querySelector(".cityFlag");
  const temperature = document.querySelector(".temperature");
  const speedParameter = document.querySelector(".parameter-SpeedValue");
  const humidityParameter = document.querySelector(".parameter-HumidityValue");
  const cloudParameter = document.querySelector(".parameter-CloudsValue");
  const description = document.querySelector(".weatherDescription");

  weatherInfoContainer.classList.add("active");
  cityName.innerText = data.name;
  cityFlag.src = `https://flagcdn.com/144x108/${data.sys.country.toLowerCase()}.png`;
  description.innerText = data.weather[0].description;
  weatherIcon.src=`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
  console.log(data.weather);
  temperature.innerText = `${data.main.temp } °C`;
  speedParameter.innerText = `${data.wind.speed} M/s`;
  humidityParameter.innerText = `${data.main.humidity} %`;
  cloudParameter.innerText = `${data.clouds.all} %` ;
}

userTab.addEventListener("click", () => {
  // pass current tab to to function
  console.log("clicked User");
  switchTab(userTab);
});

SearchTab.addEventListener("click", () => {
  // pass current tab to to function
  console.log("clicked User");

  switchTab(SearchTab);
});

async function fetchWeatherDetails(city) {

  loadingScreen.classList.add("active");
  weatherInfoContainer.classList.remove("active");
  grantUserLocation.classList.remove("active");
  try {
    const apiResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const responseData = await apiResponse.json();
    loadingScreen.classList.remove("active");
    renderWeatherInfo(responseData);
    console.log("Wheather Details => ", responseData);
  } catch (error) {
    console.log("Error in Fetching Wather Details...");
    console.log(error);
  }
}

searchBarContainer.addEventListener("submit", async (event) => {
  console.clear();
  event.preventDefault();
  console.log("prevented default");
  try {
    let city = searchBar.value;
    console.log("Value", city);
    const apiResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const responseData = await apiResponse.json();
    console.log("response", responseData);

    renderWeatherInfo(responseData);
  } catch (error) {
    console.log(error);
  }
});
