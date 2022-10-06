
const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
    url : {type: String, required: true},
    alt : {type: String},
    //src : [{type: String}]
    

});

module.exports = mongoose.model('pictures', pictureSchema);