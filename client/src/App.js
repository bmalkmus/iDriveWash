import React, { useState, useEffect} from "react";
import "./App.css";
import Map from './components/googlemap';
import API from './components/utils/API';
import Navigation from './components/navbar'
import Footer from "./components/footer"

const GOOGLE_MAP_API_KEY = 'KEY';

const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
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



  function apiCalls() {
    API.downCameras()
    .then (res => {
       let CamInfo = res.data
        CamInfo
          .filter(Camera => Camera.CameraOwner !== "WSDOT Aviation")
          .forEach(e => {
            let LatLng = {
                      lat: e.CameraLocation.Latitude,
                      lng: e.CameraLocation.Longitude
                  };

            const marker = new window.google.maps.Marker({
                  position: LatLng,
                  title: e.Title
              });



            
            
          })

            })
            API.downWeath()
            .then (res => {
              let WeatherInfo = res.data
              WeatherInfo
                .forEach( e => {
                  if (e.TemperatureInFahrenheit){
                  let temp = e.TemperatureInFahrenheit.toString()
                  let LatLng = {
                    lat: e.Latitude,
                    lng: e.Longitude
                };

                  const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: temp
            });

        
                  }

                })
               
            })

            API.downAlerts()
            .then (res => {
              let WeatherInfo = res.data
              WeatherInfo
                .forEach( e => {
                  let LatLng = {
                    lat: e.StartRoadwayLocation.Latitude,
                    lng: e.StartRoadwayLocation.Longitude
                };

                  const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: e.EventCatergory
            });

      

                })
               
            })
    }


    apiCalls()
    return (
      <div className="App">
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
    );

}

export default App;
