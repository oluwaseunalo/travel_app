const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());


const cors = require('cors');
app.use(cors());


app.use(express.static('dist'))

console.log(__dirname)

const pixabayKey = process.env.PIXABAY_KEY;
const weatherBitKey = process.env.WEATHERBIT_KEY;



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/input', async (req, res) => {

  const geoUsername = process.env.GEONAMES_USERNAME;

  const fetchData = async () => {
    const geoData = await getData(`api.geonames.org/search?q=city&type=json&usename=${geoUsername}`);
    console.log(geoData);
  }
    

// setting up geoData call back function
    const getData = async (url = '') => {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        try {
            const data = await response.json;
            console.log(data);
            res.send(data);
        }
        catch(error) {
            console.log('error', error);
        }
    }
});





/* app.post('/makeCalls', async (req, res) => {
    let userInput = req.body
    let projectData = ''
    let geonameData = ''
    let weatherData = ''
    let pixabayData = ''
    // call geonames
    const username = process.env.GN_username;
    const geonameBaseURL = `http://api.geonames.org/search?q=${userInput.city}&maxRows=1&type=json&username=${username}`
  
    await (fetch(encodeURI(geonameBaseURL))
      // get lat long countryName 
      .then(res => res.json())
      .then(data => geonameData = { lng: data.geonames[0].lng, lat: data.geonames[0].lat, countryName: data.geonames[0].countryName, city: data.geonames[0].toponymName })
      .catch(err => {
        console.log(err)
        return err.message
      }))
  
    // WEATHERBIT API
    const key = process.env.weather_KEY
    const weatherbitBaseURL = 'http://api.weatherbit.io/v2.0/current?'
  
    const url = `${weatherbitBaseURL}lat=${geonameData.lat}&lon=${geonameData.lng}&key=${key}&units=I`
    // Call API
    await (fetch(url)
      // get temperature and weather description
      .then(res => res.json())
      .then(res => weatherData = { temp: res.data[0].temp, weather: res.data[0].weather.description, icon: res.data[0].weather.icon })
      .catch(err => {
        console.log(err)
        return err.message
      }))
    // PIXABAY API
    const pixabayKey = process.env.pixabay_KEY
    const pixabayURL = `https://pixabay.com/api/?key=${pixabayKey}&q=${geonameData.city}&category=places&image_type=photo&orientation=horizontal&safesearch=true`
    // Call API
  
    await (fetch(pixabayURL)
      .then(res =>
        res.json()
      )
      .then(data => {
        pixabayData = { img: data.hits[0].webformatURL }
      })
      .catch(err => {
        console.log(err)
        return err.message
      })
    )
  
    projectData = { temp: weatherData.temp, weather: weatherData.weather, icon: weatherData.icon, cityName: geonameData.city, countryName: geonameData.countryName, date: userInput.date, img: pixabayData.img }
    res.send(projectData)
  
  })
  
  module.exports = app


 */
