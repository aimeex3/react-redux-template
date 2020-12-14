import React from 'react';
import { mount } from 'enzyme';

import LoginPage from './index';
import { renderComponent, populateStore } from '../../test/test-utils';
import history from '../../utils/history';

describe('LoginPage', () => {
  let wrapper;
  let store;

  const mountComponent = props => {
    const ConnectedComponent = renderComponent(LoginPage, store);
    wrapper = mount(<ConnectedComponent {...props} />);
  };

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = undefined;
      history.push('/');
    }
  });

  it('renders login page', async () => {
    store = await populateStore({ user: null });
    mountComponent();
    expect(wrapper.find('.login-input').exists()).toBe(true);
    expect(wrapper.find('.login-button').exists()).toBe(true);
  });

  it('logs in', async () => {
    store = await populateStore({ user: null });
    const name = 'Ryan';
    mountComponent();
    expect(history.location.pathname).toBe('/');
    expect(store.getState().auth.user).toBeUndefined();
    wrapper
      .find('.login-input')
      .simulate('change', { target: { value: name } });
    wrapper.find('.login-button').simulate('submit');

    expect(history.location.pathname).toBe('/home');
    expect(store.getState().auth.user.name).toBe(name);
  });
});
