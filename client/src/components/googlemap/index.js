import React, { useEffect, useRef } from 'react';
import API from '../utils/API';
import "./style.css"

require('dotenv').config();

 
    function Map({camState, alertState, weatherState}){
        const googleMapRef = useRef(null);
        let googleMap;

        let camMarks = []
        let alertMarks = []
        let weatherMarks = []

        function cameraMarkers () {
            API.CameraList()
            .then(res => {
                let camera = res.data
                camera.forEach(e => {
                    let LatLng = {
                                    lat: e.Latitude,
                                    lng: e.Longitude
                                };
              
                    const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: e.title
                    });

                    const content = '<div class="markerContent"' + 
                    '<h1>'+e.title+'</h!>'+
                    '<br>'+
                    '<img src="'+e.Image+'" alt='
                    +e.title + 'camera width="400" height="400">'+
                    '</div>';

                    const infowindow = new window.google.maps.InfoWindow({
                        content: content
                      });

                    marker.addListener("click", () => {
                        infowindow.open(googleMap,marker)
                      });


                    camMarks.push(marker);
                    if (camState){
                        marker.setMap(googleMap)
                    }
                    else {
                        marker.setMap(null)
                    }
                })
            })
        }

        function weatherMarker () {
            API.WeatherList()
            .then(res => {
                let weatherDot = res.data
                console.log(weatherDot)
                weatherDot.forEach(e => {
                    let temp = e.Temp.toString()
                    let LatLng = {
                        lat: e.Lat,
                        lng: e.Long
                    };
  
                    const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: temp
                    });
                    let content;
                    if (e.WindSpeed){
                    content = '<div class="markerContent"' + 
                    '<h1>Weather Information</h1>'+
                    '<br>'+
                    '<p class="WeatherInfo">Temperature: '+e.Temp.toString()+ '&#8457 <br>' +
                    'Humidity: '+e.Humidity.toString()+'&#37 <br>'+
                    'Wind Speed: '+ e.WindSpeed.toString() + ' mph <br>'+
                    'Wind Direction: '+e.WindDirect+
                    '</p>'+
                    '</div>';
                    }
                    else {
                        content = '<div class="markerContent"' + 
                        '<h1>Weather Information</h1>'+
                        '<br>'+
                        '<p class="WeatherInfo">Temperature: '+e.Temp.toString()+ '&#8457 <br>' +
                        'Humidity: '+e.Humidity.toString()+'&#37 <br>'+
                        'Wind Direction: '+e.WindDirect+
                        '</p>'+
                        '</div>';  
                    }

                    const infowindow = new window.google.maps.InfoWindow({
                        content: content
                      });

                    marker.addListener("click", () => {
                        infowindow.open(googleMap,marker)
                      });

                    

                    weatherMarks.push(marker);
                    if (weatherState){
                        marker.setMap(googleMap)
                    }
                    else {
                        marker.setMap(null)
                    }
                })
            })
        }

        function alertMarker() {
            API.AlertsList()
            .then(res => {
                let alertDot = res.data
                alertDot.forEach(e => {
                    let LatLng = {
                        lat: e.Start.Lat,
                        lng: e.Start.Long
                    };
                    const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: e.Priority
                    });

                    const content = '<div class="markerContent"' + 
                    '<h1>Alert Information</h1>'+
                    '<br>'+
                    '<h2>'+e.EventCategory+'</h2>'+
                    '<br>'+
                    '<p>'+e.HeadlineDescription+'</p>'+
                    
                    '</div>';

                    const infowindow = new window.google.maps.InfoWindow({
                        content: content
                      });

                    marker.addListener("click", () => {
                        infowindow.open(googleMap,marker)
                      });

                    alertMarks.push(marker)
                    if (alertState){
                        marker.setMap(googleMap)
                    }
                    else {
                        marker.setMap(null)
                    }
                })
            })
        }

     


        
        function Traffic() {
            var trafficLayer = new window.google.maps.TrafficLayer()
            trafficLayer.setMap(googleMap)
        }
        
        
        // useEffect(() => {
        //     cameraMarkers()
        //     console.log('this Effect is called')
        // }, [])
        useEffect(() => {
            console.log('useEffect is running')
            googleMap = initGoogleMap();
            Traffic();
            cameraMarkers();
            weatherMarker();
            alertMarker();
        }, [camState, weatherState, alertState]);




        function initGoogleMap ()  {
            return new window.google.maps.Map(googleMapRef.current, {
              center: { lat: 47.411293, lng: -120.55627 },
              zoom: 8
            });
          }

        return (
            <div  id ="mapContainer"
                ref={googleMapRef}
                style={{ width: 1019.33, height: 700 }}
            />
        );
    }


export default Map