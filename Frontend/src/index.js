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
import AboutMe from "./pages/AboutMe"
import Admin from "./pages/Admin"
import Animes from "./pages/Animes"

import Layout from "./components/utils/Layout.jsx"

import * as ServiceWorker from "./serviceWorker"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faUserGraduate, faFlag } from "@fortawesome/free-solid-svg-icons"
library.add(faUserGraduate, faFlag)

ReactDOM.render(
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/" render={() => <Home />} />

				<Route exact path="/my-cv" render={() => <MyCv />} />

				<Route exact path="/my-studies" render={() => <MyStudies />} />

				<Route exact path="/about-me" render={() => <AboutMe />} />

				<Route exact path="/admin" render={() => <Admin />} />

				<Route exact path="/animes" render={() => <Animes />} />

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
