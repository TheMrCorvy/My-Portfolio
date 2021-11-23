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
    CardHeader,
    CardTitle,
    Alert
} from "reactstrap"

import {GenerateResource} from "../../Ajax/AjaxAirport"

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enviando: false,
            colorMensaje: "default",
            mensajeRecurso: "",
            tituloPrincipalProyecto: "",
            tituloSecundarioProyecto: "",
            textoInfoProyecto: "",
            costoProyecto: "Precio de la app: (pesos) $",
            costoMensualProyecto: "Precio del hosting: (pesos) $"
        }

        this.handleChange = this.handleChange.bind(this);//mucho muy importante para pasarle al handle change los datos
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit (event) {
        event.preventDefault();
        this.setState({
            enviando: true,
            colorMensaje: "info",
            mensajeRecurso: "Generando recurso..."
        })
        this.generateAnime()
    }

    generateAnime = async () => {
        const recurso = {
            urlRecurso: 'proyecto',
            userToken: localStorage.getItem("usertoken"),
            tituloPrincipal: this.state.tituloPrincipalProyecto,
            tituloSecundario: this.state.tituloSecundarioProyecto,
            textoInfo: this.state.textoInfoProyecto,
            costoMensual: this.state.costoMensualProyecto,
            costo: this.state.costoProyecto
        }
        const generating = await GenerateResource(recurso)

        if (generating) {
            this.setState({
                enviando: true,
                colorMensaje: "success",
                mensajeRecurso: "Recurso generado exitósamente!"
            })
        }
    }

    setFinal = () => {
        if (this.state.animeFinal) {
            this.setState({
                animeFinal: false
            })
        }else{
            this.setState({
                animeFinal: true
            })
        }
    }

    render() {
        return (
            <Card className="card-plain">
                <hr className="line-info" />
                <CardHeader>
                    <CardTitle><h1 className="h1 text-capitalize text-neutral">añadir un producto: Proyecto</h1></CardTitle>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        placeholder="Título Principal"
                                        onChange={e => {this.handleChange(e)}}
                                        name="tituloPrincipalProyecto"
                                        value={this.state.tituloPrincipalProyecto}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        placeholder="Título Secundario"
                                        type="text"
                                        onChange={this.handleChange}
                                        name="tituloSecundarioProyecto"
                                        value={this.state.tituloSecundarioProyecto}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        placeholder="Costo del Proyecto"
                                        onChange={e => {this.handleChange(e)}}
                                        name="costoProyecto"
                                        value={this.state.costoProyecto}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        placeholder="Costo Mensual (hosting)"
                                        type="text"
                                        onChange={this.handleChange}
                                        name="costoMensualProyecto"
                                        value={this.state.costoMensualProyecto}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <Input
                                        placeholder="Texto de Info"
                                        type="textarea"
                                        onChange={this.handleChange}
                                        name="textoInfoProyecto"
                                        value={this.state.textoInfoProyecto}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button className="btn float-right" color="info" data-placement="right" type="submit">Añadir</Button>
                    </Form>
                </CardBody>
                {this.state.enviando &&
                    <Alert color={this.state.colorMensaje}>{this.state.mensajeRecurso}</Alert>
                }
            </Card>
        )
    }
}

export default ProjectForm