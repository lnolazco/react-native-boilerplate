import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import profile from './profile';

const reducers = combineReducers({
  auth,
  users,
  profile,
});

export default reducers;
