
async function weather(){
let city=document.getElementById("cityName").value
 let response=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b69234595241bcea69f58c5c2a6bbffc")
let details=await response.json();
console.log(details)
document.querySelector("h1").innerHTML= "Temperature in "+details.name;
document.querySelector(".temperature").innerHTML=(details.main.temp-273.15).toFixed(2)+" °C";
document.querySelector(".mintemp").innerHTML= (details.main.temp_min-273.15).toFixed(2)+" °C";
document.querySelector(".maxtemp").innerHTML= (details.main.temp_max-273.15).toFixed(2)+" °C";
document.querySelector(".pressure").innerHTML= details.main.pressure+" PSI";
document.querySelector(".humidity").innerHTML= details.main.humidity+" %";
document.querySelector(".wind").innerHTML= details.wind.speed+" -KM/H";
}

