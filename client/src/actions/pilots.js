import axios from "axios";
import { setMsg } from './message';

const Types = {
  LOADING: "SET_PILOT_LOADING",
  SUCCESS: "SET_PILOT_SUCCESS",
  //FAILURE: "SET_PILOT_FAILURE",
  SELECTED: "SET_PILOT_SELECTED",
  RELOAD: "SET_PILOT_RELOAD"
};

const setLoading = () => ({
  type: Types.LOADING
});

const setSuccess = pilots => ({
  type: Types.SUCCESS,
  pilots
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

const getPilots = () => {
  return (dispatch, getState) => {
    try {
      setLoading();
      axios("/pilots")
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

const addPilot = pilot => {
  return (dispatch, getState) => {
    try {
      axios
      .post("/pilots/add", pilot)
      .then(res => {
        dispatch(setMsg("Add Pilot Successfully"));
        dispatch(getPilots());
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
  }
}

const updatePilot = (id, pilot) => {
  return (dispatch, getState) => {
    try {
      axios
      .put(`pilots/update/${id}`, pilot)
      .then(res => {
        dispatch(setSelected());
        dispatch(setMsg("Update Pilot Successfully"));
        dispatch(getPilots());
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
  }
}

const deletePilot = id => {
  return (dispatch, getState) => {
    try {
      axios
      .delete(`pilots/delete/${id}`)
      .then(res => {
        dispatch(setMsg("Delete Pilot Successfully"));
        dispatch(getPilots());
      })
      .catch (({response}) => {
        dispatch(setMsg(response.status + " " + response.statusText));
      });
    } catch (err) {
      dispatch(setMsg(err));
    }
  }
}

export {
  Types,
  getPilots,
  setSelected,
  addPilot,
  updatePilot,
  deletePilot,
  setReload
};
