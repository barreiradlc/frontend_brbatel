import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Auth from '../pages/Auth';
import { Dashboard } from '../pages/Dashboard';


const Routes: React.FC = () => {
  return(
      <Switch>
        <Route path='/' exact component={Auth} />
        <Route path='/dashboard' exact component={Dashboard} />
      </Switch>
  );
}

export { Routes };