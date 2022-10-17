const foo = async () => {
    // do something
    const city= 'ferrara';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '105d6cb619msh23099ce05faf73ap1ed55cjsnf3d944b7311c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    const res = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+city, options)
    const record = await res.json();

    console.log(record);
    document.getElementById('translate').innerHTML = record.current.temp_c;

}


foo();
