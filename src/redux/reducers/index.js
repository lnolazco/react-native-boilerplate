import { combineReducers } from 'redux';
import auth from './auth';
// import users from './users';
import profile from './profile';
import nav from './nav';
import SearchLogic from '../logic/SearchLogic';

const reducers = combineReducers({
  auth,
  // users,
  search: SearchLogic.reducer,
  profile,
  nav,
});

export default reducers;
