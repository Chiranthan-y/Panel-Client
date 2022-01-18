import { combineReducers } from 'redux';

import auth from './auth';
import medicine from './medicine';
import category from './category';
import company from './company';
import user from './user';
import payment from './payments';

export default combineReducers({
  auth,
  medicine,
  category,
  company,
  user,
  payment,
});
