const router = require('express').Router();
const alertsRoutes = require ("./alerts.js");
const cameraRoutes = require ("./cameras.js");
const weatherRoutes = require ("./weather.js")

router.use("/alerts", alertsRoutes);
router.use("/cameras", cameraRoutes);
router.use("/weather", weatherRoutes);

module.exports = router;