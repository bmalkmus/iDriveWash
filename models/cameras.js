const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cameraSchema = new Schema ({
    CameraID: { type : Number, required: true, unique: true},
    Latitude: { type: Number, required: true},
    Longitude: { type: Number, required: true},
    Image: {type: String},
    title: {type: String},
    description: {type: String}
});

const Camera = mongoose.model("camera", cameraSchema);

module.exports = Camera;

