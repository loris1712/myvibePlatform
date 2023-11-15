// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import UserProfile from './pages/UserProfile';
import Plan from './pages/Plan';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plan/:id" component={Plan} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/:nickname" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
