import React from 'react';
import Cardapio from '../pages/Cardapio';
import Detalhes from '../pages/Detalhes';
import Pedido from '../pages/Pedido';

import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => (
  <Switch>
    <Route component={Cardapio} path="/" exact />
    <Route component={Detalhes} path="/detalhes" exact />
    <Route component={Pedido} path="/pedido" exact />
  </Switch>
);

export default Routes;
