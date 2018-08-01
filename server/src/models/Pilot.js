const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PilotSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  age: {
    type: Number,
    default: 0
  },
  gunnery: {
    type: Number,
    default: 0
  },
  piloting: {
    type: Number,
    default: 0
  },
  rank: {
    type: String,
    default: '',
    trim: true
  },
  mech: {
    type: Schema.Types.ObjectId,
    ref: 'Mech'
  }
});

module.exports = mongoose.model('Pilot', PilotSchema);