import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import profile from './profile';
import nav from './nav';

const reducers = combineReducers({
  auth,
  users,
  profile,
  nav,
});

export default reducers;
