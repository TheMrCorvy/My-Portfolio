import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "./assets/css/nucleo-icons.css"
import "./assets/scss/blk-design-system-react.scss?v=1.0.0"
import "./assets/demo/demo.css"
import "./assets/css/custom.css"

import Home from "./pages/Home.jsx"
import MyCv from "./pages/MyCv.jsx"
import NotFound from "./pages/NotFound.jsx"
import MyStudies from "./pages/MyStudies"

import Beneficios from "./views/Beneficios.jsx"

// import PricingPage from "./views/pricing.jsx"
// import Animes from "./views/Privado/Animes"
// import Mundos from "./views/Privado/Mundos"
// import Admin from "./views/Privado/Admin"

import Layout from "./components/utils/Layout.jsx"

import * as ServiceWorker from "./serviceWorker"

ReactDOM.render(
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/" render={() => <Home />} />

				<Route exact path="/my-cv" render={() => <MyCv />} />

				<Route exact path="/my-studies" render={() => <MyStudies />} />

				<Route exact path="/about-me" render={(props) => <Beneficios {...props} />} />

				{/* <Route exact path="/pricing" render={(props) => <PricingPage {...props} />} />

				<Route exact path="/pricing/:combo" component={Combos} />

				<Redirect exact from="/redirect" to="/animes" />

				<Route exact path="/animes" render={(props) => <Animes {...props} />} />

				<Route exact path="/mundos" render={(props) => <Mundos {...props} />} />

				<Route exact path="/admin" render={(props) => <Admin {...props} />} /> */}

				<Route component={NotFound} />
			</Switch>
		</Layout>
	</BrowserRouter>,
	document.getElementById("root")
)

if (process.env.NODE_ENV === "development") {
	console.log("service worker unregistered")

	ServiceWorker.unregister()
} else {
	ServiceWorker.register()
}
