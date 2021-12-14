import React from "react"

import { Link } from "react-router-dom"

import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap"

import MyLastProject from "../components/sections/MyLastProject.jsx"
import MyKnowledge from "../components/sections/MyKnowledge.jsx"
import TechnologiesIcons from "../components/utils/TechnologiesIcons.jsx"
import Office from "../components/sections/Office.jsx"
import MyLanguages from "../components/sections/MyLanguages.jsx"
import Projects from "../components/sections/Projects.jsx"
import DownloadCV from "../components/sections/DownloadCV.jsx"

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

			<DownloadCV />

			<section className="section-lg section mb-5">
				<MyLastProject alt={true} />
			</section>

			<Projects />

			<MyLanguages />

			<img
				alt="..."
				className="path"
				style={{ zIndex: "-1", marginTop: "-50vw" }}
				src={require("../assets/img/path2.png")}
			/>

			<MyKnowledge alt />

			<img alt="..." className="path" src={require("../assets/img/path4.png")} />

			<TechnologiesIcons />

			<Office />
		</>
	)
}

export default MyCv
