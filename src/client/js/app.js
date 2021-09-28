import moment from 'moment';
import { postData } from './postdata';
import { travelUpdate } from './travel_updateUI';


// Setting up the client to retrieve, post and dynamically update the data from the API
const discover = document.getElementById('discover');


discover.addEventListener ('click', confirmData);


function confirmData (e) {
    e.preventDefault();
    // setting up the date 
    const today = moment();
const departure = document.querySelector('#departure').value;
const departureDate = moment(departure);
const difference = Math.ceil(departureDate.diff(today, "days", true));
console.log(difference);
// creating a condition to post and update the UI
    if(difference > 1) {
       const tripDays = document.querySelector('.trip__days');
       tripDays.innerHTML = `Your trip is in ${difference} days time`;
       postData('http://localhost:8091/input')
       .then (travelUpdate())
       }
    else if(difference==1){
        const tripDays = document.querySelector('.trip__days');
       tripDays.innerHTML = `Your trip is tomorrow`;
       postData('http://localhost:8091/input')
       .then (travelUpdate())
    }

    else if(difference==0){
        const tripDays = document.querySelector('.trip__days');
       tripDays.innerHTML = `You are travelling today`;
       postData('http://localhost:8091/input')
       .then (travelUpdate())
    }

    }

    export {confirmData};

