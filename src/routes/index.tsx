import React from "react";
import Cardapio from "../pages/Cardapio";
import Detalhes from "../pages/Detalhes";
import Pedido from "../pages/Pedido";
import Confirmado from "../pages/Confirmado";
import QRCode from "../pages/QRCode";

import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => (
  <Switch>
    <Route component={Cardapio} path="/" exact />
    <Route component={Detalhes} path="/detalhes" exact />
    <Route component={Pedido} path="/pedido" exact />
    <Route component={Confirmado} path="/checkout" exact />
    {/* <Route component={QRCode} path="/qr" exact /> */}
  </Switch>
);

export default Routes;
