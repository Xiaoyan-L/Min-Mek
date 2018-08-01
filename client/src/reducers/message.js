import { SET_MSG } from '../actions/message';

const message = (state='', action) => {
  switch(action.type) {
    case SET_MSG:
      return action.msg;
    default:
      return state;
  }
}

export default message;