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
  
  const fetchData = async () => {
    const geoData = await getData(`http://api.geonames.org/search?q=${req.body.city}&type=json&username=${geoUsername}`);
    console.log(geoData);

    const weatherData = await getData(`http://api.weatherbit.io/v2.0/forecast/daily?lat=${data[0].lat}&lon=${data[0].lon}&key=${weatherBitKey}`);
    console.log(weatherData);

    const pixabayData = await getData(`https://pixabay.com/api/?key=${pixabayKey}&q=${data[0].toponymName}&image_type=photo&safesearch=true`);
    console.log(pixabayData);

  }
  fetchData();
  postData = {temp:data[0].temp, weather:data[0].weather, city:data[0].toponymName, img:data[0].hits.webFormatURL};
  res.send(postData);

}


);


app.post('/rapid', async (req, res) => {
  rapidhotelData = '';
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
  const locationUrl = `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${req.body.cityHotel}&locale=en-gb`
  const locationHost = "booking-com.p.rapidapi.com"
  const searchUrl = `https://booking-com.p.rapidapi.com/v1/hotels/search?locale=en-gb&checkin_date=${req.body.checkinDate}&checkout_date=${req.body.checkoutDate}&filter_by_currency=USD&room_number=${req.body.roomNo}&order_by=popularity&adults_number=${req.body.adultNo}&units=metric&children_number=${req.body.childrenNo}&categories_filter_ids=facility%3A%3A107%2Cfree_cancellation%3A%3A1&page_number=0&children_ages=5%2C0`
  destIdCity = `&dest_id=${data[0].dest_id}&dest_type=${data[0].dest_type}`
  const searchHost = "booking-com.p.rapidapi.com"
  
  /*
  const tripAdvisorUrl = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${data[0].toponymName}&lang=en_US&units=km"
  const tripAdvisorHost = "travel-advisor.p.rapidapi.com"
  */
  const getRapidData = async () =>{
     // fetch the hotel data
   const hotelLocation = await rapidData(locationUrl, locationHost);
   console.log(hotelLocation);

   const searchHotel = await rapidData(searchUrl+destIdCity, searchHost);
   console.log(searchHotel);

   /* fetch trip advisor data
   const tripAdvisor = await rapidData(tripAdvisorUrl, tripAdvisorHost);
   console.log(tripAdvisor); */
  }

  getRapidData();
  rapidhotelData = {}
  res.send(rapidhotelData);

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

}});
