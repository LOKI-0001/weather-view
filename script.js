/*document.getElementById('searchInput').addEventListener('keypress', function (event) {
if (event.key === 'Enter') { searchFunction(); }
});
//function searchFunction() {
   // var input = document.getElementById('searchInput').value;
    //var resut = document.getElementById('result');
    //resut.innerHTML = 'your input is ' + input;

//}*/
document.getElementById('searchInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { getWeather('searchInput'); }
});
document.getElementById('searchInput1').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { getWeather('searchInput1'); }
});

async function getWeather(inputId) {



    const city = document.getElementById(inputId).value.trim();

    const outputDiv = document.getElementById('result');
    const Wind = document.getElementById('cir3')
    const Temperature = document.getElementById('cir2')
    const Humidity = document.getElementById('cir1')
    // Clear any previous data
    outputDiv.innerHTML = '';
    Wind.innerHTML = '';
    Temperature.innerHTML = '';
    Humidity.innerHTML = '';

    if (city) {
        try {
            const apiKey = '02247322d42343f59d274400240611';
            const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

            const response = await fetch(url);
            const data = await response.json();

            if (data && data.current) {


                document.getElementById('initial').style.display = 'none';
                document.getElementById('final').style.display = 'block';

                outputDiv.innerHTML = `
                    <h2 id= "heading" style = "font-size: 50px; font-family: Potta One, system-ui; font-weight: 400; font-style: normal;">Weather in ${data.location.name}</h2>
               
                 <p id= "condition" style = "font-size : 30px; font-family: cursive ; ">Condition: ${data.current.condition.text}</p>`

                Temperature.innerHTML = ` 
                    <p style = "font-size: 55px; padding: 10px;"> ${data.current.temp_c} °C</p>
                    <p style = "font-size: 20px">Temperature</p>`
                Humidity.innerHTML = `
                 <p style = "font-size: 60px; padding: 10px;">${data.current.humidity}%</p>
                 <p style = "font-size: 20px">Humidity</p>`
                Wind.innerHTML = `
                    <p style = "font-size: 55px; padding: 10px;">${data.current.wind_kph} kph </p>
                    <p  style = "font-size:20px">Wind Speed</p>
                `;

                const heading = document.getElementById('heading');
                const condition = document.getElementById('condition');
                const weatherCondition = data.current.condition.text.toLowerCase();
                if (weatherCondition == 'mist') {
                    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/61/b3/39/61b3395f4b9f4562fd93b41ce79403a1.gif')"
                    document.body.style.backgroundSize = "cover"
                    document.body.style.backgroundRepeat = "no-repeat"
                    heading.style.color = "darkred"
                    document.getElementById('cir1').style.backgroundColor = "rgb(224 156 113 / 63%)"
                    document.getElementById('cir1').style.color = "#ffff"
                    document.getElementById('cir2').style.backgroundColor = "rgb(224 156 113 / 63%)"
                    document.getElementById('cir2').style.color = "#ffff"
                    document.getElementById('cir3').style.backgroundColor = "rgb(224 156 113 / 63%)"
                    document.getElementById('cir3').style.color = "#ffff"



                }
                else if (['clear', 'sunny'].includes(weatherCondition)) {
                    document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/69/54/TqeKtb.jpg')"
                    document.body.style.backgroundSize = "cover"
                    document.body.style.backgroundRepeat = "no-repeat"
                    heading.style.color = "#262668"
                    document.getElementById('cir1').style.backgroundColor = "rgb(255 255 255 / 79%)"
                    document.getElementById('cir1').style.color = "black"
                    document.getElementById('cir2').style.backgroundColor = "rgb(255 255 255 / 79%)"
                    document.getElementById('cir2').style.color = "black"
                    document.getElementById('cir3').style.backgroundColor = "rgb(255 255 255 / 79%)"
                    document.getElementById('cir3').style.color = "black"
                }
                else if (['cloudy', 'partly cloudy'].includes(weatherCondition)) {
                   // document.body.style.backgroundImage = "url('https://gifdb.com/images/high/anime-clouds-moving-leaves-flying-in-sky-mk1x9qeh1iro8ekd.gif')"
                    document.body.style.backgroundImage = "url('cloudy.jpg')"
                    document.body.style.backgroundSize = "cover"
                    document.body.style.backgroundRepeat = "no-repeat"
                    heading.style.color = "#181438"
                   condition.style.color = " rgb(88 56 47)"
                    document.getElementById('cir1').style.backgroundColor = "rgba(255, 255, 255, 0.792)"
                    document.getElementById('cir1').style.color = "black"
                    document.getElementById('cir2').style.backgroundColor = "rgba(255, 255, 255, 0.792)"
                    document.getElementById('cir2').style.color = "black"
                    document.getElementById('cir3').style.backgroundColor = "rgba(255, 255, 255, 0.792)"
                    document.getElementById('cir3').style.color = "black"
                }
                else {
                    // document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/DvKm67rUUAAFDsO.jpg:large')"
                    document.body.style.backgroundImage = "url('city.jpg')"
                    document.body.style.backgroundSize = "cover"
                    document.body.style.backgroundRepeat = "no-repeat"
                    document.getElementById('cir1').style.backgroundColor = "rgba(255, 255, 255, 0.792)"
                    document.getElementById('cir1').style.color = "black"
                    document.getElementById('cir2').style.backgroundColor = "rgba(255, 255, 255, 0.792)"
                    document.getElementById('cir2').style.color = "black"
                    document.getElementById('cir3').style.backgroundColor = "rgba(255, 255, 255, 0.792)"
                    document.getElementById('cir3').style.color = "black"


                }

                console.log(weatherCondition);
            } else {
                outputDiv.innerHTML = `<p>Weather data not available for ${city}</p>`;
            }
        } catch (error) {
            console.error('Error:', error);
            outputDiv.innerHTML = `<p>Could not retrieve data. Please try again later.</p>`;
        }
    } else {
        outputDiv.innerHTML = `<p>Please enter a city name.</p>`;
    }



}
