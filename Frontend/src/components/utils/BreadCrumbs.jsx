import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap"

const BreadCrumbs = ({ title, steps }) => {
	const [urlSteps, setUrlSteps] = useState([""])

	useEffect(() => {
		let getSteps = Object.entries(steps)

		setUrlSteps(getSteps)
	}, [])

	return (
		<Container className="mt-5 pt-5">
			<Breadcrumb>
				<BreadcrumbItem>
					<Link to="/">Home Page</Link>
				</BreadcrumbItem>

				{urlSteps.map((step, index) => (
					<BreadcrumbItem key={index}>
						<Link to={"/" + step[1]}>{step[0]}</Link>
					</BreadcrumbItem>
				))}

				<BreadcrumbItem active>{title}</BreadcrumbItem>
			</Breadcrumb>
		</Container>
	)
}

export default BreadCrumbs
