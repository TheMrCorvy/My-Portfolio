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

class WebsiteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enviando: false,
            colorMensaje: "default",
            mensajeRecurso: "",
            nombreSitio: "",
            urlSitio: "",
            imgSitio: "(Ejemplo: corvalangonzalo)",
            websiteGitUrl: ""
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
            urlRecurso: 'website',
            userToken: localStorage.getItem("usertoken"),
            nombre: this.state.nombreSitio,
            url: this.state.urlSitio,
            img: this.state.imgSitio,
            gitUrl: this.state.websiteGitUrl
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
                    <CardTitle><h1 className="h1 text-capitalize text-neutral">añadir un sitio web</h1></CardTitle>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        placeholder="Nombre del Sitio Web"
                                        onChange={e => {this.handleChange(e)}}
                                        name="nombreSitio"
                                        value={this.state.nombreSitio}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        placeholder="URL del Sitio Web"
                                        type="text"
                                        onChange={this.handleChange}
                                        name="urlSitio"
                                        value={this.state.urlSitio}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        placeholder="Ruta a la Imágen del Sitio Web"
                                        onChange={e => {this.handleChange(e)}}
                                        name="imgSitio"
                                        value={this.state.imgSitio}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        placeholder="URL al repositorio de GitHub"
                                        type="text"
                                        onChange={this.handleChange}
                                        name="websiteGitUrl"
                                        value={this.state.websiteGitUrl}
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

export default WebsiteForm