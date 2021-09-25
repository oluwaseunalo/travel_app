import moment from 'moment';
// import { postData } from './js/postdata.js';
// import { travelUpdate } from './js/travel_updateUI.js';


// Setting up the client to retrieve, post and dynamically update the data from the API
const discover = document.getElementById('discover');


discover.addEventListener ('click', confirmData);


function confirmData (e) {
    e.preventDefault();
    const today = moment();
const departure = document.querySelector('#departure').value;
const departureDate = moment(departure);
const difference = Math.ceil(departureDate.diff(today, "days", true));
console.log(difference);
    if(difference >= 1) {
       const tripDays = document.querySelector('.trip__days');
       tripDays.innerHTML = `Your trip is in ${difference} days time`;
       postData('http://localhost:8091/input')
       .then (travelUpdate())
       }
    }



const postData = async (url = '') => {
    const city = document.querySelector('#destination').value;
    const response = await fetch(url,{
        method: 'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({city}),
        });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch(error){
        console.log("error", error);
    }

}

const travelUpdate = async () => {
    const city = document.querySelector('#destination').value;
    const response = await fetch('http://localhost:8091/input', {
        method: 'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({city}),
        });
    try {
        const update = await response.json();
        document.getElementById('weather__icon').innerHTML = `<img src = "./images/${update.icon}.png" alt = "">`
        document.getElementById('temp').innerHTML = update.temp + ' ' + '°C';
        document.getElementById('weather_des').innerHTML = update.weather;
        document.getElementById('place').innerHTML = update.city; 
        document.getElementById('weather__country').innerHTML = update.country;
        document.getElementById('pixabay__image').innerHTML = `<img src = "${update.image}" alt = "">`;
    }
    catch(error){
        console.log("error", error);
    }
}

    export {confirmData};

// fetching rapid data and searching for hotel
const search = document.querySelector('#search');

    search.addEventListener ('click', searchData);

    function searchData (e) {
        e.preventDefault();
const cityHotel = document.getElementById('hotel__destination').value;
const checkinDate = document.getElementById('checkin__date').value;
const checkoutDate = document.getElementById('checkout__date').value;
const adultNo = document.getElementById('adults').value;
const childrenNo = document.getElementById('children').value;
const roomNo = document.getElementById('rooms').value;
        postRapidData('http://localhost:8091/rapid')
       .then (hotelUpdate())
       }
   

const postRapidData = async (url = '') => {
    let userData = {city: 'cityHotel', checkinDate: 'checkinDate', checkoutDate: 'checkoutDate', roomNo: 'roomNo', adultNo: 'adultNo', childrenNo: 'childrenNo'}
    const res = await fetch(url,{
        method: 'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({userData}),
            });
        try {
            const newUpdate = await res.json();
            console.log(newUpdate);
            return newUpdate;
            }
            catch(error){
                console.log("error", error);
            }
}

const hotelUpdate = async () => {
    let userData = {city: 'cityHotel', checkinDate: 'checkinDate', checkoutDate: 'checkoutDate', roomNo: 'roomNo', adultNo: 'adultNo', childrenNo: 'childrenNo'}
    const res = await fetch('http://localhost:8091/rapid', {
        method: 'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userData}),
        });
    try {
        const getUpdate = await res.json();
        document.getElementById('hotel__name').innerHTML = getUpdate.name;
        document.getElementById('hotel__id').innerHTML = getUpdate.sort;
       // document.getElementById('hotel__cancel').innerHTML = retrieve.cancel; 
      // document.getElementById('hotel__price').innerHTML = retrieve.price;

      //  document.getElementById('place').innerHTML = update.city;
    }
    catch(error){
        console.log("error", error);
    }
}

    export {searchData}