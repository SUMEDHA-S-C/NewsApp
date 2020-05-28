let entertainmentApi =
    "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a4650d14553141dbac47af018414983a";

/*=================entertainment section starts here===================== */

window
    .fetch(entertainmentApi)
    .then((data) => {
        data
            .json()
            .then((entertainmentData) => {
                // console.log(entertainmentData.articles);
                // let entertainmentFeed = entertainmentData.articles;
                // let fisrtentertainmentsBlock = entertainmentData.articles;

                // let entertainmentsNewsBlockOne = fisrtentertainmentsBlock[0];
                // document.getElementById("entertainmentFirstTemplate").innerHTML = `
                // <ul>
                //     <img src="${entertainmentsNewsBlockOne.urlToImage}" />
                //     <a href="${entertainmentsNewsBlockOne.url}" target="_blank">

                // </ul>`;
                let entertainmentsInfo = entertainmentData.articles;
                let output = [];
                for (let entertainments of entertainmentsInfo) {
                    console.log(entertainments);
                    output += `
                    <ul class="list-group">
                    
                    <div id='enterRow'>
                    <div>
                        <img src="${entertainments.urlToImage}">
                    </div>
                    <div >
                        <a href="${entertainments.url}" target="_blank">
                        <li class="font-weight-bold text-dark">${entertainments.title}</li></a>
                    </div> 
                </div>   
                    
                    </ul>`;
                }
                document.getElementById("entertainmentsAllTemplate").innerHTML = output;
            })
            .catch((e) => console.log(e));
    })
    .catch((err) => {
        console.log(err);
    });

/*=================entertainment section ends here=================*/