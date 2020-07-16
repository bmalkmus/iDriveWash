const router = require('express').Router();
const WashController = require ("../../controllers/WashControl");


router.route("/")
    .get(WashController.FindAllA)
    .post(WashController.downloadAlerts)
    .delete(WashController.clearAlerts)

module.exports = router;