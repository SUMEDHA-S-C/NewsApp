window
    .fetch("https://api.covid19api.com/summary")
    .then((data) => {
        data
            .json()
            .then((covidData) => {
                console.log(covidData.Global);
                let global = covidData.Global;
                document.getElementById("covidBlock").innerHTML = `
                <section class="covidBlock">
                <div>
                <h4 class="badge badge-danger">Total Confirmed</h4>
                <span>${global.TotalConfirmed}</span>
                </div>

                <div>
                <h4 class="badge badge-danger">Total Deaths</h4>
                <span>${global.TotalDeaths}</span>
                </div>

                <div>
                <h4 class="badge badge-danger">New Confirmed</h4>
                <span>${global.NewConfirmed}</span>
                </div>
                
                <div>
                <h4 class="badge badge-danger">New Deaths</h4>
                <span>${global.NewDeaths}</span>
                </div>

                <div>
                <h4 class="badge badge-success">New Recovered</h4>
                <span>${global.NewRecovered}</span>
                </div>

                <div>
                <h4 class="badge badge-success">Total Recovered</h4>
                <span>${global.TotalRecovered}</span>
                </div>
                </section>`;
            })
            .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));