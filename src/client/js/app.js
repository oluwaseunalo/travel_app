
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
            const accessData = async () => {
                callData = await fetch('/rapid');
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