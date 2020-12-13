import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthenticatedUser } from '../../state/auth/selectors';

const AuthRequired = ({ children, ...rest }) => {
  const isUserAuthenticated = useSelector(selectAuthenticatedUser);
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        isUserAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

AuthRequired.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default AuthRequired;
