const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AffiliationSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model('Affiliation', AffiliationSchema);
