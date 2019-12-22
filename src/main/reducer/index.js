import { combineReducers } from 'redux';
import menuReducer from './menu';
import { getAppReducers } from '../../app/reducer';

export default combineReducers({
  menu: menuReducer,
  ...getAppReducers()
});
