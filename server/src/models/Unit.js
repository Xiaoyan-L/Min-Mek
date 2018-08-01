const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  icon: {
    type: String,
    default: "airplane.png",
    trim: true
  },
  color: {
    type: String,
    default: "white",
    trim: true
  },
  affiliation: {
    type: String,
    default: "",
    trim: true
  },
  mechs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Mech"
    }
  ]
});

module.exports = mongoose.model("Unit", UnitSchema);
