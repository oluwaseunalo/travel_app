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

// testing the post route
app.post('/test', (req, res) => {
  res.send({})
})

// setting up the post route, fetch and retain data at the post endpoint-url
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
  return error.message
}))

// fetching Weatherbit API
const weatherDataUrl = `http://api.weatherbit.io/v2.0/forecast/daily?lat=${geoData.lat}&lon=${geoData.long}&key=${weatherBitKey}`;

let weatherBitData = ''
await (fetch(weatherDataUrl)
.then(res => res.json())
.then(res => weatherBitData = { temp: res.data[0].temp, weather: res.data[0].weather.description, icon: res.data[0].weather.icon })
.catch(error => {
  console.log(error)
  return error.message
}))

// Fetching Pixabay API
const pixabayUrl = `https://pixabay.com/api/?key=${pixabayKey}&q=${geoData.city}&image_type=photo&safesearch=true`;
let pixData = '';
await (fetch(pixabayUrl)
.then(res => res.json())
.then(data => pixData = {image: data.hits[0].webformatURL})
.catch(error => {
  console.log(error)
  return error.message
}))

allData = {temp: weatherBitData.temp, weather: weatherBitData.weather, icon: weatherBitData.icon , city: geoData.city, country: geoData.country, image: pixData.image}
res.send(allData);
})


module.exports = app

