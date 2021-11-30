import React from "react"

import { Col, Container, Row } from "reactstrap"

const ContactForm = () => {
	return (
		<>
			<Container>
				<Row>
					<div className="col-md-12 m-auto">
						<div className="card card-contact card-raised" style={{ borderRadius: 10 }}>
							<div className="row">
								<div className="col-md-7">
									<form className="p-3" id="contact-form" method="post">
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
				</Row>
			</Container>
		</>
	)
}

export default ContactForm
