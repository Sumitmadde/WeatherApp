const apiKey='752f151a9cfa05c6a24267a7ddded42d'
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon")

async function checkwhether(city){
    const  responce= await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(responce.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{let data=await responce.json();
        console.log(data)
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity
        +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
    
        if(data.weather[0].main =="Clouds"){
            weathericon.src="images/clouds.png"
        }
        if(data.weather[0].main =="Clear"){
            weathericon.src="images/clear.png"
        }
        if(data.weather[0].main =="Rain"){
            weathericon.src="images/rain.png"
        }
        if(data.weather[0].main =="Drizzle"){
            weathericon.src="images/drizzle.png"
        }
        if(data.weather[0].main =="Mist"){
            weathericon.src="images/mist.png"
        }
    
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display="none";

    }
    
  
}

searchButton.addEventListener("click",()=>{
    checkwhether(searchBox.value) ;
})
