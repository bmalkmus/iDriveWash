const db = require("../models");

module.exports = {
    downloadWeather: function (req, res) {
        db.Weather
        .create(req.body)
        .then(results => res.json(results))
        .catch(err => status(422).json(err));
    },
    downloadCameras:function (req, res) {
        db.Cameras
        .create(req.body)
        .then(results => res.json(results))
        .catch(err => status(422).json(err));
    },
    downloadAlerts:function (req, res) {
        db.Alerts
        .create(req.body)
        .then(results => res.json(results))
        .catch(err => status(422).json(err));
    },
    findAllW:function (req, res) {
        db.Weather
            .find(req.query)
            .sort({ date: -1})
            .then (results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    findAllC:function (req, res) {
        db.Cameras
            .find(req.query)
            .sort({ date: -1})
            .then (results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    FindAllA:function (req, res) {
        db.Alerts
            .find(req.query)
            .sort({ date: -1})
            .then (results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
}