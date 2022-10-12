const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  src: { type: String, required: true },
  alt: { type: String },
});

module.exports = mongoose.model('pictures', pictureSchema);
