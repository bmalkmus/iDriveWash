import React, { useState, useEffect} from "react";
import "./App.css";
import Map from './components/googlemap';
import API from './components/utils/API';
import Navigation from './components/navbar';
import Footer from "./components/footer";
import Cameras from "./cameras.json";

const GOOGLE_MAP_API_KEY = 'key';

// const loadGoogleMapScript = (callback) => {
//   if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
//     callback();
//   } else {
//     const googleMapScript = document.createElement("script");
//     googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
//     window.document.body.appendChild(googleMapScript);
//     googleMapScript.addEventListener("load", callback);
//   }
// }

  function App () {



  // const [loadMap, setLoadMap] = useState(false);
  const [camState, setCamState] = useState(false);
  const [alertState, setAlertState] =useState(false);
  const [weatherState, setWeatherState] =useState(false);

  
  // useEffect(() => {
  //   loadGoogleMapScript(() => {
  //     setLoadMap(true)
  //   });
  // }, []);



  function apiCalls() {
    console.log("API CALL RAN")
    // API.downCameras()
    // .then (res => {
    //   if(API.CameraList()){
    //     console.log("database already loaded")
    //   }
    //   else{
    //     let CamInfo = res.data
    //      CamInfo
    //        .filter(Camera => Camera.CameraOwner !== "WSDOT Aviation")
    //        .forEach(e => {
    //          setTimeout(() => {
               
    //            API.postCamera({
    //                CameraID:e.CameraID,
    //                Latitude:e.CameraLocation.Latitude,
    //                Longitude:e.CameraLocation.Longitude,
    //                Image:e.ImageURL,
    //                title:e.Title,
    //                description:e.Description
    //              })
    //              .then((res) => {
    //                    console.log("Camera Loaded")
    //                })
    //                .catch((err) => console.log(err));
    //          }, 100);

    //             });
    //           }
    //        })

      let cameras = {Cameras};
      API.CameraList().then(res => {
        
        if (res.data.length > 0){
          console.log("database already exists")
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

          // .forEach(e => {
          //   let LatLng = {
          //             lat: e.CameraLocation.Latitude,
          //             lng: e.CameraLocation.Longitude
          //         };

          //   // const marker = new window.google.maps.Marker({
          //   //       position: LatLng,
          //   //       title: e.Title
          //   //   });



            
            
          // })

            // })
            // API.downWeath()
            // .then (res => {
            //   let WeatherInfo = res.data
            //   WeatherInfo
            //     .forEach( e => {
            //       if (e.TemperatureInFahrenheit){
            //       let temp = e.TemperatureInFahrenheit.toString()
            //       let LatLng = {
            //         lat: e.Latitude,
            //         lng: e.Longitude
            //     };

            //       const marker = new window.google.maps.Marker({
            //             position: LatLng,
            //             title: temp
            // });

        
            //       }

            //     })
               
            // })

            // API.downAlerts()
            // .then (res => {
            //   let WeatherInfo = res.data
            //   WeatherInfo
            //     .forEach( e => {
            //       let LatLng = {
            //         lat: e.StartRoadwayLocation.Latitude,
            //         lng: e.StartRoadwayLocation.Longitude
            //     };

            //       const marker = new window.google.maps.Marker({
            //             position: LatLng,
            //             title: e.EventCatergory
            // });

      

            //     })
               
            // })
    }


    apiCalls()
    return (
      <div className="App">
        <Navigation/>
    
 
        {/* {!loadMap ? <div>Loading...</div> : <Map 
                                              camState = {camState} 
                                              alertState = {alertState} 
                                              weatherState = {weatherState} 
                                         
                                              />} */}
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
