
import moment from 'moment';

const city = document.querySelector('.city').value;
const departure = document.querySelector('#departure').value;
// const m = moment().format('LL');
// console.log(m);
const today = moment();
const m = moment(departure);
const departureDate = m.add(1, 'day');
const difference = departureDate.diff(today, "days");
console.log(difference);


// Setting up the client to retrieve, post and dynamically update the data from the API
const discover = document.getElementById('discover');

discover.addEventListener ('click', confirmData);


function confirmData (e) {
    if(difference >= 1) {
       const tripDays = document.querySelector('.trip__days');
       tripDays.innerHTML = `Your trip is in ${difference} days time`;
       const displayData = async () => {
           retrieveData = await fetch('/input');
           try {
               data = await response.json();
               console.log(data);
           }
           catch(error){
               console.log('error', error);
           }

       }
    displayData();
    

    }};

    export {confirmData};