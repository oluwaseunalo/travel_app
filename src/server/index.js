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
    res.json('test passed!!');
})

/* const geoUsername = process.env.GEONAMES_USERNAME;
const geoUrl = `http://api.geonames.org/search?q=berlin&type=json&username=${geoUsername}`;


    const getData = async () => {
        const response = await fetch(geoUrl);
        try {
            const data = await response.json();
            console.log(data);
            return data;
        }
        catch(error) {
            console.log('error', error);
        }
    }

    getData();
*/
  
app.post('/input', async (req, res) => {

  let postData = '';
  const geoUsername = process.env.GEONAMES_USERNAME;
  const pixabayKey = process.env.PIXABAY_KEY;
  const weatherBitKey = process.env.WEATHERBIT_KEY;
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
  const bookingUrl = "https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?latitude=65.9667&filter_by_currency=AED&locale=en-gb&units=metric&longitude=-18.5333&order_by=popularity&room_number=1&adults_number=2&checkin_date=2021-11-25&checkout_date=2021-11-26&children_number=2&children_ages=5%2C0&page_number=0&categories_filter_ids=facility%3A%3A107%2Cfree_cancellation%3A%3A1"
  const bookingHost = "booking-com.p.rapidapi.com"
  const hotelPhotoUrl = "https://booking-com.p.rapidapi.com/v1/hotels/photos?hotel_id=1377073&locale=en-gb"
  const hotelPhotoHost = "booking-com.p.rapidapi.com"
  const tripAdvisorUrl = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km"
  const tripAdvisorHost = "travel-advisor.p.rapidapi.com"
  

  const fetchData = async () => {
    const geoData = await getData(`http://api.geonames.org/search?q=berlin&type=json&username=${geoUsername}`);
    console.log(geoData);

    const weatherData = await getData(`http://api.weatherbit.io/v2.0/forecast/daily?lat={lat}&lon={lon}&key=${weatherBitKey}`);
    console.log(weatherData);

    const pixabayData = await getData(`https://pixabay.com/api/?key=${pixabayKey}&q=berlin&image_type=photo&safesearch=true`);
    console.log(pixabayData);

    // fetch the hotel data
    const searchHotel = await rapidData(bookingUrl, bookingHost);
    console.log(searchHotel);

    const hotelPhoto = await rapidData(hotelPhotoUrl, hotelPhotoHost);
    console.log(hotelPhoto);

    // fetch trip advisor data
    const tripAdvisor = await rapidData(tripAdvisorUrl, tripAdvisorHost);
    console.log(tripAdvisor);


    postData = {};
    res.send(postData);
  }
  fetchData();

// setting up getData call back function
    const getData = async (url = '') => {
        const response = await fetch(url);
        try {
            const data = await response.json();
            console.log(data);
            return data;
        }
        catch(error) {
            console.log('error', error);
        }
    }

  // setting up rapidData call back function
  const rapidData = async (url, host) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': host,
      }
    });
    try {
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.log('error', error);
    }
}


});



