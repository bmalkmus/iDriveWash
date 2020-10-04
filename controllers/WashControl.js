const db = require("../models");


module.exports = {
    clearWeather: function (req, res) {
        db.Weather
            .deleteMany({})
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    clearAlerts: function (req, res) {
        db.Alert
            .deleteMany({})
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    clearCameras: function (req, res) {
        db.Camera
            .deleteMany({})
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    downloadWeather: function (req, res) {
        db.Weather
        .create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
    },
    downloadCameras:function (req, res) {
        db.Camera
        .create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
    },
    downloadAlerts:function (req, res) {
        db.Alert
        .create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
    },
    findAllW:function (req, res) {
        db.Weather
            .find(req.query)
            .sort({ date: -1})
            .then (results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    findAllC:function (req, res) {
        db.Camera
            .find(req.query)
            .sort({ date: -1})
            .then (results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    FindAllA:function (req, res) {
        db.Alert
            .find(req.query)
            .sort({ date: -1})
            .then (results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
}