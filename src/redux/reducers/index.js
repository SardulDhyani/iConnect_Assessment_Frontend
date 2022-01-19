import { combineReducers } from 'redux';

import companiesReducer from './companies.reducer';
import formReducer from './form.reducer';

const reducers = combineReducers({
  companies: companiesReducer,
  form: formReducer,
});

export default reducers;
