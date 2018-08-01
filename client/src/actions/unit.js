import axios from 'axios';
import { setMsg } from './message';

const Types = {
  LOADING: 'SET_UNIT_LOADING',
  SUCCESS: 'SET_UNIT_SUCCESS',
  // FAILURE: 'SET_UNIT_FAILURE'
};

const setLoading = () => ({
  type: Types.LOADING
});

const setSuccess = (id, name) => ({
  type: Types.SUCCESS,
  id,
  name
});

/*
const setFailure = (error) => ({
  type: Types.FAILURE,
  error
});
*/

const getUnit = () => {
  return (dispatch, getState) => {
    try {
      dispatch(setLoading());
      axios.get('/units')
      .then(({data}) => {
        dispatch(setSuccess(data._id, data.name));
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
  }
}

const addUnit = (unit) => {
  return (dispatch, getState) => {
    try {
      axios.post('/units/add', unit)
      .then(res => {
        dispatch(setMsg("Add Unit Successfully"));
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
  }
}

const updateUnit = (id, unit) => {
  return (dispatch, getState) => {
    try {
      axios.put(`/units/update/${id}`, unit)
      .then(res => {
        dispatch(setSuccess(id, unit.name));
        dispatch(setMsg("Update Unit Successfully"));
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
  }
}

export { setSuccess, Types, addUnit, updateUnit, getUnit };