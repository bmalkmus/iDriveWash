// import React from 'react';
// import {Map, GoogleApiWrapper} from 'google-maps-react'

// require('dotenv').config();


// const mapStyles = {
//     width: "100%",
//     height: "100%"
// };

// export class MapContainer extends Component {
//     render() {
//         var transitLayer = new google.maps.TransitLayer();
//         transitLayer.setMap(map);
//     return (
//         <Map
//         google = {this.props.google}
//         style = {mapStyles}
//         initialCenter ={{
//             lat:'47.411293',
//             lng: '-120.55627'
//         }}
//         zoom = {8}
//         />
//     );
//     }
// }



// export default GoogleApiWrapper({
//     // apiKey: `${process.env.GOOGLEAPI}`
//     
// })(MapContainer)

import React, { Component } from 'react';
// import { render } from 'react-dom';
import API from '../utils/API'

require('dotenv').config();

class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    apiWeather() {
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

    apiCameras() {
        API.downCameras()
        .then (res => {
            for (let i=0; i<res.data.length; i++){

                API.postCamera({
                    CameraID:res.data[i].CameraID,
                    Latitude:res.data[i].CameraLocation.Latitude,
                    Longitude:res.data[i].CameraLocation.Longitude,
                    Image:res.data[i].ImageURL,
                    title:res.data[i].Title,
                    description:res.data[i].Description
                })
                .then((res) => {
                    console.log("camera posts " +res)
                })
                .catch((err) => console.log(err));

                    
            }
        })
    }

    apiAlerts() {
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

    onScriptLoad() {
        this.apiAlerts();
        this.apiCameras();
        this.apiWeather();
        const mapId = document.getElementById(this.props.id);
        const map = new window.google.maps.Map(mapId, this.props.options);
        var trafficLayer = new window.google.maps.TrafficLayer();
            trafficLayer.setMap(map);

    }

    componentDidMount() {

        if (window.google) {
            this.onScriptLoad();
            return;
        }

        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `https://maps.google.com/maps/api/js?key=SECRET`;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);

        s.addEventListener('load', e => {
            this.onScriptLoad()
        })
    }

    render() {
        return (
            <div  id={this.props.id} />
        );
    }
}

export default Map