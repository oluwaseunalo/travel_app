// setting up the post data callback function
async function postData (url = '') {
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

export {postData};