import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Timeline from '../pages/Timeline';
import PageNotFound from '../pages/PageNotFound';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Timeline} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;