import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  authenticateUserAction,
  getAuthenticatedUserAction,
} from '../../state/auth/actions';
import history from '../../utils/history';
import { selectAuthenticatedUser } from '../../state/auth/selectors';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const user = useSelector(selectAuthenticatedUser);
  const location = useLocation();

  const [input, setInput] = useState('');

  useEffect(() => {
    dispatch(getAuthenticatedUserAction());
  }, []);

  useEffect(() => {
    if (user) {
      history.push(location.state?.from || '/home');
    }
  }, [user]);

  const onChange = event => {
    setInput(event.target.value);
  };

  const login = event => {
    dispatch(
      authenticateUserAction({
        name: inputRef.current.value,
      }),
    );

    event.preventDefault();
  };
  return (
    <div id="login-page">
      <form className="login-form" onSubmit={login}>
        <input
          className="theme-input login-input"
          onChange={onChange}
          ref={inputRef}
          type="text"
          placeholder="Type your username..."
          value={input}
        />
        <button
          className="theme-button login-button"
          type="submit"
          disabled={!input}
        >
          Login!
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
