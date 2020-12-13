import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import usersReducer from './users/reducer';

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

export default reducer;
