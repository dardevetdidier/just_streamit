//
//
// function getData () {
//
//     return axios.get('http://localhost:8000/api/v1/titles?imdb_score_min=8').then(response => {
//         console.log(response);
//
//     });
//
// }
//
// let urlList = [];
//
// let result = getData();
// console.log(result.data);

// for (let i in result.data.results) {
//     urlList.push(result.data.results[i]['image_url']);
//     // console.log(result.data.results[i]['image_url']);
//     caroussels[0].insertAdjacentHTML("beforeend", "<img id=\"cat1_film" + i + "\" src='" + urlList[i] + "' alt=\"image_film\">");
// }



// async function getData(){
//     let result = await axios.get("http://localhost:8000/api/v1/titles?imdb_score_min=8");
//
//
//
//     console.log(result)
//     // console.log(result.data.results[0]['image_url']);
//
//
//     for (let i in result.data.results) {
//         urlList.push(result.data.results[i]['image_url'])
//         console.log(result.data.results[i]['image_url'])
//         caroussels[0].insertAdjacentHTML("beforeend", "<img id=\"cat1_film" + i + "\" src='" + urlList[i] + "' alt=\"image_film\">")
//     }
//
// }
//
//
// getData()
// getData()






// const urlBase = "http://localhost:8000/api/v1/titles"
// const page2 = "?page=2"
//
// async function getData(urlBase, query) {
//     let result = await axios.get(urlBase + query)
//     console.log(result)
//
//     // while (urlList < 7 || result.data.next != null)
//     for (let i in result.data.results) {
//         urlList.push(result.data.results[i]['image_url']);
//         caroussels[0].insertAdjacentHTML("beforeend", "<img id=\"cat1_film" + i + "\" src='" + urlList[i] + "' alt=\"image_film\">")
//     }
//
// }
//
// getData(urlBase,"?imdb_score_min=8");





// let urlList = [];
// async function getdata() {
//     await fetch("http://localhost:8000/api/v1/titles?imdb_score_min=8")
//         .then(function (response){
//             if (response.ok){
//                 return response.json();
//             }
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
//         .then(function (value){
//             for (let i in value.data.results) {
//                 urlList.push(value.data.results[i]["image_url"]);
//                 caroussels[0].insertAdjacentHTML("beforeend", "<img id=\"cat1_film" + i + "\" src='" + urlList[i] + "' alt=\"image_film\">")
//             }
//         })
// }
//
// getdata()



//
//

// let urlList = [];
// const urlBase = "http://localhost:8000/api/v1/titles"
//
// async function axiosData(query) {
//     await axios.get(urlBase + query, {
//             params: {
//                 page_size: 7
//             }
//         })
//         .then(function (response) {
//             console.log(response)
//             let results = response.data.results
//             for (let i in results) {
//                 console.log(results[i]["image_url"]);
//                 urlList.push(results[i]["image_url"]);
//                 caroussels[0].insertAdjacentHTML("beforeend", "<img id=\"cat1_film" + i + "\" src='" + urlList[i] + "' alt=\"image_film\">")
//             }
//         })
//
//         .catch(function (error) {
//             console.log(error)
//         })
// }
//
// axiosData("?imdb_score_min=9&sort_by=-imdb_score")


//
//
//
// function addImagesCarrousel(response) {
//     for (let i in response.data.results) {
//         console.log(response.data.results[i]["image_url"]);
//         urlList.push(response.data.results[i]["image_url"]);
//         caroussels[0].insertAdjacentHTML("beforeend", "<img id=\"cat1_film" + i + "\" src='" + urlList[i] + "' alt=\"image_film\">")
//     }
// }
//
// let response = axiosData("?imdb_score_min=8")
// addImagesCarrousel(response)






//
// function displayImages(caroussel, request) {
//     for (let i in request.data.results) {
//         urlList.push(request.data.results[i]['image_url']);
//         caroussel.insertAdjacentHTML("beforeend", "<img id=\"cat1_film" + i + "\" src='" + urlList[i] + "' alt=\"image_film\">")
//     }
// }
//
// displayImages(caroussels[0], request);



async function GetIdsScoreMax() {
    let IdsList = [];
    let next = "";
    let url = 'http://localhost:8000/api/v1/titles?imdb_score_min = 9.6&sort_by=-imdb_score,-votes';
    while (IdsList.length < 7) {
        await axios.get(url + next)
        .then(function(response){
            let data = response.data.results;
            console.log(response);
            for (let i in data) {
                if (data.hasOwnProperty(i)) {
                   if (IdsList.length < 7){
                    IdsList.push(data[i]['id']);
                }else {
                    break;
                }
                }
            }
        next = "&page=2";
        })
    }
    console.log(IdsList);
    return IdsList;
}

let ids = GetIdsScoreMax()