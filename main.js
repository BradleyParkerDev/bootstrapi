///////////////////////////////////////////////////////////////////////////////
//////////Part 1 - Random Dog Generator
///////////////////////////////////////////////////////////////////////////////
let dogImg = document.querySelector('#dogImg')
let dogButton = document.querySelector('#dogButton')
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
let cityInput = document.querySelector('#cityInput')
let weatherForm = document.querySelector('#weatherForm')
let
