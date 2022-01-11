import React, { useState } from "react"

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

import useApi from "../../hooks/useApi"

const LoginModal = ({ toggleModalLogin, modalLogin, onAuthSuccess }) => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	})

	const callApi = useApi

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const req = {
			method: "POST",
			endpoint: "/auth/login",
			body: form,
		}

		callApi(req).then((data) => {
			if (data.status === 200) {
				localStorage.setItem("token", data.token)

				onAuthSuccess()
			}
		})
	}

	return (
		<Modal
			isOpen={modalLogin}
			toggle={toggleModalLogin}
			modalClassName="modal-login"
			style={{ borderRadius: 10 }}
		>
			<Card className="card-login" style={{ margin: 0 }}>
				<Form action="" className="form" method="" onSubmit={handleSubmit}>
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
							<Input
								placeholder="Email"
								type="email"
								name="email"
								onChange={handleChange}
							/>
						</InputGroup>
						<InputGroup className="input-lg">
							<InputGroupAddon addonType="prepend">
								<InputGroupText>
									<i className="tim-icons icon-lock-circle" />
								</InputGroupText>
							</InputGroupAddon>
							<Input
								placeholder="Password"
								type="password"
								name="password"
								onChange={handleChange}
							/>
						</InputGroup>
					</CardBody>
					<CardFooter className="text-center">
						<Button block className="btn-round" color="info" type="submit" size="lg">
							Login
						</Button>
					</CardFooter>
				</Form>
			</Card>
		</Modal>
	)
}

export default LoginModal
