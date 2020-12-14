import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from '../utils/history';
import createStore from '../state/store';

import * as api from '../api';
import { user1 } from './fixtures/user';
import { getUsersAction } from '../state/users/actions';
import { authenticateUserAction } from '../state/auth/actions';

export const renderComponent = (Component, store = createStore()) => props => (
  <Provider store={store}>
    <Router history={history}>
      <Component {...props} />
    </Router>
  </Provider>
);

export const populateStore = async ({ user = user1, users = [] } = {}) => {
  const store = createStore();
  if (user) {
    await store.dispatch(authenticateUserAction(user));
  }

  if (users?.length) {
    const getUsersMock = jest
      .spyOn(api, 'getUsers')
      .mockImplementation(() => Promise.resolve(users));
    await store.dispatch(getUsersAction());
    expect(getUsersMock).toBeCalled();
  }

  return store;
};
