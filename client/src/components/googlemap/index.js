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
                console.log(camera)
                console.log(typeof(camera))
                camera.forEach(item => {
                    let LatLng = {
                                    lat: item.Latitude,
                                    lng: item.Longitude
                                };
              
                    const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: item.title
                    });

                    const content = '<div class="markerContent"' + 
                    '<h1>'+item.title+'</h!>'+
                    '<br>'+
                    '<img src="'+item.Image+'" alt='
                    +item.title + 'camera width="400" height="400">'+
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
                weatherDot.forEach(item => {
                    let temp = item.Temp.toString()
                    let LatLng = {
                        lat: item.Lat,
                        lng: item.Long
                    };
  
                    const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: temp
                    });
                    let content;
                    if (item.WindSpeed){
                    content = '<div class="markerContent"' + 
                    '<h1>Weather Information</h1>'+
                    '<br>'+
                    '<p class="WeatherInfo">Temperature: '+item.Temp.toString()+ '&#8457 <br>' +
                    'Humidity: '+item.Humidity.toString()+'&#37 <br>'+
                    'Wind Speed: '+ item.WindSpeed.toString() + ' mph <br>'+
                    'Wind Direction: '+item.WindDirect+
                    '</p>'+
                    '</div>';
                    }
                    else {
                        content = '<div class="markerContent"' + 
                        '<h1>Weather Information</h1>'+
                        '<br>'+
                        '<p class="WeatherInfo">Temperature: '+item.Temp.toString()+ '&#8457 <br>' +
                        'Humidity: '+item.Humidity.toString()+'&#37 <br>'+
                        'Wind Direction: '+item.WindDirect+
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
                alertDot.forEach(item => {
                    let LatLng = {
                        lat: item.Start.Lat,
                        lng: item.Start.Long
                    };
                    const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: item.Priority
                    });

                    const content = '<div class="markerContent"' + 
                    '<h1>Alert Information</h1>'+
                    '<br>'+
                    '<h2>'+item.EventCategory+'</h2>'+
                    '<br>'+
                    '<p>'+item.HeadlineDescription+'</p>'+
                    
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