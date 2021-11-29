import React from "react"

import { Link } from "react-router-dom"

import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap"

import MyLastProject from "../components/sections/MyLastProject.jsx"
import MyKnowledge from "../components/sections/MyKnowledge.jsx"
import TechnologiesIcons from "../components/sections/TechnologiesIcons.jsx"
import Office from "../components/sections/Office.jsx"
import MyLanguages from "../components/sections/MyLanguages.jsx"

import MiExperiencia from "../old/components/Sections/MiExperiencia"

const MyCv = () => {
	return (
		<>
			<Container className="mt-5 pt-5">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/">Home Page</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>My CV</BreadcrumbItem>
				</Breadcrumb>
			</Container>

			<img alt="..." className="path" src={require("../assets/img/path1.png")} />

			<section className="section-lg section mb-5">
				<MyLastProject alt={true} />
			</section>

			<MiExperiencia />

			<MyKnowledge />

			<img alt="..." className="path" src={require("../assets/img/path4.png")} />

			<TechnologiesIcons />

			<Office />

			<img
				alt="..."
				className="path"
				style={{ zIndex: "-1", marginTop: "-50vw" }}
				src={require("../assets/img/path2.png")}
			/>

			<MyLanguages />
		</>
	)
}

export default MyCv
