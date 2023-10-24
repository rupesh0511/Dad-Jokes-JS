let jokes = document.querySelector(".jokes");
let btn = document.querySelector(".btn");
// let url=  ;

let options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'SJorrUQw2IQ87/HEO/Bl1g==7MMxMLGbD4hd61rj'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
}

btn.addEventListener("click", calljokes)

function calljokes(){
    let data = fetch(url= "https://api.api-ninjas.com/v1/dadjokes?limit=10", options)
    .then (data => data.json())
    // console.log(data);
    .then (item => {
        for(let i=0; i<item.length; i++){
        // console.log(item[i].joke);
        jokes.innerText = `${item[i].joke}`+"😂😂😂";
        }
    });
}
  
calljokes();