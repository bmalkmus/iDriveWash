const router = require('express').Router();
const alertsRoutes = require ("./alerts.js");
const cameraRoutes = require ("./cameras.js");
const weatherRoutes = require ("./weather.js")
const googleRoute = require ("./google.js")

router.use("/alerts", alertsRoutes);
router.use("/cameras", cameraRoutes);
router.use("/weather", weatherRoutes);
router.use("/google", googleRoute)


module.exports = router;