///////////////////////////////////////////////////////////////////////////////
//////////Part 1 - Random Dog Generator
///////////////////////////////////////////////////////////////////////////////
let dogImg = document.querySelector('#dogImg');
let dogButton = document.querySelector('#dogButton');
fetch('https://dog.ceo/api/breeds/image/random')
.then(function(response){
    return response.json();

    
})
.then(function(data){
    console.log(data);
    console.log(data.message); // use this message url for the image to appear
    console.log(data.status);
    console.log(3);
    dogImg.src = data.message;
})
dogButton.addEventListener('click', () => {

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response){
        return response.json();

        
    })
    .then(function(data){
        console.log(data);
        console.log(data.message); // use this message url for the image to appear
        console.log(data.status);
        dogImg.src = data.message;
    })
})

///////////////////////////////////////////////////////////////////////////////
//////////Part 2 - Weather App
///////////////////////////////////////////////////////////////////////////////
let weatherForm = document.querySelector('#weatherForm');
let cityInput = document.querySelector('#cityInput');
let submitButton = document.querySelector('#submit');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let desc = document.querySelector('#desc');



weatherForm.addEventListener('submit',(event) =>{
    event.preventDefault();
    console.log(`Input: ${cityInput.value}`)
    fetch(encodeURI(`https://goweather.herokuapp.com/weather/{${cityInput.value}}`))
    .then(function(response){
        return response.json();    
    })
    .then(function(data){
        console.log(data);
        temp.innerHTML = data.temperature;
        wind.innerHTML = data.wind;
        desc.innerHTML = data.description;
    })
    cityInput.value = "";

})


