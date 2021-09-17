// API key https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
var lat = 36.1627
var lon = 86.7816
var APIkey = 

// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + {lat} + "&lon=" + {lon} + "&exclude=" + {part} + "&appid=" + {APIkey}

// )
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=36.162&lon=86.7816&exclude=minutely&appid=jfmndjdskjdj"

)

.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log("Nashville response is " + response)
})

// fetch(
//   'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN' + serchterm + '&rating=' + rating + '&API_key=jfmndjdskjdj'
//   )
//     // Converts the response to JSON
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(response) {
//       console.log(response)