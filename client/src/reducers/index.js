import { combineReducers } from 'redux';
import unit from './unit';
import pilots from './pilots';
import mechs from './mechs';
import message from './message';

const rootReducer = combineReducers({
  unit,
  mechs,
  pilots,
  message
});

export default rootReducer;