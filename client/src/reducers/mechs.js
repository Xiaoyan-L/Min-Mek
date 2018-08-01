import { Types } from '../actions/mechs';

const initState = {
  data: [],
  selected: '',
  isloading: false,
  error: '',
  reload: 1
};

const mechs = (state = initState, action) => {
  switch (action.type) {
    case Types.LOADING:
      return {
        ...state,
        isloading: true,
      };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.mechs,
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

export default mechs;