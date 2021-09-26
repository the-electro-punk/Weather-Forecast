// API key https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// var lat = 36.1627
// var lon = 86.7816

// APIkey = 004b2d41992a3c0f4120565536b7c749

// let results = cities.options[cities.selectedIndex].value
// console.log(results)

// var forecast = "https://api.openweathermap.org/data/2.5/onecall?lat="${lat}"&lon="${lon}"&appid="${APIkey}

// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + {lat} + "&lon=" + {lon} + "&exclude=" + {part} + "&appid=" + {APIkey}

// )

var APIkey = '0785e2597394b5d41a6d4cfe9160b61e'
const searchBTN = document.getElementById('searchBTN')
var cityData = document.getElementById('cityData')
var cityList = document.getElementById("citySearch")

var cityStorage = window.localStorage

searchBTN.addEventListener('click', searchCity)

// this function takes the name of the city entered to gather the weather data
function searchCity () {
    var cityName = document.getElementById("searchBar").value
    if (cityName === null) {
        window.alert("type in a city")
    }
    console.log(cityName)

    // this stores the city names that have previously been searched within local storage
    var new_city_data = document.getElementById("searchBar").value
    if(cityStorage.getItem('data')===null){
        cityStorage.setItem('data', '[]')
    }
    old_city_data = JSON.parse(cityStorage.getItem('data'))
    old_city_data.push(new_city_data)

    cityStorage.setItem('data', JSON.stringify(old_city_data))

    // this API key obtains the latitude and longitude of the city so to gather the weather forecast
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},&appid=${APIkey}`
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {        
        var latitude = response[0].lat
        var longitude = response[0].lon
        console.log("latitude is " + latitude)
        console.log("longitude is " + longitude)

        // this adds the city's data to the main page
        cityData.textContent = cityName.concat(" latitude: " + latitude).concat(" longitude: " + longitude)

        // this adds the city name to list of searched cities
        // cityList.appendChild(cityName)
        
        
        // this uses the latitude and longitude to gather the weather data of the particular city
        // for some reason, I keep getting bad requests from this API key and suspect it may not be functional
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude},&lon=${longitude},&appid=${APIkey}`
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response + " is go")
        })
    })
}

// this was an attempt to get the weather forcast data from just the Lat & Lon API key but still failed
// function searchCity() {
    // let cities = document.getElementById("citiesChoice").value
    // console.log(cities)
    // if (cities === "Nashville") {
    //     var lat = 36.1659
    //     var lon = -86.7844
    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat},&lon=${lon},&appid=${APIkey}`
    //     )
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(response) {
    //         console.log(response + " is go")
    //     })
    // } 


// fetch(
//   'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN' + serchterm + '&rating=' + rating + '&API_key=004b2d41992a3c0f4120565536b7c749'
//   )
//     // Converts the response to JSON
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(response) {
//       console.log(response)


// change to search??/build card in JS and append to container??

// get in process of APIkey being a var (later don't want API in code later on)

// object as database that stores any data (strings, numbers, arrays, etc.) (branches out)
// array is a linear line (0-infinite)


// https://www.youtube.com/watch?v=2hJ1rTANVnk&ab_channel=%7BRhymBil%7D