
       function fun (){
        let city=document.querySelector(".city").value;
        const key="f034e862e36f923a3e74c4cf1bcc145a";
        const weatherurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        fetch(weatherurl).then((Response)=>{
            if(!Response.ok){
                throw new Error;
            }
            else{
                return Response.json();
            }
        }).then((data)=>{
            console.log(data);
            
            document.querySelector(".output").innerHTML =` <div id=icon> <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></div>
                                                         
                                                        <h3>Weather: ${data.weather[0].main} </h3>
                                                        <h3>Temprature: ${data.main.temp} Celsius</h3>
                                                        <h3>Pressure: ${data.main.pressure} hPa</h3>
                                                         <h3>Wind Speed: ${data.wind.speed} meter/sec</h3>    
                                                         <h3>Humidity: ${data.main.humidity} %</h3>
                                                          `;
           
        }).catch((error)=>{
            console.error(error);
        })
    }
    document.querySelector(".btn").addEventListener("click",fun);
    console.log(document.getElementById("geo"));

    function geo(){
        let city=document.querySelector(".city").value;
           let lat="";
         let lon="";
        
           console.log(city);
           const key="f034e862e36f923a3e74c4cf1bcc145a";
           let geourl=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;
           fetch(geourl)
           .then((Response)=>{
               if(!Response.ok){
                   throw new Error('went wrong!');
               }
               else{
                   return Response.json();
               }
           })
           .then((data)=>{
                   console.log(data);
                   lat=data[0].lat;
                  lon=data[0].lon;  
                  document.getElementById("hlw").innerHTML =`<h3>Lattitude: ${lat}</h3> 
                                                        <h3>Longitude: ${lon}</h3> 
                                                        `;                  
           })
           .catch((error)=>{
               console.error(error);
           });
       
       }
    document.getElementById("btn2").addEventListener("click", ()=>{     
     geo();    
    })