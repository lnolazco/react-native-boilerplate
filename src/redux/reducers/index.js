import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import auth from './auth';
import profile from './profile';
import nav from './nav';
import SearchLogic from '../logic/SearchLogic';
import SearchFilterLogic from '../logic/SearchFilterLogic';

const searchFilterPersistConfig = {
  key: 'searchFilter',
  storage: storage,
  whitelist: ['form'],
};

const reducers = combineReducers({
  auth,
  // users,
  search: SearchLogic.reducer,
  profile,
  nav,
  form: formReducer,
  searchFilter: persistReducer(
    searchFilterPersistConfig,
    SearchFilterLogic.reducer
  ),
});

export default reducers;
