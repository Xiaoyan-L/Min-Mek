import axios from "axios";
import { setMsg } from './message';

const Types = {
  LOADING: "SET_MECH_LOADING",
  SUCCESS: "SET_MECH_SUCCESS",
  // FAILURE: "SET_MECH_FAILURE",
  SELECTED: "SET_MECH_SELECTED",
  RELOAD: "SET_MECH_RELOAD"
};

const setLoading = () => ({
  type: Types.LOADING
});

const setSuccess = mechs => ({
  type: Types.SUCCESS,
  mechs
});

/*
const setFailure = error => ({
  type: Types.FAILURE,
  error
});
*/

const setSelected = (id = "") => ({
  type: Types.SELECTED,
  id
});

const setReload = () => ({
  type: Types.RELOAD
});

const getMechs = () => {
  return (dispatch, getState) => {
    dispatch(setLoading());
    try {
      axios
      .get("/mechs")
      .then(res => {
        dispatch(setSuccess(res.data));
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
  }
}

const addMech = mech => {
  return (dispatch, getState) => {
    try {
      axios
      .post("/mechs/add", mech)
      .then(res => {
        dispatch(setMsg("Add Mech Successfully"));
        dispatch(getMechs());
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
  }
}

const updateMech = (id, mech) => {
  return (dispatch, getState) => {
    try {
      axios
      .put(`mechs/update/${id}`, mech)
      .then(res => {
        dispatch(setSelected());
        dispatch(setMsg("Update Mech Successfully"));
        dispatch(getMechs());
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
}
}

const deleteMech = id => {
  return (dispatch, getState) => {
    try {
      axios.delete(`mechs/delete/${id}`)
      .then(res => {
        dispatch(setMsg("Delete Mech Successfully"));
        dispatch(getMechs());
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
  }
}

export { getMechs, addMech, updateMech, deleteMech, setSelected, setReload, Types };
