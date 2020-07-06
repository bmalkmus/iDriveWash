import axios from 'axios';

require('dotenv').config();
const key = 'SECRET';
console.log({key});

export default {
    clearDB: function () {
        return axios.all([
            axios.delete('api/cameras'),
            axios.delete('api/alerts'),
            axios.delete('api/weather'),
        
        ])
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
    }
    
}