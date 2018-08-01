import axios from 'axios';

const getUnitById = (id) => {
  return axios.get(`/units/${id}`);
}

const getUnit = () => {
  return axios.get("/units");
}

const getMech = id => {
  return axios.get(`/mechs/${id}`);
}

const getPilot = id => {
  return axios.get(`/pilots/${id}`);
}


export { getUnitById, getUnit, getMech, getPilot };