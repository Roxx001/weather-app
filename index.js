const apikey ="8951080b8831a31cc1cd1f35ed0b35cf";



const weather= document.querySelector(".image"); 


const searchbtn=document.querySelector("#nav2");


async function apicall(cityName){
    const api=    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`;
    
        const response=await fetch(api);
         data= await response.json();
        console.log(data);
        document.getElementById("windspeed").innerHTML = data.wind.speed + "km/h";
        document.getElementById("hum").innerHTML = data.main.humidity + "%" ;
        document.getElementById("tempa").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#loc1").innerHTML = data.name;
        document.querySelector(".display").style.display="block";


        if(data.weather[0].main.toLowerCase()=="clouds"){
            weather.setAttribute("src", "clouds.png");
        }
         else if(data.weather[0].main.toLowerCase()=="rain"){
            weather.setAttribute("src", "rain.png");
        }
        else if(data.weather[0].main.toLowerCase()=="mist"){
            weather.setAttribute("src", "mist.png");
        }
        else if(data.weather[0].main.toLowerCase()=="humidity"){
            weather.setAttribute("src", "humidity.png");
        }
        else if(data.weather[0].main.toLowerCase()=="drizzle"){
            weather.setAttribute("src", "drizzle.png");
        }
        else if(data.weather[0].main.toLowerCase()=="clear"){
            weather.setAttribute("src", "clear.png");
        }
        else if(data.weather[0].main.toLowerCase()=="snow"){
            weather.setAttribute("src", "snow.png");
        }
        else if(data.weather[0].main.toLowerCase()=="wind"){
            weather.setAttribute("src", "wind.png");
        }

  
};


searchbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    const City=document.getElementById("nav1");
     const cityName= nav1.value;
     

    apicall(cityName);
});




// document.getElementById("windspeed").innerHTML=`Maths.round(${data.wind.speed})  km/h`;


