$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
});


function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5);
    $('#time').text(datetime);
});
}


const array1 $('#singer') = ['Armani White','Oliver Tree','Emotinal oranges','Joji']
const array2 $('#title') = ['BILLIE EILISH','Life Goes On','West Coast Love','Die For You']
array1.forEach(element => console.log(singer));
array2.forEach(element => console.log(title));