import React from "react"

import { Container, Button } from "reactstrap"

import { Link } from "react-router-dom"

const NotFound = () => {
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
					className="content-center brand"
					style={{ maxWidth: "90vw !important", minWidth: "20em !important" }}
				>
					<h1 className="h1-seo">Page Not Found.</h1>
					<Link
						className="font-weight-bold text-success mt-5"
						to="/"
						onClick={() => {
							window.scrollTo({
								top: 0,
								left: 0,
							})
						}}
					>
						<Button className="btn-simple" color="success" id="masinfo1">
							Go Back To Home Page
						</Button>
					</Link>
				</div>
			</Container>
		</div>
	)
}

export default NotFound
