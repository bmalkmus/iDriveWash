import React, { useEffect, useRef } from 'react';
import API from '../utils/API';
import "./style.css"

require('dotenv').config();



     function clearDB() {
        API.clearCam()
        .then (res => {
            console.log("Cam Cleared!");
            this.apiCameras();
        })
        .catch((err) => console.log(err));
        API.clearAlerts()
        .then (res => {
            console.log("Alerts Cleared!");
            this.apiAlerts();
        })
        .catch((err) => console.log(err));
        API.clearWeather()
        .then (res => {
            console.log("Weather Cleared!");
            this.apiWeather();
        })
        .catch((err) => console.log(err));
    }

    function apiWeather() {
        API.downWeath()
        .then (res => {
            for (let i=0; i<res.data.length; i++){
                
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
                .catch((err) => console.log(err));
            }
        })
    }

    function apiCameras() {
        API.downCameras()
        .then (res => {
            console.log(res.data)
            const mapId = document.getElementById(this.props.id);
            const map = new window.google.maps.Map(mapId, this.props.options);
            for (let i = 0; i < res.data.length; i++){
                while (!res.data[i].CameraOwner === "WSDOT Aviation"){
                    console.log("not airport")
                let LatLng = {
                    lat: res.data[i].CameraLocation.Latitude,
                    lng: res.data[i].CameraLocation.Longitude
                };

                const marker = new window.google.maps.Marker({
                    position: LatLng,
                    title: res.data[i].Description
                });

                marker.setMap(map);
            }
            //     API.postCamera({
            //         CameraID:res.data[i].CameraID,
            //         Latitude:res.data[i].CameraLocation.Latitude,
            //         Longitude:res.data[i].CameraLocation.Longitude,
            //         Image:res.data[i].ImageURL,
            //         title:res.data[i].Title,
            //         description:res.data[i].Description
            //     })
            //     .then((res) => {
            //         console.log("Camera Loaded")
            //     })
            //     .catch((err) => console.log(err));
            
            

                    
               
            }
        })
    }

    function apiAlerts() {
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
                    EventCatergory:res.data[i].EventCatergory
                })
                .then((res) => {
                    console.log("alerts " +res)
                })
                .catch((err) => console.log(err));

                    
            }
        })
    }

    
    function Map(){
        const googleMapRef = useRef(null);
        let googleMap = null;
        
        function Traffic() {
            var trafficLayer = new window.google.maps.TrafficLayer()
            trafficLayer.setMap(googleMap)
        }
        useEffect(() => {
            googleMap = initGoogleMap();
            Traffic();
            // createMarker();
        }, []);

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