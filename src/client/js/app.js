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
       .then(function(allData){
        console.log(allData)
        return allData
       .then (travelUpdate())
       })
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

    export {confirmData};

// fetching rapid data and searching for hotel
const search = document.querySelector('#search');
const cityHotel = document.getElementById('hotel__destination').value;
const checkinDate = document.getElementById('checkin__date').value;
const checkoutDate = document.getElementById('checkout__date').value;
const adultNo = document.getElementById('adults').value;
const childrenNo = document.getElementById('children').value;
const roomNo = document.getElementById('rooms').value;



    search.addEventListener ('click', searchData);

    function searchData (e) {
        e.preventDefault();
        const accessData = async () => {
          const response = await fetch('http://localhost:8091/rapid', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },       
            body: JSON.stringify(data),
        });
                try {
                    data = await response.json();
                    console.log(data);
                }
                catch(error){
                    console.log('error', error);
                }
     
            }
        
           
        accessData();

    }

    export {searchData}