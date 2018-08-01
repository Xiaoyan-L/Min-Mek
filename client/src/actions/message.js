const SET_MSG = "SET_MSG";

const setMsg = (msg = '') => ({
  type: SET_MSG,
  msg
});

export { SET_MSG, setMsg };