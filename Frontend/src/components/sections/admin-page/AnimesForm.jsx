import React, { useState } from "react"

import {
	Button,
	FormGroup,
	Form,
	Input,
	Card,
	CardBody,
	Row,
	Col,
	CardHeader,
	CardTitle,
	Label,
	Alert,
} from "reactstrap"

const AnimesForm = () => {
	const [formState, setFormState] = useState({
		name: "",
		position: 0,
		date: "",
		description: "",
		disk: "",
		hasEnd: false,
	})

	const [loadingState, setLoadingState] = useState("")

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		setLoadingState("loading")

		setTimeout(() => {
			setLoadingState("error")

			setTimeout(() => {
				setLoadingState("success")
			}, 3000)
		}, 3000)

		console.log(formState)
	}

	const setHasEnd = () => {
		setFormState({
			...formState,
			hasEnd: !formState.hasEnd,
		})
	}

	const displayLoading = () => {
		switch (loadingState) {
			case "loading":
				return <Alert color="info">Cargando...</Alert>
			case "error":
				return <Alert color="danger">Error tratando de añadir el Anime.</Alert>
			case "success":
				return <Alert color="success">Anime agregado con éxito.</Alert>

			default:
				return null
		}
	}

	return (
		<>
			<Card className="card-plain">
				<CardHeader>
					<CardTitle>
						<h1 className="h1 text-capitalize text-neutral">añadir un anime</h1>
					</CardTitle>
				</CardHeader>
				<CardBody>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col md="6">
								<FormGroup>
									<Input
										type="text"
										placeholder="Título"
										onChange={handleChange}
										name="name"
										value={formState.name}
									/>
								</FormGroup>
							</Col>

							<Col md="6">
								<FormGroup>
									<Input
										placeholder="Periodo Visto"
										type="text"
										onChange={handleChange}
										name="date"
										value={formState.date}
									/>
								</FormGroup>
							</Col>
						</Row>

						<Row>
							<Col md="12">
								<FormGroup>
									<Input
										placeholder="Descripción"
										type="textarea"
										onChange={handleChange}
										name="description"
										value={formState.description}
									/>
								</FormGroup>
							</Col>
						</Row>

						<Row className="mt-3 mb-3">
							<Col md="6">
								<FormGroup check>
									<Label check>
										<Input type="checkbox" onClick={setHasEnd} />
										¿Tiene Final?
										<span className="form-check-sign">
											<span className="check"></span>
										</span>
									</Label>
								</FormGroup>
							</Col>
							<Col md="6">
								<FormGroup>
									<Input
										placeholder="Disco (opcional)"
										type="text"
										onChange={handleChange}
										name="disk"
										value={formState.disk}
									/>
								</FormGroup>
							</Col>
						</Row>
						<Button
							className="btn float-right"
							color="info"
							data-placement="right"
							type="submit"
						>
							Añadir
						</Button>
					</Form>
				</CardBody>
				{displayLoading()}
			</Card>
		</>
	)
}

export default AnimesForm
