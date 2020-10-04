import React, { useState, useEffect} from "react";
import "./App.css";
import Map from './components/googlemap';
import API from './components/utils/API';
import Navigation from './components/navbar';
import Footer from "./components/footer";
import Cameras from "./cameras.json";


const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    // googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${google}`;
    googleMapScript.src = `%PUBLIC_URL%/api/google`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

  function App () {



  const [loadMap, setLoadMap] = useState(false);
  const [camState, setCamState] = useState(false);
  const [alertState, setAlertState] =useState(false);
  const [weatherState, setWeatherState] =useState(false);

  
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  useEffect(() => {
    apiCalls();
    const interval = setInterval(() => {
      updateInfo()
    }, 30*60*1000);
    return () => clearInterval(interval);
  }, []);

  function updateInfo(){
    API.clearWeather();
    API.clearAlerts();
    dWeath();
    dAlert();
    console.log("info updated")
  }

  function apiCalls() {
    API.clearWeather();
    API.clearAlerts();
    let cameras = {Cameras};
    API.CameraList().then(res => {
      
      if (res.data.length > 0){
      }
      else{
        let CamData = Object.values(cameras)
        CamData = CamData[0]
        CamData.filter(Camera => Camera.CameraOwner !== "WSDOT Aviation")
        .forEach(e => {
          setTimeout(() => {
                        API.postCamera({
                            CameraID:e.CameraID,
                            Latitude:e.CameraLocation.Latitude,
                            Longitude:e.CameraLocation.Longitude,
                            Image:e.ImageURL,
                            title:e.Title,
                            description:e.Description
                          })
                          .then((res) => {
                                console.log("Camera Loaded")
                            })
                            .catch((err) => console.log(err));
                      }, 100);
        })
      }
    })
    dWeath();
    dAlert();


    
  }

  function dWeath(){
    API.downWeath()
    .then (res => {
        for (let i=0; i<res.data.length; i++){
            if (res.data[i].TemperatureInFahrenheit && res.data[i].RelativeHumidity){
              API.postWeath({
                ID: res.data[i].StationID,
                Lat:res.data[i].Latitude,
                Long:res.data[i].Longitude,
                Humidity:res.data[i].RelativeHumidity,
                Temp:res.data[i].TemperatureInFahrenheit,
                WindDirect:res.data[i].WindDirectionCardinal,
                WindSpeed:res.data[i].WindSpeedInMPH  
              })
              .then((res) => {
                  console.log("weather station " +res)
              })
              .catch((err) => {
                                console.log(err);
                              });
            }
        }
    })
  }

  function dAlert(){
    API.downAlerts()
    .then (res => {
        for (let i=0; i<res.data.length; i++){

            API.postAlerts({
                AlertID:res.data[i].AlertID,
                Start: {
                    Lat:res.data[i].StartRoadwayLocation.Latitude,
                    Long:res.data[i].StartRoadwayLocation.Longitude,
                    RoadName:res.data[i].StartRoadwayLocation.RoadName
                },
                End: {
                    Lat:res.data[i].EndRoadwayLocation.Latitude,
                    Long:res.data[i].EndRoadwayLocation.Longitude,
                    RoadName:res.data[i].EndRoadwayLocation.RoadName
                },
                Priority:res.data[i].Priority,
                EventCategory:res.data[i].EventCategory,
                HeadlineDescription:res.data[i].HeadlineDescription
            })
            .then((res) => {
                console.log("alerts " +res)
            })
            .catch((err) => {
              console.log(err);
            });

                
        }
    });
  }


  

    return (
      <div className="App">
      <img className = "backImage" src= {process.env.PUBLIC_URL + '/washRoad.jpg'}/>
      <div className="frontContent">
        <Navigation/>
    
 
        {!loadMap ? <div>Loading...</div> : <Map 
                                              camState = {camState} 
                                              alertState = {alertState} 
                                              weatherState = {weatherState} 
                                         
                                              />}
        <Footer 
          setCamState = {setCamState} 
          setAlertState = {setAlertState} 
          setWeatherState = {setWeatherState}
          camState = {camState} 
          alertState = {alertState} 
          weatherState = {weatherState}
/>
      </div>
      </div>
    );

}

export default App;
