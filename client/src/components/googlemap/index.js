import React, { useEffect, useRef, useState } from 'react';
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
            <div  
                ref={googleMapRef}
                style={{ width: 600, height: 500 }}
            />
        );
    }


export default Map