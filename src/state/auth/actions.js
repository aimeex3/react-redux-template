import { LOGIN } from './constants';

import { SUCCESS } from '../constants';

export const authenticateUserAction = user => dispatch => {
  localStorage.setItem('user', JSON.stringify(user));
  dispatch({
    type: LOGIN,
    status: SUCCESS,
    payload: { user },
  });
};

export const getAuthenticatedUserAction = () => dispatch => {
  let user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
    dispatch({
      type: LOGIN,
      status: SUCCESS,
      payload: { user },
    });
  }
};
