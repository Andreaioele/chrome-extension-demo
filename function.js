
// onload data for static weather.
window.onload = doStaticWeather();

/*
const element = document.getElementById("submit");
element.addEventListener("click", submitForm);

function submitForm(){
    let form = document.querySelector('#my-form');
    let data = new FormData(form);

    foo(data);
}



const foo = (data) =>{
    // Get the form
    const city = data.get('city');
    // Set options to perform API call
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '105d6cb619msh23099ce05faf73ap1ed55cjsnf3d944b7311c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+city, options).then(response => response.json())
        .then(response => {
            console.log(response.current.temp_c);
            document.getElementById('results').innerHTML = response.current.temp_c + " °C";
        })
        .catch(err => console.error(err));
}


 */
function doStaticWeather() {
    // Set options to perform API call
    const city = "Ferrara";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '105d6cb619msh23099ce05faf73ap1ed55cjsnf3d944b7311c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+city, options).then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(response.current.temp_c);
            document.getElementById('precip').innerHTML = "Precipitation: "+response.current.precip_mm + " mm";
            document.getElementById('conditionText').innerHTML = response.current.condition.text;
            document.getElementById('humidity').innerHTML = "Humidity: "+response.current.humidity + " %";
            document.getElementById('staticResults').innerHTML = response.current.temp_c + " °C";
        })
        .catch(err => console.error(err));
}



