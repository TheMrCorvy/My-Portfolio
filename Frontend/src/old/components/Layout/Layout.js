import React from "react"

import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

function Layout(props) {
	return (
		<React.Fragment>
			<Navbar />
			{props.children}
			<Footer />
		</React.Fragment>
	)
}

export default Layout
