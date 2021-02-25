import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from '../containers/Login/Login';
import { Register } from '../containers/Login/Register';
import { NotFound } from '../containers/NotFound/NotFound';
import { DashBoard } from './DashBoard';
import AngelInfo from '../containers/angel/Angel';
import Notifications from '../containers/Notifications/Notifications';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/alerta" component={Notifications} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Register} />
        <Route path="/angel" component={AngelInfo} />
        <Route path="/" component={DashBoard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
