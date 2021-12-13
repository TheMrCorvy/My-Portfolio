import React from "react"

import { Link } from "react-router-dom"

const MyKnowledge = ({ alt }) => {
	return (
		<>
			<div style={{ paddingTop: "10vw" }}>
				<div className="container" style={{ paddingBottom: "1.5rem" }}>
					<div className="row">
						<div className="col-md-6 mr-auto ml-auto">
							<h1 className="title">My Technical Knowledge</h1>
							<h4 className="description">
								My technical knowledge of programming includes the following
								sections / environments:
							</h4>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5 ml-auto">
							<div
								className="info-horizontal"
								style={{
									paddingTop: 80,
									paddingLeft: "1rem",
									paddingRight: "1rem",
								}}
							>
								<div className="icon icon-success">
									<img
										alt="..."
										className="bg-blob"
										style={{
											marginLeft: -15,
											position: "absolute",
											opacity: 0.2,
											width: 56,
											marginTop: -30,
										}}
										src="/images/success-blob.png"
									/>
									<i className="tim-icons icon-html5"></i>
								</div>
								<div className="description" style={{ paddingLeft: 10 }}>
									<h3 className="info-title">Frontend</h3>
									<p>My main focus is the Frontend Development.</p>
									<br />
									<p>
										I am an experienced Frontend Programmer. Well versed in
										React-based technologies, such as React-JS, nextJS, among
										other similar frameworks and libraries.
									</p>
									<br />
									<p>
										I am also very skilled in what developing progressive web
										apps concerns.
									</p>
									{!alt && (
										<Link
											to="/my-cv"
											onClick={() =>
												window.scrollTo({
													top: 0,
													left: 0,
												})
											}
											className="btn btn-info btn-link"
										>
											Explore more{" "}
											<i className="tim-icons icon-minimal-right"></i>{" "}
										</Link>
									)}
								</div>
							</div>
						</div>
						<div className="col-md-5 mr-auto">
							<div
								className="info-horizontal"
								style={{
									paddingTop: 80,
									paddingLeft: "1rem",
									paddingRight: "1rem",
								}}
							>
								<div className="icon icon-warning">
									<img
										alt="..."
										className="bg-blob"
										style={{
											marginLeft: -15,
											position: "absolute",
											opacity: 0.2,
											width: 56,
											marginTop: -30,
										}}
										src="/images/warning-blob.png"
									/>
									<i className="tim-icons icon-cloud-download-93"></i>
								</div>
								<div className="description" style={{ paddingLeft: 10 }}>
									<h3 className="info-title">Backend</h3>
									<p>Much of my experience is on the Backend side.</p>
									<br />
									<p>
										I started my studies in Backend with the PHP language, in
										order to later learn its well known framework, Laravel.
									</p>
									<br />
									<p>
										Nowadays I have learned Node JS, and when I work in Backend,
										I usually make use of ExpressJS.
									</p>
									{!alt && (
										<Link
											to="/my-cv"
											onClick={() =>
												window.scrollTo({
													top: 0,
													left: 0,
												})
											}
											className="btn btn-info btn-link"
										>
											Explore more{" "}
											<i className="tim-icons icon-minimal-right"></i>{" "}
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5 ml-auto">
							<div
								className="info-horizontal"
								style={{
									paddingTop: 80,
									paddingLeft: "1rem",
									paddingRight: "1rem",
								}}
							>
								<div className="icon icon-primary">
									<img
										alt="..."
										className="bg-blob"
										style={{
											marginLeft: -15,
											position: "absolute",
											opacity: 0.2,
											width: 56,
											marginTop: -30,
										}}
										src="/images/primary-blob.png"
									/>
									<i className="tim-icons icon-mobile"></i>
								</div>
								<div className="description" style={{ paddingLeft: 10 }}>
									<h3 className="info-title">UI / UX Design Frameworks</h3>
									<p>
										When it comes to developing interfaces, I have vast
										experience in Design Frameworks, such as Material UI for
										React, and Bootstrap (including their older and newer
										versions), as well as working with plain CSS, Styled
										Components, and CSS in JS.
									</p>
									{!alt && (
										<Link
											to="/my-cv"
											onClick={() =>
												window.scrollTo({
													top: 0,
													left: 0,
												})
											}
											className="btn btn-info btn-link"
										>
											Explore more{" "}
											<i className="tim-icons icon-minimal-right"></i>{" "}
										</Link>
									)}
								</div>
							</div>
						</div>
						<div className="col-md-5 mr-auto">
							<div
								className="info-horizontal"
								style={{
									paddingTop: 80,
									paddingLeft: "1rem",
									paddingRight: "1rem",
								}}
							>
								<div className="icon icon-info">
									<img
										alt="..."
										className="bg-blob"
										style={{
											marginLeft: -15,
											position: "absolute",
											opacity: 0.2,
											width: 56,
											marginTop: -30,
										}}
										src="/images/info-blob.png"
									/>
									<i className="tim-icons icon-paper"></i>
								</div>
								<div className="description" style={{ paddingLeft: 10 }}>
									<h3 className="info-title">Testing</h3>
									<p>
										Regarding Testing, I have experience performing Unit Testing
										both to Backend APIs, as well as in the Frontend (including
										the handling of States, and behaviors of the user
										interface).
									</p>
									{!alt && (
										<Link
											to="/my-cv"
											onClick={() =>
												window.scrollTo({
													top: 0,
													left: 0,
												})
											}
											className="btn btn-info btn-link"
										>
											Explore more{" "}
											<i className="tim-icons icon-minimal-right"></i>{" "}
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-5">
							<div
								className="info-horizontal"
								style={{
									paddingTop: 80,
									paddingLeft: "1rem",
									paddingRight: "1rem",
								}}
							>
								<div className="icon icon-danger">
									<img
										alt="..."
										className="bg-blob"
										style={{
											marginLeft: -15,
											position: "absolute",
											opacity: 0.2,
											width: 56,
											marginTop: -30,
										}}
										src="/images/danger-blob.png"
									/>
									<i className="tim-icons icon-chart-pie-36"></i>
								</div>
								<div className="description" style={{ paddingLeft: 10 }}>
									<h3 className="info-title">Databases</h3>
									<p>
										On the database side, I have experience working with MySQL,
										as well as MongoDB.
									</p>
									{!alt && (
										<Link
											to="/my-cv"
											onClick={() =>
												window.scrollTo({
													top: 0,
													left: 0,
												})
											}
											className="btn btn-info btn-link"
										>
											Explore more{" "}
											<i className="tim-icons icon-minimal-right"></i>{" "}
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MyKnowledge
