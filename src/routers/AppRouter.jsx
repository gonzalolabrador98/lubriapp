import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Sidebar } from '../components/sidebar/Sidebar';
import { BrowserScreen } from '../pages/browser/BrowserScreen';
import { PedidosScreen } from '../pages/pedidos/PedidosScreen';
import { PresupuestosScreen } from '../pages/presupuestos/PresupuestosScreen';
import { ProductosScreen } from '../pages/productos/ProductosScreen';
import { ProveedoresScreen } from '../pages/proveedores/ProveedoresScreen';
import '../index.css';

export const AppRouter = () => {
  return (
    <div className="contenedor">
      <Router>
        <Sidebar />

        <Switch>
          <Route exact path="/browser" component={BrowserScreen} />
          <Route exact path="/pedidos" component={PedidosScreen} />
          <Route exact path="/presupuestos" component={PresupuestosScreen} />
          <Route exact path="/productos" component={ProductosScreen} />
          <Route exact path="/proveedores" component={ProveedoresScreen} />

          <Redirect to="/browser" />
        </Switch>
      </Router>
    </div>
  );
};
