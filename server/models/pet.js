const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: Number,
  ownerName: String,
  vaccinated: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pet', petSchema);
