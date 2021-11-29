import React from "react"

const MyKnowledge = () => {
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
									<a className="btn btn-info btn-link" href="javascript:;">
										Explore now <i className="tim-icons icon-minimal-right"></i>{" "}
									</a>
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
									<a className="btn btn-info btn-link" href="javascript:;">
										Explore now <i className="tim-icons icon-minimal-right"></i>{" "}
									</a>
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
										When it comes to designing interfaces, I have an extensive
										experience in Design Frameworks, such as ReactJS' Material
										UI, and Bootstrap (including their older and newer
										versions).
									</p>
									<a className="btn btn-info btn-link" href="javascript:;">
										Explore now <i className="tim-icons icon-minimal-right"></i>{" "}
									</a>
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
									<a className="btn btn-info btn-link" href="javascript:;">
										Explore now <i className="tim-icons icon-minimal-right"></i>{" "}
									</a>
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
									<a className="btn btn-info btn-link" href="javascript:;">
										Explore now <i className="tim-icons icon-minimal-right"></i>{" "}
									</a>
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
