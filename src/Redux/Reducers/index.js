import { combineReducers } from 'redux';

import auth from './auth';
import medicine from './medicine';
import category from './category';
import company from './company';

export default combineReducers({
  auth,
  medicine,
  category,
  company,
});
