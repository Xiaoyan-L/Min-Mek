import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Unit from '../../containers/Unit';
import MechTab from '../MechTab';
import PilotTab from '../PilotTab';
import Organization from '../../containers/Organization';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Unit} />
    <Route path="/mechs" component={MechTab} />
    <Route path="/pilots" component={PilotTab} />
    <Route path="/org" component={Organization} />
  </Switch>
);

export default Router;