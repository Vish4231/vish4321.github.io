document.addEventListener("DOMContentLoaded",() => 
{

    const images= document.querySelectorAll("img");

    for(const image of images){
        fetch("https://api.cricapi.com/v1/cricScore?apikey=%APIKEY%") 
        .then(response=> response.json() )
        .then(data => {
            image.src = data.message
            image.width=100;
            image.height=100;
        })
    }
} )