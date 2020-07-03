const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema ({
    ID: {type : String, required: true},
    Lat : {type: Number, required: true},
    Long : {type: Number, required: true},
    Humidity : {type: Number, required:true},
    Temp : {type: Number, require: true},
    WindDirect : {type: String},
    WindSpeed: {type: Number}
})