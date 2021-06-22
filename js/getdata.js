

// const getData = () => {
//
//     axios.get('http://localhost:8000/api/v1/titles?imdb_score_min=8').then(response => {
//         console.log(response);
//     });
// };
//
// getData()
let urlList = [];

async function getData(){
    let result = await axios.get("http://localhost:8000/api/v1/titles?imdb_score_min=8");

    console.log(result)
    // console.log(result.data.results[0]['image_url']);


    for (let i in result.data.results) {
        urlList.push(result.data.results[i]['image_url'])
        console.log(result.data.results[i]['image_url'])
        carousselCat1.insertAdjacentHTML("beforeend", "<img src='" + urlList[i] + "' alt=\"image_film\">")
    }
}

getData()

