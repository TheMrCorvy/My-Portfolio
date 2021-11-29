import React from "react"

import { Container, Row, Col } from "reactstrap"

const Office = () => {
	return (
		<Container className="mt-5" style={{ paddingTop: "10vw" }}>
			<Row className="justify-content-center">
				<Col lg="12">
					<h1 className="text-center text-neutral" style={{ lineHeight: "1.5em" }}>
						I also have experience using the following Microsoft Office tools
					</h1>
					<Row className="row-grid justify-content-center">
						<Col md="6">
							<div className="info" style={{ paddingTop: "15%" }}>
								<div className="icon icon-info">
									<i className="tim-icons icon-caps-small" />
								</div>
								<h4 className="info-title">Word</h4>
								<hr className="line-info" />
								<p>
									The computer program for word processing that it's used to write
									and edit texts for any purpose, be it academic, professional,
									amateur, etc. It has a complete package of tools that allows
									modifying the format of a writing. These tools allow you to
									modify the type or size of the font to the design of the page,
									as well as the inclusion of graphic elements such as pictures or
									tables.
								</p>
							</div>
						</Col>
						<Col md="6">
							<div className="info" style={{ paddingTop: "15%" }}>
								<div className="icon icon-success">
									<i className="tim-icons icon-chart-bar-32" />
								</div>
								<h4 className="info-title">Excel</h4>
								<hr className="line-success" />
								<p>
									The most widely used spreadsheet in the world. This application
									is focuses primarily on performing accounting tasks as well as
									financial. It comes with graphical tools, tables dynamics, even
									a macro programming language called Visual Basic. In it you can
									perform basic arithmetic calculations, apply more complex
									mathematical functions, or use statistical functions.
								</p>
							</div>
						</Col>
						<Col md="6">
							<div className="info" style={{ paddingTop: "15%" }}>
								<div className="icon icon-warning">
									<i className="tim-icons icon-image-02" />
								</div>
								<h4 className="info-title">Power Point</h4>
								<hr className="line-warning" />
								<p>
									The quintessential program for making presentations quickly and
									efficiently, with slides and other effects. It is a program
									designed to make presentations with outlined text, as well as
									visually appealing presentations, text animations and clipart or
									imported from images from the computer, and that facilitates the
									application of different designs font, template and animation,
									etc.
								</p>
							</div>
						</Col>

						<Col md="6">
							<div className="info" style={{ paddingTop: "15%" }}>
								<div className="icon icon-info">
									<i className="tim-icons icon-email-85" />
								</div>
								<h4 className="info-title">Outlook</h4>
								<hr className="line-info" />
								<p>
									An application to manage personal information that includes in a
									single place, the information of the contacts, calendar events,
									as well as an email manager. All of this makes it an ideal
									application to manage, in an organized way, the administrative
									field of a company. Through Outlook can manage extensive volumes
									of emails, as well as creating emails that attract attention
									thanks to the fact that it can be combined with the others
									Microsoft Office tools.
								</p>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default Office
