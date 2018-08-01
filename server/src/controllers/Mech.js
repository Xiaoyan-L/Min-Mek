const Mech = require("../models/Mech");

const index = (req, res) => {
  try {
    Mech.find({}, '_id name model weight class', (err, data) => {
    
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
      res.json({err});
  }
}

const add = (req, res) => {
  console.log(req.body);
  const newMech = new Mech(req.body);
  try {
    newMech.save((err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.json({err});
  } 
}

const update = (req, res) => {
  try {
    const { id } = req.params;
    const updateMech = req.body;
    Mech.findByIdAndUpdate(id, updateMech, (err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.json({err});
  }
}

const getMechById = (req, res) => {
  try {
    const { id } = req.params;
    Mech.findById(id, (err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.json({err});
  }
}

const deleteById = (req, res) => {
  try {
    const { id } = req.params;
    Mech.findByIdAndRemove(id, (err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.json({err});
  }
}

const getDropDown = (req, res) => {
  try {
    Mech.find().distinct('_id model', (err, data) => {
    
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
      res.json({err});
  }
}

module.exports = { index, add, update, getMechById, deleteById, getDropDown };