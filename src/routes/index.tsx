import React from 'react';
import Cardapio from '../pages/Cardapio';
import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => (
  <Switch>
    <Route component={Cardapio} path="/" exact />
  </Switch>
);

export default Routes;
