import axios from 'axios';

require('dotenv').config();

export default {
    downCameras: function () {
        return axios.get (`http://www.wsdot.com/Traffic/api/HighwayCameras/HighwayCamerasREST.svc/GetCamerasAsJson?AccessCode=${process.env.REACT_APP_WASHAPI}`)
    },
    downWeath : function () {
        return axios.get(`http://www.wsdot.wa.gov/Traffic/api/WeatherInformation/WeatherInformationREST.svc/GetCurrentWeatherInformationAsJson?AccessCode=${process.env.REACT_APP_WASHAPI}`)
    },
    downAlerts: function () {
        return axios.get(`http://www.wsdot.wa.gov/Traffic/api/HighwayAlerts/HighwayAlertsREST.svc/GetAlertsAsJson?AccessCode=${process.env.REACT_APP_WASHAPI}`)
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