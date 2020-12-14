import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import UsersPage from '../UsersPage';

export const HomePage = () => (
  <div id="home-page">
    <div className="nav-section">
      <div>HomePage</div>
      <Link to="/users">Users</Link>
    </div>
    <div className="main-section">
      <Switch>
        <Route path="/users" component={UsersPage} />
        <Redirect to="/users" />
      </Switch>
    </div>
  </div>
);

export default HomePage;
