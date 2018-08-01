import { Types } from "../actions/unit";

const initState = {
  id: '',
  name: '',
  isloading: false,
  error: ''
};

const unit = (state = initState, action) => {
  switch(action.type) {
    case Types.LOADING:
      return {
        ...state,
        isloading: true
      };
    case Types.SUCCESS:
    console.log(action.id)
      return {
        ...state,
        isloading: false,
        id: action.id,
        name: action.name
      };
    case Types.FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default unit;