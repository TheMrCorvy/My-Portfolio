import React, { useEffect } from "react"

import Navbar from "../sections/Navbar.jsx"
import Footer from "../sections/Footer.jsx"

const Layout = (props) => {
	useEffect(() => {
		document.body.classList.add("index-page")

		return () => {
			document.body.classList.remove("index-page")
		}
	}, [])

	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	)
}

export default Layout
