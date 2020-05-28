// key 106a097a1d78762c157b0cd2e72fe87b

//variables

let input = document.getElementById("input");

//event listeners
input.addEventListener("keyup", searchfunction);

//funtions
function searchfunction(e) {
    e.preventDefault();
    let searchKey = e.target.value;
    // console.log(searchKey);
    searchWeather(searchKey);
}

function searchWeather(searchKey) {
    let weatherApi = `api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=106a097a1d78762c157b0cd2e72fe87b`;
}