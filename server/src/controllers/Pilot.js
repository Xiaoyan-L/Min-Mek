const Pilot = require("../models/Pilot");

const index = (req, res) => {
  Pilot.find({})
  .populate('mech', 'model')
  .exec((err, data) => {
    try {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({err});
    }
  });
}

const add = (req, res) => {
  const newPilot = new Pilot(req.body);
  try {
    newPilot.save((err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({err});
  } 
}

const update = (req, res) => {
  try {
    const { id } = req.params;
    const updatePilot = req.body;
    Pilot.findByIdAndUpdate(id, updatePilot, (err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({err});
  }
}

const getPilotById = (req, res) => {
  try {
    const { id } = req.params;
    Pilot.findById(id)
     .populate('mech', '_id')
     .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({err});
  }
}

const deleteById = (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    Pilot.findByIdAndRemove(id, (err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.json({err});
  }
}

module.exports = { index, add, update, getPilotById, deleteById };