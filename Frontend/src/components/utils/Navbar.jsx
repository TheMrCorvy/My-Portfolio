import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import {
	Collapse,
	NavbarBrand,
	Navbar as ReactstraptNavbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from "reactstrap"

const Navbar = () => {
	const [collapseOpen, setCollapseOpen] = useState(false)
	const [collapseOut, setCollapseOut] = useState("")
	const [color, setColor] = useState("navbar-transparent")

	useEffect(() => {
		window.addEventListener("scroll", changeColor)

		return () => {
			window.removeEventListener("scroll", changeColor)
		}
	}, [])

	const changeColor = () => {
		if (document.documentElement.scrollTop > 99 || document.body.scrollTop > 99) {
			setColor("bg-info")
		} else if (document.documentElement.scrollTop < 100 || document.body.scrollTop < 100) {
			setColor("navbar-transparent")
		}
	}

	const toggleCollapse = () => {
		document.documentElement.classList.toggle("nav-open")

		setCollapseOpen(!collapseOpen)
	}

	const onCollapseExiting = () => {
		setCollapseOut("collapsing-out")
	}

	const onCollapseExited = () => {
		setCollapseOut("")
	}

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			left: 0,
		})

		toggleCollapse()
	}

	return (
		<>
			<ReactstraptNavbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
				<Container>
					<div className="navbar-translate">
						<NavbarBrand
							id="Home"
							data-placement="bottom"
							to="/"
							tag={Link}
							onClick={scrollUp}
						>
							<span>Gonzalo Salvador Corvalán</span>
						</NavbarBrand>
						<button
							aria-expanded={collapseOpen}
							className="navbar-toggler navbar-toggler"
							onClick={toggleCollapse}
						>
							<span className="navbar-toggler-bar bar1" />
							<span className="navbar-toggler-bar bar2" />
							<span className="navbar-toggler-bar bar3" />
						</button>
					</div>
					<Collapse
						className={"justify-content-end " + collapseOut}
						navbar
						isOpen={collapseOpen}
						onExiting={onCollapseExiting}
						onExited={onCollapseExited}
					>
						<div className="navbar-collapse-header">
							<Row>
								<Col className="collapse-brand" xs="6">
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										Opciones
									</a>
								</Col>
								<Col className="collapse-close text-right" xs="6">
									<button
										aria-expanded={collapseOpen}
										className="navbar-toggler"
										onClick={toggleCollapse}
									>
										<i className="tim-icons icon-simple-remove" />
									</button>
								</Col>
							</Row>
						</div>
						<Nav navbar>
							<NavItem className="p-0">
								<NavLink
									id="linkedin"
									href="https://www.linkedin.com/in/gonzalo-salvador-corvalan"
									target="_blank"
									onClick={scrollUp}
								>
									<i className="fab fa-linkedin" />
									<p className="d-lg-none d-xl-none">Linkedin</p>
								</NavLink>
							</NavItem>

							<NavItem className="p-0">
								<NavLink
									id="github"
									href="https://github.com/TheMrCorvy"
									target="_blank"
									onClick={scrollUp}
								>
									<i className="fab fa-github" />
									<p className="d-lg-none d-xl-none">GitHub</p>
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									className="btn btn-link"
									tag={Link}
									to="/mi-cv"
									id="CV"
									onClick={scrollUp}
								>
									Mi CV
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className="btn btn-link"
									tag={Link}
									to="/beneficios"
									id="beneficios"
									onClick={scrollUp}
								>
									Qué beneficios me trae?
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className="btn btn-link"
									tag={Link}
									to="/pricing"
									id="pricing"
									onClick={scrollUp}
								>
									Paquetes y Servicios
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>

				<UncontrolledTooltip placement="bottom" target="CV" delay={0}>
					{/*el delay en milisegundos */}
					Más información acerca de mí
				</UncontrolledTooltip>

				<UncontrolledTooltip placement="bottom" target="beneficios" delay={0}>
					Echá un vistazo
				</UncontrolledTooltip>

				<UncontrolledTooltip placement="bottom" target="pricing" delay={0}>
					{/*el delay en milisegundos */}
					¿Qúe servicios ofrezco?
				</UncontrolledTooltip>

				<UncontrolledTooltip placement="bottom" target="linkedin" delay={0}>
					Visitá mi Linkedin
				</UncontrolledTooltip>

				<UncontrolledTooltip placement="bottom" target="github" delay={0}>
					Revisá mi GitHub
				</UncontrolledTooltip>

				<UncontrolledTooltip placement="bottom" target="Home" delay={0}>
					Home Page
				</UncontrolledTooltip>
			</ReactstraptNavbar>
		</>
	)
}

export default Navbar
