const Unit = require('../models/Unit');

const index = (req, res) => {
  try {
    Unit.findOne({}, '_id name affiliation color', (err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({err});
  }
}

const add = (req, res) => {
  try {
    const newUnit = new Unit(req.body);
    newUnit.save((err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    })
  } catch (err) {
    res.status(500).json(data);
  }
}

const update = (req, res) => {
  try {
    const { id } = req.params;
    Unit.findByIdAndUpdate(id, req.body, (err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json(data);
  }
}

const findUnitByID = (req, res) => {
  try {
    const { id } = req.params;
    Unit.findById(id, (err, Unit) => {
      if (err) {
        throw err;
      }
      res.status(200).json(Unit);
    });
  } catch (err) {
    res.status(500).json({err});
  }
}

module.exports = { index, add, update };