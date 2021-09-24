const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const fetch = require('node-fetch');

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());


const cors = require('cors');
app.use(cors());


app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8091, function () {
    console.log('app listening on port 8091!')
})

app.get('/test', function (req, res) {
    res.send('test passed!!');
})


app.post('/input', async (req, res) => {
  let allData = '';
  const geoUsername = process.env.GEONAMES_USERNAME;
  const pixabayKey = process.env.PIXABAY_KEY;
  const weatherBitKey = process.env.WEATHERBIT_KEY;
  const geonameUrl = `http://api.geonames.org/search?q=${req.body.city}&type=json&username=${geoUsername}`;
// fetching Geonames data
let geoData = '';
await (fetch(encodeURI(geonameUrl))
.then(res => res.json())
.then(data => geoData = {lat: data.geonames[0].lat, country: data.geonames[0].countryName, city:data.geonames[0].toponymName, long:data.geonames[0].lng})
.catch(error => {
  console.log(error)
}))

// fetching Weatherbit API
const weatherDataUrl = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${geoData.lat}&lon=${geoData.long}&key=${weatherBitKey}`;

let weatherBitData = ''
await (fetch(weatherDataUrl)
.then(res => res.json())
.then(res => weatherBitData = { temp: data[0].temp, weather: data[0].weather.description, icon: data[0].weather.icon })
.catch(error => {
  console.log(error)
}))

// Fetching Pixabay API
const pixabayUrl = `https://pixabay.com/api/?key=${pixabayKey}&q=${geoData.city}&image_type=photo&safesearch=true`;
let pixData = '';
await (fetch(pixabayUrl)
.then(res => res.json())
.then(data => pixData = {image: data.hits[0].webformatURL })
.catch(error => {
  console.log(error)
}))

allData = {temp: weatherBitData.temp, weather: weatherBitData.des, icon: weatherBitData.icon , city: geoData.city, country: geoData.country, image: pixData.image}
res.send(allData);
})


app.post('/rapid', async (req, res) => {
  rapidhotelData = '';
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

  const locationUrl = `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${req.body.cityHotel}&locale=en-gb`
  const locationHost = "booking-com.p.rapidapi.com"

  //fetching hotel location data

  await fetch(locationUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": locationHost,
		"x-rapidapi-key": RAPIDAPI_KEY
	}
})
.then(res => res.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// fetching the hotel search data
  const searchUrl = `https://booking-com.p.rapidapi.com/v1/hotels/search?locale=en-gb&checkin_date=${req.body.checkinDate}&checkout_date=${req.body.checkoutDate}&filter_by_currency=USD&room_number=${req.body.roomNo}&order_by=popularity&adults_number=${req.body.adultNo}&units=metric&children_number=${req.body.childrenNo}&categories_filter_ids=facility%3A%3A107%2Cfree_cancellation%3A%3A1&page_number=0&children_ages=5%2C0`
  destIdCity = `&dest_id=${data[0].dest_id}&dest_type=${data[0].dest_type}`
  const searchHost = "booking-com.p.rapidapi.com"  
  
  await fetch(searchUrl+destIdCity, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": searchHost,
		"x-rapidapi-key": RAPIDAPI_KEY
	}
})
.then(res => res.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

})
  


module.exports = app;

