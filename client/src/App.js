import React, { useState, useEffect} from "react";
import "./App.css";
import Map from './components/googlemap';
import API from './components/utils/API';
import Navigation from './components/navbar'
import Footer from "./components/footer"

const GOOGLE_MAP_API_KEY = 'SECRET';

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

  const cameraMarks = []
  const alertMarks = []
  const weatherMarks = []

  const [loadMap, setLoadMap] = useState(false);
  const [camState, setCamState] = useState(false);
  const [alertState, setAlertState] =useState(false);
  const [weatherState, setWeatherState] =useState(false);
 
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);


    let Cameras = [] 

  function apiCameras() {
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

            cameraMarks.push(marker)
            

          })
              // API.postCamera({
              //   CameraID:e.CameraID,
              //   Latitude:e.CameraLocation.Latitude,
              //   Longitude:e.CameraLocation.Longitude,
              //   Image:e.ImageURL,
              //   title:e.Title,
              //   description:e.Description
              // })
              // .then((res) => {
              //     console.log("Camera Loaded")
              // })
              // .catch((err) => console.log(err));
              // });

    
        
        
                
           
        // }
    })
}


  

  // render() {
    // apiCameras();
    console.log(Cameras.length)
    return (
      <div className="App">
        <Navigation/>
    
              {/* // center: { lat: 47.411293, lng: -120.55627 }, */}
       
            {/* // var trafficLayer = new window.google.maps.TrafficLayer();
            // trafficLayer.setMap(map); */}
        {!loadMap ? <div>Loading...</div> : <Map />}
        <Footer/>
      </div>
    );

}
//   }
// }

export default App;
