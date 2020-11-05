import axios from 'axios';
import keys from '../../keys';

require('dotenv').config();
const key = keys.wash();

export default {

    timeTravel: function() {
        return axios.get (`http://www.wsdot.wa.gov/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=${key}`)
    },
    googleInfo: function () {
        return axios.get('api/google')
    },
    clearCam: function () {
        return axios.delete('api/cameras')   
    },
    clearAlerts: function () {
        return axios.delete('api/alerts') 
    },
    clearWeather: function () {
        return axios.delete('api/weather') 
    },
    downCameras: function () {
        return axios.get (`https://cors-anywhere.herokuapp.com/http://www.wsdot.com/Traffic/api/HighwayCameras/HighwayCamerasREST.svc/GetCamerasAsJson?AccessCode=${key}`)
    },
    downWeath : function () {
        return axios.get(`https://cors-anywhere.herokuapp.com/http://www.wsdot.wa.gov/Traffic/api/WeatherInformation/WeatherInformationREST.svc/GetCurrentWeatherInformationAsJson?AccessCode=${key}`)
    },
    downAlerts: function () {
        return axios.get(`https://cors-anywhere.herokuapp.com/http://www.wsdot.wa.gov/Traffic/api/HighwayAlerts/HighwayAlertsREST.svc/GetAlertsAsJson?AccessCode=${key}`)
    },
    postCamera: function (data) {
        return axios.post("api/cameras", data)
    },
    postWeath: function (data) {
        return axios.post("api/weather", data)
    },
    postAlerts: function (data) {
        return axios.post("api/alerts", data)
    },
    CameraList: function () {
        return axios.get('api/cameras')
    },
    WeatherList: function () {
        return axios.get('api/weather')
    },
    AlertsList: function () {
        return axios.get('api/alerts')
    },
    Distance: function (coord, alert) {
        const radlat1 = Math.PI * coord.lat/180;
		const radlat2 = Math.PI * alert.lat/180;
		const theta = coord.lng-alert.lng;
		const radtheta = Math.PI * theta/180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        dist = Math.round(dist)

        return dist
    }
    
}