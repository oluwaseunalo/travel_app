import moment from 'moment';

function date() {
    const departure = document.getElementById('departure').value;
// const m = moment().format('LL');
// console.log(m);
const today = moment();
const m = moment(departure);
const departureDate = m.add(1, 'day');
const difference = departureDate.diff(today, "days");
console.log(difference);
}

date();

export {date};