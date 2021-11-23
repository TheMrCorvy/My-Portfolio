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

import {GenerateResource} from "components/Ajax/AjaxAirport"

class DomainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enviando: false,
            colorMensaje: "default",
            mensajeRecurso: "",
            tituloPrincipalDominio: "",
            precioDominio: "Precio: (pesos) $",
            tituloSecundarioDominio: "",
            textoInfoDominio: "",
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
            urlRecurso: 'dominio',
            userToken: localStorage.getItem("usertoken"),
            tituloPrincipal: this.state.tituloPrincipalDominio,
            tituloSecundario: this.state.tituloSecundarioDominio,
            textoInfo: this.state.textoInfoDominio,
            precio: this.state.precioDominio
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
                    <CardTitle><h1 className="h1 text-capitalize text-neutral">añadir un producto: dominio</h1></CardTitle>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        placeholder="Título Principal"
                                        onChange={e => {this.handleChange(e)}}
                                        name="tituloPrincipalDominio"
                                        value={this.state.tituloPrincipalDominio}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md="4">
                                <FormGroup>
                                    <Input
                                        placeholder="Título Secundario"
                                        type="text"
                                        onChange={this.handleChange}
                                        name="tituloSecundarioDominio"
                                        value={this.state.tituloSecundarioDominio}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md="4">
                                <FormGroup>
                                    <Input
                                        placeholder="Precio"
                                        type="text"
                                        onChange={this.handleChange}
                                        name="precioDominio"
                                        value={this.state.precioDominio}
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
                                        name="textoInfoDominio"
                                        value={this.state.textoInfoDominio}
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

export default DomainForm