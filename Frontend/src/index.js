import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Home from "views/home.jsx"
import MiCv from "views/MiCv.jsx"
import PricingPage from "views/pricing.jsx"
import NotFound from "views/NotFound.jsx"
import Combos from "views/Combos.jsx"
import Beneficios from "views/Beneficios.jsx"

import Animes from "views/Privado/Animes"
import Mundos from "views/Privado/Mundos"
import Admin from "views/Privado/Admin"

import Layout from "components/Layout/Layout.js"

import * as ServiceWorker from "./serviceWorker"

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />

        <Route exact path="/mi-cv" render={props => <MiCv {...props} />} />

        <Route exact path="/beneficios" render={props => <Beneficios {...props} />} />

        <Route exact path="/pricing" render={props => <PricingPage {...props} />} />

        <Route exact path="/pricing/:combo" component={Combos} />

        <Redirect exact from="/redirect" to="/animes" />

        <Route exact path="/animes" render={props => <Animes {...props} />} />

        <Route exact path="/mundos" render={props => <Mundos {...props} />} />

        <Route exact path="/admin" render={props => <Admin {...props} />} />

        <Route component={NotFound} />

      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

ServiceWorker.register()