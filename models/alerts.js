const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const alertsSchema = new Schema ({
    AlertID: { type: Number, unique: true, required: true},
    Start: {
        Lat: {type: Number, required: true},
        Long: {type: Number, required: true},
        RoadName: {type: String, required: true}
    },
    End: {
        Lat: {type: Number, required: true},
        Long: {type: Number, required: true},
        RoadName: {type: String, required: true}
    },
    Priority: {type: String},
    EventCategory: {type: String}
});

const Alert = mongoose.model("Alert", alertsSchema);

module.exports = Alert;