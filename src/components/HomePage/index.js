import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import UsersPage from '../UsersPage';
import ContactPage from '../ContactPage';

export const HomePage = () => (
  <div id="home-page">
    <div className="nav-section">
      <div>HomePage</div>
      <Link to="/users">Users</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <div className="main-section">
      <Switch>
        <Route path="/users" component={UsersPage} />
        <Route path="/contact" component={ContactPage} />
        <Redirect to="/users" />
      </Switch>
    </div>
  </div>
);

export default HomePage;
