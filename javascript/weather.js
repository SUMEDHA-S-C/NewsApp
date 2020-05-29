// key 106a097a1d78762c157b0cd2e72fe87b

//variables

let input = document.getElementById("input");

//event listeners
input.addEventListener("keyup", searchfunction);

//funtions
function searchfunction(e) {
    e.preventDefault();
    let searchKey = e.target.value;
    console.log(searchKey);
    searchWeather(searchKey);
}

function searchWeather(searchKey) {
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=106a097a1d78762c157b0cd2e72fe87b`;
    window
        .fetch(weatherApi)
        .then((data) => {
            console.log(data);
            data
                .json()
                .then((weathers) => {
                    console.log(weathers);
                    let weatherData = weathers.weather;
                    let main = weathers.main;
                    output = [];
                    for (let x of weatherData) {
                        output += ` 
                        <div class="col-md-12 mt-4 card">
                            <div class="card-body">
                                <h1>${weathers.name}</h1>
                                <div>
                                    <p class="icon">
                                        <img src="http://openweathermap.org/img/wn/${x.icon}.png">
                                    </p>
                                    <p>
                                        <span>Temp:</span>
                                        <span class="temp">${weathers.main.temp}</span>
                                    </p>
                                    <p class="float-left">Humidity: ${weathers.main.humidity}&deg;c</p>
                                    <p class="des float-left">${x.description}</p>
                                    <p class="dec float-right">${x.main}</p>
                                </div>
                            </div>
                        </div>`;
                        document.getElementById("weatherTemplate").innerHTML = output;
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        })
        .catch((e) => console.log(e));
}