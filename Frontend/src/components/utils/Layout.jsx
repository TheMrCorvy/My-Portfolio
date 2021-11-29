import React, { useEffect } from "react"

import Navbar from "../sections/Navbar.jsx"
import Footer from "../sections/Footer.jsx"
import ContactForm from "../sections/ContactForm.jsx"

const Layout = (props) => {
	useEffect(() => {
		document.body.classList.add("index-page")
	}, [])

	return (
		<>
			<Navbar />
			{props.children}
			<section className="section section-lg justify-content-center">
				<ContactForm />
			</section>
			<Footer />
		</>
	)
}

export default Layout
