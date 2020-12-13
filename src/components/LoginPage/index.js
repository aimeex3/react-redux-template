import React from 'react';
import { useDispatch } from 'react-redux';
import { authenticateUserAction } from '../../state/auth/actions';
import history from '../../utils/history';

export default function LoginPage() {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(authenticateUserAction({ name: 'Test User' }));
    history.push('/home');
  };
  return (
    <div id="login-page">
      Welcome Login
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  );
}
