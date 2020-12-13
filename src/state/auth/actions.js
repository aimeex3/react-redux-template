import { LOGIN } from './constants';

import { SUCCESS } from '../constants';

export function authenticateUserAction(user) {
  return dispatch => {
    dispatch({
      type: LOGIN,
      status: SUCCESS,
      payload: user,
    });
  };
}
