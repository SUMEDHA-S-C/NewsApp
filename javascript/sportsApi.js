/* -----   news api key   a4650d14553141dbac47af018414983a  -----------*/

let sportsApi =
    "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a4650d14553141dbac47af018414983a";

let businessApi =
    "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a4650d14553141dbac47af018414983a";
// let entertainmentApi =
//     "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a4650d14553141dbac47af018414983a";

let healthApi =
    "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a4650d14553141dbac47af018414983a";

let scienceApi =
    "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=a4650d14553141dbac47af018414983a";

let technologyApi =
    "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a4650d14553141dbac47af018414983a";

/*=================sports section starts here===================== */

window
    .fetch(sportsApi)
    .then((data) => {
        data
            .json()
            .then((sportsData) => {
                console.log(sportsData.articles);
                let sportFeed = sportsData.articles;
                let fisrtSportsBlock = sportsData.articles;

                let sportsNewsBlockOne = fisrtSportsBlock[0];
                document.getElementById("sportFirstTemplate").innerHTML = `
                <ul>
                    <img src="${sportsNewsBlockOne.urlToImage}" />
                    <a href="${sportsNewsBlockOne.url}" target="_blank">
                    </a>
                </ul>`;
                let sportsInfo = sportsData.articles;
                let output = [];
                for (let sports of sportsInfo) {
                    console.log(sports);
                    output += `
                    <ul class="list-group  my-2">
                        <a href="${sports.url}" target="_blank">
                        <li class="font-weight-bold text-dark">${sports.title}</li></a>    
                    </ul>`;
                }
                document.getElementById("sportsAllTemplate").innerHTML = output;
            })
            .catch((e) => console.log(e));
    })
    .catch((err) => {
        console.log(err);
    });

/*=================sports section ends here=================*/