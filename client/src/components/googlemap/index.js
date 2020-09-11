// import React, { useEffect, useRef, useState } from 'react';
// import API from '../utils/API';
// import "./style.css"

// require('dotenv').config();

 
//     function Map({camState, alertState, weatherState}){
//         const googleMapRef = useRef(null);
//         let googleMap;


//         let alertMarks = []
//         let weatherMarks = []

//         function apiCalls() {
            
             
                  
                  
                  
//                     API.downWeath()
//                     .then (res => {
//                       let WeatherInfo = res.data
//                       WeatherInfo
//                         .forEach( e => {
//                           if (e.TemperatureInFahrenheit){
//                           let temp = e.TemperatureInFahrenheit.toString()
//                           let LatLng = {
//                             lat: e.Latitude,
//                             lng: e.Longitude
//                         };
        
//                           const marker = new window.google.maps.Marker({
//                                 position: LatLng,
//                                 title: temp
//                     });
        
//                   weatherMarks.push(marker)
//                           }
        
//                         })
//                     })
        
//                     API.downAlerts()
//                     .then (res => {
//                       let WeatherInfo = res.data
//                       WeatherInfo
//                         .forEach( e => {
//                           let LatLng = {
//                             lat: e.StartRoadwayLocation.Latitude,
//                             lng: e.StartRoadwayLocation.Longitude
//                         };
        
//                           const marker = new window.google.maps.Marker({
//                                 position: LatLng,
//                                 title: e.EventCatergory
//                     });
        
//                   alertMarks.push(marker)
        
//                         })
//                     })
//             }
        
//         function Traffic() {
//             var trafficLayer = new window.google.maps.TrafficLayer()
//             trafficLayer.setMap(googleMap)
//         }
        
//         // function camDots(){
//         //     if (camState) {
//         //         console.log("camera is " + camState)
//         //         Cameras(googleMap)
//         //         // for (var i = 0; i < cameraMarks.length; i++) {
//         //         //     console.log(i)
//         //         //     cameraMarks[i].setMap(googleMap);
//         //         //   }
//         //         // cameraMarks.forEach(e => {
//         //         //     e.setMap(googleMap)
//         //         // })
//         //     }
//         //     else {
//         //         console.log(camState)
//         //         Cameras(null)
//         //         // cameraMarks.forEach(e => {
//         //         //     e.setMap(null)
//         //         // })
//         //     }
//         // }
//         function alertDots(){
//             if (alertState) {
//                 console.log("Alerts are " + alertState)
//                 Alerts(googleMap)
//                 // alertMarks.forEach(e => {
//                 //     e.setMap(googleMap)
//                 // })
//             }
//             else {
//                 console.log(alertState)
//                 Alerts(null)
//                 // alertMarks.forEach(e => {
//                 //     e.setMap(null)
//                 // })
//             }
//         }
//         function weatherDots(){
//             if (weatherState) {
//                 console.log(weatherMarks.length)
//                 // weatherMarks.forEach(e => {
//                 //     console.log(e)
//                 //     e.setMap(googleMap)
//                 // })
//                 Weather(googleMap)
//             }
//             else {
//                 console.log(weatherState)
//                 Weather(null)
//                 // weatherMarks.forEach(e => {
//                 //     e.setMap(null)
//                 // })
//             }
//         }
//         useEffect(() => {
//             apiCalls()
//             console.log('this Effect is called')
//         }, [])
//         useEffect(() => {
//             console.log('useEffect is running')
//             googleMap = initGoogleMap();
//             Traffic();
//             alertDots()
//             // camDots()
//             weatherDots()
//             // createMarker();
//         }, [[camState, weatherState, alertState]]);




//         function initGoogleMap ()  {
//             return new window.google.maps.Map(googleMapRef.current, {
//               center: { lat: 47.411293, lng: -120.55627 },
//               zoom: 8
//             });
//           }

//         return (
//             <div  
//                 ref={googleMapRef}
//                 style={{ width: 600, height: 500 }}
//             />
//         );
//     }


// export default Map