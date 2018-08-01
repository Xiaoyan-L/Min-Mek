import { Types } from '../actions/pilots';

const initState = {
  data: [],
  selected: '',
  isloading: false,
  error: '',
  reload: 1
};

const pilots = (state = initState, action) => {
  switch (action.type) {
    case Types.LOADING:
      return {
        ...state,
        isloading: true,
      };
    case Types.SUCCESS:
      console.log(action);
      return {
        ...state,
        data: action.pilots,
        isloading: false
      }
    case Types.FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.error
      };
    case Types.SELECTED:
      return {
        ...state,
        selected: action.id
      };
    case Types.RELOAD:
      return {
        ...state,
        reload: state.reload * -1
      };
    default:
      return state;
  }
}

export default pilots;