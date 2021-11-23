import React, { useEffect } from "react"

import Navbar from "../../old/components/Layout/Navbar.jsx"
import Footer from "../../old/components/Layout/Footer.jsx"

const Layout = (props) => {
	useEffect(() => {
		document.body.classList.toggle("index-page")

		return () => {
			document.body.classList.toggle("index-page")
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
