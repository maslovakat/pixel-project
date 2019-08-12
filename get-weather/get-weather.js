var unirest = require("unirest");

const req = unirest("GET", "https://national-weather-service.p.rapidapi.com/products/types/%7BtypeId%7D");
const city = document.querySelector('input[name=set-city]');
const getTemp = document.querySelector('input[name=get-temperature]');
getTemp.addEventListener('click', getTemperature);

function getTemperature(){
    
}

req.headers({
	"x-rapidapi-host": "national-weather-service.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY"
});
req.body{


}


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});