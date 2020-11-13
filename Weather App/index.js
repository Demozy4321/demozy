// 1st step to get longitute n latitude

// window.addEventListener('load',function(){
//   let long;
//   let lat;
//
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(position => {
//       long = position.coords.longitude;
//       lat = position.coords.latitude;
//       alert(long + " " + lat);
//       const api =`api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&appid={859a4de9a0396d73b5faffb424b17ec3
// }`;
// fetch(api)
//   .then(response =>{
//     return response.json();
//   })
//   .then(data =>{
//     console.log(data);
//   })
//     })
//   }else{
//     alert("It's not Working..!")
//   }
//
// });

const api = {
  key: "859a4de9a0396d73b5faffb424b17ec3",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);

function setQuery(evt){
  // 13 is the ENTER key code
  if(evt.keyCode == 13) {
    getResults(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}

function dateBuilder(d){
  let months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

  let days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}