import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import { Breadcrumb, BreadcrumbItem, Button, Container } from "reactstrap"

const BreadCrumbs = ({ title, steps }) => {
	const [urlSteps, setUrlSteps] = useState([""])

	useEffect(() => {
		let getSteps = Object.entries(steps)

		setUrlSteps(getSteps)
	}, [])

	return (
		<Container className="mt-5 pt-5">
			<Breadcrumb>
				<BreadcrumbItem
					style={{
						display: "flex",
						alignItems: "center",
						verticalAlign: "center",
						textAlign: "center",
					}}
				>
					<Link to="/">Home Page</Link>
				</BreadcrumbItem>

				{urlSteps.map((step, index) => (
					<BreadcrumbItem
						key={index}
						style={{
							display: "flex",
							alignItems: "center",
							verticalAlign: "center",
							textAlign: "center",
						}}
					>
						<Link to={"/" + step[1]}>{step[0]}</Link>
					</BreadcrumbItem>
				))}

				<BreadcrumbItem
					active
					style={{
						display: "flex",
						alignItems: "center",
						verticalAlign: "center",
						textAlign: "center",
					}}
				>
					{title}
				</BreadcrumbItem>
				<div style={{ flexGrow: 1 }}></div>
				<Button color="info" size="sm" onClick={() => window.history.go(-1)}>
					Back
				</Button>
			</Breadcrumb>
		</Container>
	)
}

export default BreadCrumbs
