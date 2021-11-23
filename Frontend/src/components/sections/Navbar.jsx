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

import LoginModal from "./LoginModal"

const Navbar = () => {
	const [collapseOpen, setCollapseOpen] = useState(false)
	const [open, setOpen] = useState(false)
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

	const toggleModal = () => {
		setOpen(!open)
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
							<span>Home</span>
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
										Options
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
							<NavItem>
								<NavLink
									className="btn btn-link"
									tag={Link}
									to="/mi-cv"
									id="CV"
									onClick={scrollUp}
								>
									My CV
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className="btn btn-link"
									tag={Link}
									to="/about-me"
									id="about-me"
									onClick={scrollUp}
								>
									About Me
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="btn btn-link" id="login" onClick={toggleModal}>
									Login
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>

				<UncontrolledTooltip placement="bottom" target="CV" delay={0}>
					Know more about my professional experience
				</UncontrolledTooltip>

				<UncontrolledTooltip placement="bottom" target="about-me" delay={0}>
					My hobbies, things I like, and more
				</UncontrolledTooltip>

				<UncontrolledTooltip placement="bottom" target="login" delay={0}>
					Only Admins allowed!
				</UncontrolledTooltip>
			</ReactstraptNavbar>

			<LoginModal toggleModalLogin={toggleModal} modalLogin={open} />
		</>
	)
}

export default Navbar
