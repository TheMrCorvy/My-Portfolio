import React from "react"

import {
	Button,
	FormGroup,
	Form,
	Input,
	Card,
	CardBody,
	Row,
	Col,
	UncontrolledTooltip,
	Alert,
} from "reactstrap"

import {} from "reactstrap"

import { Contacto } from "../Ajax/AjaxAirport"

class FormLogin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			focused: "",
			form: {
				nombreForm: "",
				emailForm: "",
				telefonoForm: "",
				empresaForm: "",
				consultaForm: "",
			},
			enviando: false,
			colorMensaje: "default",
			mensajeContacto: "",
		}
	}
	onFocus = () => {
		this.setState({
			focused: "input-group-focus",
		})
	}

	onBlur = () => {
		this.setState({
			focused: "",
		})
	}

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
			enviando: true,
			colorMensaje: "info",
			mensaje: "Su consulta se está enviando, por favor espere...",
		})
		this.enviarConsulta()
	}

	enviarConsulta = async () => {
		const urlConsulta = "v2/CorvalanGonzalo/GetPage/Contacto"

		const consulta = {
			name: this.state.form.nombreForm,
			email: this.state.form.emailForm,
			phone: this.state.form.telefonoForm,
			company: this.state.form.empresaForm,
			question: this.state.form.consultaForm,
		}

		const resultado = await Contacto(urlConsulta, consulta)

		if (resultado) {
			this.setState({
				colorMensaje: "success",
				mensaje: "Su consulta fue enviada correctamente.",
			})
		} else {
			this.setState({
				colorMensaje: "danger",
				mensaje:
					'Su consulta no pudo ser enviada. Revise que todos los campos están completos (el campo "empresa" es opcional). Si esto continua sucediendo, vualva a intentarlo en unas horas.',
			})
		}
	}

	render() {
		return (
			<Card className="card-plain">
				<CardBody>
					<Form onSubmit={this.handleSubmit}>
						<Row>
							<Col md="6">
								<FormGroup>
									<label>Ingresá tu Nombre</label>
									<Input
										type="text"
										placeholder="Nombre"
										onChange={this.handleChange}
										name="nombreForm"
										value={this.state.form.nombreForm}
									/>
								</FormGroup>
							</Col>

							<Col md="6">
								<FormGroup>
									<label>Ingresá tu Email</label>
									<Input
										placeholder="Email"
										type="email"
										onChange={this.handleChange}
										name="emailForm"
										value={this.state.form.emailForm}
									/>
								</FormGroup>
							</Col>
						</Row>

						<Row>
							<Col md="6">
								<FormGroup>
									<label>Ingresá un teléfono de contacto</label>
									<Input
										placeholder="Teléfono"
										type="text"
										onChange={this.handleChange}
										name="telefonoForm"
										value={this.state.form.telefonoForm}
									/>
								</FormGroup>
							</Col>

							<Col md="6">
								<FormGroup>
									<label>Ingresá el nombre de tu empresa</label>
									<Input
										placeholder="Empresa"
										type="text"
										onChange={this.handleChange}
										name="empresaForm"
										value={this.state.form.empresaForm}
										id="empresaForm"
									/>
								</FormGroup>
							</Col>
						</Row>

						<Row>
							<Col md="12">
								<FormGroup>
									<label>Ingresá tu consulta</label>
									<Input
										placeholder="Consulta"
										type="textarea"
										onChange={this.handleChange}
										name="consultaForm"
										value={this.state.form.consultaForm}
									/>
								</FormGroup>
							</Col>
						</Row>
						<Button
							className="btn-round float-right"
							color="primary"
							data-placement="right"
							id="tooltip341148792"
							type="submit"
						>
							Enviar
						</Button>

						<UncontrolledTooltip delay={0} placement="right" target="tooltip341148792">
							Eviar Consulta Ahora
						</UncontrolledTooltip>

						<UncontrolledTooltip delay={0} placement="bottom" target="empresaForm">
							Opcional
						</UncontrolledTooltip>
					</Form>
				</CardBody>
				{this.state.enviando && (
					<Alert color={this.state.colorMensaje}>{this.state.mensaje}</Alert>
				)}
			</Card>
		)
	}
}

export default FormLogin
