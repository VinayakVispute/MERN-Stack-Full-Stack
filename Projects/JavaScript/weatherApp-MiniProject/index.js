console.log("Hello Guys, It's Vinayak!");

const API_KEY = "c30dafcd337461868e68ebd745919280";

function renderWeatherInfo(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`;

  document.body.appendChild(newPara);
}

async function fetchWeatherDetails(city) {
  try {
    const apiResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const responseData = await apiResponse.json();
    renderWeatherInfo(responseData);
    console.log("Wheather Details => ", responseData);
  } catch (error) {
    console.log("Error in Fetching Wather Details...");
    console.log(error);
  }
}

async function getCustomWeatherDetails() {
  if (navigator.geolocation) {
    try {
      navigator.geolocation.getCurrentPosition(getLocation);
    } catch (error) {
      console.log(error);
    }
  }
}

async function getLocation(position) {
  try {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const responseData = await apiResponse.json();
    renderWeatherInfo(responseData);
    console.log("Wheather Details => ", responseData);
  } catch (error) {
    console.log(error);
  }
}

