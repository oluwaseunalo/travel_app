// creating a function to update the UI
async function travelUpdate () {
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
        //updating the UI with the response
        document.getElementById('weather__icon').innerHTML = `<img src = "./images/icons/${update.icon}.png" alt = "">`
        document.getElementById('temp').innerHTML = `Temperature: ${update.temp} °C`
        document.getElementById('weather_des').innerHTML = `Description: ${update.weather}`
        document.getElementById('place').innerHTML = `Destination: ${update.city}` 
        document.getElementById('weather__country').innerHTML = `Country: ${update.country}`
        document.getElementById('pixabay__image').innerHTML = `<img src = "${update.image}" alt = "">`
    }
    catch(error){
        console.log("error", error);
    }
}

export {travelUpdate}