import React from "react"

import PageHeader from "../old/components/Sections/PageHeader.jsx"

import MiTrabajo from "../old/components/Sections/MiTrabajo.jsx"
import Tecnologias from "../old/components/Sections/Tecnologias.jsx"
import SectionContacto from "../old/components/Sections/SectionContacto.jsx"
import PaquetesBasicos from "../old/components/Sections/PaquetesBasicos.jsx"

const Home = () => {
	return (
		<>
			<PageHeader />

			<section className="section section-basic wrapper justify-content-between">
				<img alt="..." className="path" src={require("../assets/img/path1.png")} />

				<section className="section section-lg">
					<MiTrabajo />
				</section>

				<section className="section section-lg">
					<img
						alt="..."
						className="path"
						style={{ transform: "scale(0.7)", left: "-15em", top: "-7em" }}
						src={require("../assets/img/path2.png")}
					/>
					<Tecnologias />
				</section>
			</section>

			<img alt="..." className="path" src={require("../assets/img/path4.png")} />

			<PaquetesBasicos />

			<section className="section section-lg justify-content-center">
				<SectionContacto />
			</section>
		</>
	)
}

export default Home
