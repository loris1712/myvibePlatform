// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explore" exact component={Explore} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
