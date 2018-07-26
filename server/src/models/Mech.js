const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MechSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: ''
  },
  model: {
    type: String,
    trim: true,
    default: ''
  },
  weight: {
    type: Number,
    default: 0
  },
  class: {
    type: String,
    trim: true,
    default: ''
  },
  unit: {
    type: Schema.Types.ObjectId,
    ref: 'Unit'
  }
});

module.exports = mongoose.model('Mech', MechSchema);