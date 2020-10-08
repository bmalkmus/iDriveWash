import React, { useEffect, useRef } from 'react';
import API from '../utils/API';
import "./style.css"

require('dotenv').config();

 
    function Map({camState, alertState, weatherState, coord}){
        console.log(coord)
        const googleMapRef = useRef(null);
        let googleMap;

        let camMarks = []
        let alertMarks = []
        let weatherMarks = []
        const polygonalWash = require('../../bounds.json');
        const washBounds = {
            // north:49.0027,
            // south:45.5439,
            // east:-116.9165,
            // west:-124.8679
            north:50.0000,
            south: 44.5439,
            east:-115.0000,
            west:-126.0000
        }
        const outterLine = [
            {lat:60.0000, lng: -100.0000},
            {lat:60.0000, lng:-140.0000},
            {lat: 39.5439, lng:-140.0000},
            {lat: 39.5439, lng: -100.0000}
        ]

        function cameraMarkers () {
            API.CameraList()
            .then(res => {
                let camera = res.data
                console.log(typeof(camera))
                camera.forEach(item => {
                    let LatLng = {
                                    lat: item.Latitude,
                                    lng: item.Longitude
                                };
              
                    const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: item.title,
                        icon: "http://maps.google.com/mapfiles/kml/pal4/icon46.png"
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
                console.log(weatherDot)
                weatherDot.forEach(item => {
                    let temp = item.Temp.toString()
                    let LatLng = {
                        lat: item.Lat,
                        lng: item.Long
                    };
  
                    const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: temp,
                        icon: "http://maps.google.com/mapfiles/kml/pal4/icon30.png"
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
                    let markerIcon =''
                    if (item.Priority=="High"){
                        markerIcon = "http://maps.google.com/mapfiles/kml/pal3/icon33.png"
                    }
                    else if (item.Priority=="Medium"){
                        markerIcon="http://maps.google.com/mapfiles/kml/pal3/icon45.png"
                    }
                    else {
                        markerIcon = "http://maps.google.com/mapfiles/kml/pal4/icon60.png"
                    }


                    let LatLng = {
                        lat: item.Start.Lat,
                        lng: item.Start.Long
                    };
                    const marker = new window.google.maps.Marker({
                        position: LatLng,
                        title: item.Priority,
                        icon: markerIcon
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
        
        function Border() {
            const borderLine = new window.google.maps.Polygon({
                paths: [outterLine,polygonalWash],
                strokeColor: "rgb(0,128,84)",
                strokeOpacity: 1.0,
                strokeWeight: 5,
                fillColor: "#000000",
                fillOpacity: .50,

              });
              borderLine.setMap(googleMap);
        }
        function Traffic() {
            var trafficLayer = new window.google.maps.TrafficLayer()
            trafficLayer.setMap(googleMap)
        }


        useEffect(() => {
            googleMap = initGoogleMap();
            Traffic();
            Border();
            cameraMarkers();
            weatherMarker();
            alertMarker();
        }, [camState, weatherState, alertState]);

       



        function initGoogleMap ()  {
            return new window.google.maps.Map(googleMapRef.current, {
              center: coord,
              restriction: {
                latLngBounds: washBounds,
                strictBounds: false,
              },
              zoom: 10
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