const router = require('express').Router();
const WashController = require ("../../controllers/WashControl");


router.route("/")
    .get(WashController.findAllC)
    .post(WashController.downloadCameras)
    .delete(WashController.clearCameras);

module.exports = router;