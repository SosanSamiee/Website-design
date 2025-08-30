
let $ = document;

const backgrounds = [
    "images/p1.jpg",
    "images/p2.jpg",
    "images/p3.jpg",
    "images/p4.jpg",
];

const idx = Math.floor(Math.random() * backgrounds.length);

$.addEventListener("DOMContentLoaded", () => {
    $.body.style.backgroundImage = `url('${backgrounds[idx]}')`;
});


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

const API_KEY = "8a3f9e7915d95945c8bd971c5e11ac8d";
let searchBtn = $.getElementById('search');
let searchinput = $.getElementById('seachinput');

searchBtn.addEventListener('click', function() {
    let cityName = searchinput.value.trim();
    if (cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.cod === 200) {
                    $.querySelector('.city').innerHTML = "Weather in " + data.name;
                    $.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "&deg;C";
                    $.querySelector('.description').innerHTML = data.weather[0].description;
                    $.querySelector('.humidity').innerHTML = "Humidity: " + data.main.humidity + "%";
                    $.querySelector('.wind').innerHTML = "Wind speed: " + data.wind.speed + " km/h";
                } else {
                    $.querySelector('.city').innerHTML = "City not found!";
                }
            })
            .catch(err => {
                console.error("Error receiving data:", err);
            });
    }
});
// 


// let citiesdata = {
//     thran: {city: 'Thran', temp:12, weather: 'Sunny', humidity:23, windspeed: 32},
//     shiraz: {city: 'Shiraz', temp:8, weather: 'windy', humidity:12, windspeed: 54},
//     tabriz: {city: 'Tabriz', temp:9, weather: 'rainy', humidity:43, windspeed: 43},
//     mashhad: {city: 'Mashhad', temp:23, weather: 'snowy', humidity:7, windspeed: 22},
//     esfahan: {city: 'Esfahan', temp:11, weather: 'Sunny', humidity:15, windspeed: 12},
// }

// let $ = document
// let searchBtn = $.getElementById('search')
// let searchinput = $.getElementById('seachinput')

// searchBtn.addEventListener('click', function(){
//     //  console.log(searchinput.value)
//     let seachbarinput = searchinput.value
//    let maincity = citiesdata[seachbarinput]

//    if(maincity){
//         $.querySelector('.city').innerHTML = "Waather in " + maincity.city
//         $.querySelector('.temp').innerHTML = maincity.temp + "&deg;C"
//         $.querySelector('.description').innerHTML = maincity.weather
//         $.querySelector('.humidity').innerHTML = "Humidity: " + maincity.humidity
//         $.querySelector('.wind').innerHTML = "Wind speed: " + maincity.windspeed + " km/h"
    
//    }
//    else{

//    }
// })


// // .description , .humidity , .wind{