// API key https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// var lat = 36.1627
// var lon = 86.7816

// APIkey = 004b2d41992a3c0f4120565536b7c749
// let cities = document.getElementById("citiesChoice")
// let results = cities.options[cities.selectedIndex].value
// console.log(results)

// var forecast = "https://api.openweathermap.org/data/2.5/onecall?lat="${lat}"&lon="${lon}"&appid="${APIkey}

// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + {lat} + "&lon=" + {lon} + "&exclude=" + {part} + "&appid=" + {APIkey}

// )

var APIkey = '0785e2597394b5d41a6d4cfe9160b61e'
const searchBTN = document.getElementById('searchBTN')
let cityData = document.getElementById('cityData')

searchBTN.addEventListener('click', searchCity)

// this function takes the name of the city entered to gather the weather data
function searchCity () {
    var cityName = document.getElementById("searchBar").value
    if (cityName === null) {
        window.alert("type in a city")
    }
    console.log(cityName)
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
        console.log(response)
        // this uses the latitude and longitude to gather the weather data of the particular city
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