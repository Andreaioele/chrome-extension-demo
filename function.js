$('#submit').on('click', function (){
    submitForm();
})

function submitForm(){
    let form = document.querySelector('#my-form');
    let data = new FormData(form);
    foo(data);
}
function foo(data){
    // Get the form

    // do something
    const city = data.get('city');
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
            document.getElementById('results').innerHTML = response.current.temp_c;
        })
        .catch(err => console.error(err));




}



