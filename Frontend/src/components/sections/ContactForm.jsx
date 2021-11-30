import React, { useState } from "react"

import { Col, Container, Row, Alert } from "reactstrap"

import emailjs from "emailjs-com"

const ContactForm = () => {
	const [formData, setFormData] = useState({
		from_name: "",
		from_email: "",
		from_company: "",
		message: "",
	})

	const [loadingState, setLoadingState] = useState("") // loading, error, success

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		setLoadingState("loading")

		emailjs
			.sendForm("service_b4s3gs9", "template_89o8c9l", e.target, "user_mMNITIgF6TFcu7x2W2gCo")
			.then(
				(res) => {
					setLoadingState("success")
					console.log(res)
				},
				(error) => {
					setLoadingState("error")
					console.log(error)
				}
			)
	}
	return (
		<Container id="contact-section">
			<Row className="justify-content-center">
				<div className="col-md-12 m-auto">
					<div className="card card-contact card-raised" style={{ borderRadius: 10 }}>
						<div className="row">
							<div className="col-md-7">
								<form className="p-3" onSubmit={(e) => handleSubmit(e)}>
									<div className="card-header">
										<h4 className="card-title">Send me a message</h4>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-md-6">
												<label>Your Name</label>
												<div className="input-group">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="tim-icons icon-single-02"></i>
														</span>
													</div>
													<input
														type="text"
														className="form-control"
														placeholder="Your Name..."
														aria-label="Your Name..."
														name="from_name"
														value={formData.from_name}
														onChange={(e) => handleChange(e)}
													/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Company</label>
													<div className="input-group">
														<div className="input-group-prepend">
															<span className="input-group-text">
																<i className="tim-icons icon-caps-small"></i>
															</span>
														</div>
														<input
															type="text"
															className="form-control"
															placeholder="Company..."
															aria-label="Company..."
															value={formData.from_company}
															onChange={(e) => handleChange(e)}
															name="from_company"
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="form-group">
											<label>Email address</label>
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="tim-icons icon-email-85"></i>
													</span>
												</div>
												<input
													type="text"
													className="form-control"
													placeholder="Email Here..."
													name="from_email"
													value={formData.from_email}
													onChange={(e) => handleChange(e)}
												/>
											</div>
										</div>
										<div className="form-group">
											<label>Your message</label>
											<textarea
												name="message"
												className="form-control"
												id="message"
												rows="6"
												name="message"
												onChange={(e) => handleChange(e)}
												value={formData.message}
											></textarea>
										</div>
										<div className="row">
											<div className="col-xs-12">
												<button
													type="submit"
													className="btn btn-primary btn-round pull-right"
												>
													Send Message
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className="col-md-5">
								<div className="text-left bg-info my-custom-class-hjshd h-100 py-4 px-3">
									<Row>
										<Col xs="12">
											<h4 className="card-title text-center">
												Contact information
											</h4>
										</Col>
										<Col xs="12">
											<div className="info-horizontal mt-5">
												<div
													className="icon"
													style={{ marginTop: 0, color: "#fff" }}
												>
													<i className="tim-icons icon-mobile"></i>
												</div>
												<div className="description">
													<h5 className="info-title">
														+54 9 11 5048-8031
													</h5>
												</div>
											</div>
										</Col>
										<Col xs="12">
											<div className="mt-5 info-horizontal mt-5">
												<div
													className="icon"
													style={{ marginTop: 0, color: "#fff" }}
												>
													<i className="tim-icons icon-email-85"></i>
												</div>
												<div className="description">
													<h5 className="info-title">
														mr.corvy@gmail.com
													</h5>
													<h5 className="info-title">
														gonzalosalvadorcorvalan@gmail.com
													</h5>
												</div>
											</div>
										</Col>
									</Row>
								</div>
							</div>
						</div>
					</div>
				</div>
				{loadingState === "loading" && (
					<Col xs="12" md="6" lg="4">
						<Alert color="info">Now loading... Please wait...</Alert>
					</Col>
				)}
				{loadingState === "error" && (
					<Col xs="12" md="6" lg="4">
						<Alert color="danger">Oops... Looks like something went wrong...</Alert>
					</Col>
				)}
				{loadingState === "success" && (
					<Col xs="12" md="6" lg="4">
						<Alert color="success">Success! Message was sent successfully.</Alert>
					</Col>
				)}
			</Row>
		</Container>
	)
}

export default ContactForm
