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
    Label,
    Alert
} from "reactstrap"

import {GenerateResource} from "components/Ajax/AjaxAirport"

class AnimesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animeTitulo: "",
            animeMundo: "",
            animePeriodo: "",
            animeDescripcion: "",
            animeFinal: false,
            enviando: false,
            colorMensaje: "default",
            mensajeRecurso: "",
            // animeId: "",
        }

        this.handleChange = this.handleChange.bind(this);//mucho muy importante
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
            urlRecurso: 'anime',
            // idAnime: this.state.animeId,
            titulo: this.state.animeTitulo,
            descripcion: this.state.animeDescripcion,
            periodo: this.state.animePeriodo,
            mundo: this.state.animeMundo,
            final: this.state.animeFinal,
            userToken: localStorage.getItem("usertoken")
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
                <CardHeader>
                    <CardTitle><h1 className="h1 text-capitalize text-neutral">añadir un anime</h1></CardTitle>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        type="text"
                                        placeholder="Título"
                                        onChange={e => {this.handleChange(e)}}
                                        name="animeTitulo"
                                        value={this.state.animeTitulo}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        placeholder="Periodo Visto"
                                        type="text"
                                        onChange={this.handleChange}
                                        name="animePeriodo"
                                        value={this.state.animePeriodo}
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
                                        onChange={this.handleChange}
                                        name="animeDescripcion"
                                        value={this.state.animeDescripcion}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row className="mt-3 mb-3">
                            <Col md="6">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" onClick={this.setFinal}/>
                                            ¿Tiene Final?
                                            <span className="form-check-sign">
                                            <span className="check"></span>
                                        </span>
                                    </Label>
                                </FormGroup>
                            </Col>

                            {/* <Col md="3">
                                <FormGroup>
                                    <Input
                                        placeholder="ID"
                                        type="text"
                                        onChange={this.handleChange}
                                        name="animeId"
                                        value={this.state.animeId}
                                    />
                                </FormGroup>
                            </Col> */}

                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        placeholder="Mundo"
                                        type="text"
                                        onChange={this.handleChange}
                                        name="animeMundo"
                                        value={this.state.animeMundo}
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

export default AnimesForm