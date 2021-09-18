

// Setting up the client to retrieve, post and dynamically update the data from the API
const discover = document.getElementById('discover');

discover.addEventListener ('click', confirmData);

function confirmData (e) {
    const newZip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeatherApi(baseURL,newZip,apiKey)

    .then(function(data){
        console.log(data);
        postData('/includeData', {date:d, temp:data.main.temp, content:feelings})
    .then (updateUI())
    })
};

// Expressing the getWeatherApi call back function
const getWeatherApi = async (baseURL,newZip,apiKey) => {
    const response = await fetch(baseURL+newZip+apiKey)
    try{
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error){
        console.log("error", error);}
}

// Expressing the postData callback function
const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(data),
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

// Expressing the updateUI callback function
const updateUI = async () => {
    const request = await fetch ('/retrieveData');
    try{
        const allData = await request.json();
        document.getElementById('date').innerHTML = "Date: "+(allData.date);
        document.getElementById('temp').innerHTML = "weather: "+(allData.temp);
        document.getElementById('content').innerHTML = "I am feeling: "+(allData.content);
    }catch(error){
        console.log("error", error);}
}