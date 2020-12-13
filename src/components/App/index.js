import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import AuthRequired from '../AuthRequired';
import HomePage from '../HomePage';

export default function App() {
  return (
    <div id="app">
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <AuthRequired path="*">
          <HomePage />
        </AuthRequired>
      </Switch>
    </div>
  );
}
