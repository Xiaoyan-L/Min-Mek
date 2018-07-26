import axios from 'axios';

const Types = {
  LOADING: 'SET_UNIT_LOADING',
  SUCCESS: 'SET_UNIT_SUCCESS',
  FAILURE: 'SET_UNIT_FAILURE'
};

const setLoading = () => ({
  type: Types.LOADING
});

const setSuccess = id => ({
  type: Types.SUCCESS,
  id
});

const setFailure = (error) => ({
  type: Types.FAILURE,
  error
});

const getUnit = () => {
  return (dispatch, getState) => {
    dispatch(setLoading());
    axios.get('/units')
      .then(res => {
        dispatch(setSuccess(res.data));
      })
      .catch (err => {
        dispatch(setFailure(err));
      });
  }
}

const addUnit = (unit) => {
  return (dispatch, getState) => {
    axios.post('/units/add', unit)
      .then()
      .catch(err => {
        dispatch(setFailure(err));
      });
  }
}

const updateUnit = unit => {
  return (dispatch, getState) => {
    axios.post(`/units/update/${unit._id}`, unit)
      .then()
      .catch(err => {
        dispatch(setFailure(err));
      });
  }
}

export { setSuccess, Types, addUnit, updateUnit };