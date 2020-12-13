import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import UsersPage from '../UsersPage';

export default function HomePage() {
  return (
    <div id="home-page">
      HomePage
      <nav>
        <Link to="/users">Users</Link>
      </nav>
      <Switch>
        <Route path="/users" component={UsersPage} />
      </Switch>
    </div>
  );
}
