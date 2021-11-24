import React from "react"

import { Container } from "reactstrap"

const Welcome = () => {
	return (
		<div className="page-header header-filter">
			<div className="squares square1" />
			<div className="squares square2" />
			<div className="squares square3" />
			<div className="squares square4" />
			<div className="squares square5" />
			<div className="squares square6" />
			<div className="squares square7" />
			<Container>
				<div
					className="content-center brand text-left"
					style={{ maxWidth: "80vw !important", minWidth: "20em !important" }}
				>
					<h1 className="h1-seo text-center">Hello there!</h1>
					<h3>
						My name is <span className="text-warning">Gonzalo</span>.
					</h3>
					<h4>
						I'm a Fullstack Web Developer, specialized in Frontend development with
						React JS and TypeScript.
					</h4>
				</div>
			</Container>
		</div>
	)
}

export default Welcome
