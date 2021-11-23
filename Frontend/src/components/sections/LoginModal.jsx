import React from "react"

import {
	Button,
	Modal,
	Card,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Form,
	Input,
	CardBody,
	CardTitle,
	CardImg,
	CardHeader,
	CardFooter,
} from "reactstrap"

const LoginModal = ({ toggleModalLogin, modalLogin }) => {
	return (
		<Modal
			isOpen={modalLogin}
			toggle={toggleModalLogin}
			modalClassName="modal-login"
			style={{ borderRadius: 10 }}
		>
			<Card className="card-login" style={{ margin: 0 }}>
				<Form action="" className="form" method="">
					<CardHeader
						style={{ minHeight: "10rem", position: "relative", overflow: "hidden" }}
					>
						<CardImg
							alt="..."
							src={require("../../assets/img/square-purple-1.png")}
							style={{
								position: "absolute",
								marginLeft: "-50px",
								marginTop: "-220px",
								borderRadius: "20%",
								borderBottomLeftRadius: 0,
								width: "350px",
								flexShrink: "0",
								maxWidth: "100%",
							}}
						/>
						<CardTitle
							tag="h4"
							style={{
								position: "absolute",
								fontSize: "5em",
								fontWeight: 900,
								color: "#222a42",
								marginLeft: "-5px",
								zIndex: 1,
								top: 0,
								left: 10,
							}}
						>
							Login
						</CardTitle>
						<button
							aria-label="Close"
							className="close"
							data-dismiss="modal"
							type="button"
							onClick={toggleModalLogin}
							style={{ color: "#fff" }}
						>
							<i className="tim-icons icon-simple-remove" />
						</button>
					</CardHeader>
					<CardBody>
						<InputGroup className="input-lg">
							<InputGroupAddon addonType="prepend">
								<InputGroupText>
									<i className="tim-icons icon-single-02" />
								</InputGroupText>
							</InputGroupAddon>
							<Input placeholder="Email" type="email" />
						</InputGroup>
						<InputGroup className="input-lg">
							<InputGroupAddon addonType="prepend">
								<InputGroupText>
									<i className="tim-icons icon-lock-circle" />
								</InputGroupText>
							</InputGroupAddon>
							<Input placeholder="Password" type="password" />
						</InputGroup>
					</CardBody>
					<CardFooter className="text-center">
						<Button
							block
							className="btn-round"
							color="info"
							href="#pablo"
							onClick={(e) => e.preventDefault()}
							size="lg"
						>
							Login
						</Button>
					</CardFooter>
				</Form>
			</Card>
		</Modal>
	)
}

export default LoginModal
