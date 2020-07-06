const router = require('express').Router();
const WashController = require ("../../controllers/WashControl");


router.route("/")
    .get(WashController.findAllW)
    .post(WashController.downloadWeather)
    .delete(WashController.clearWeather);

module.exports = router;