import React from "react"

import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Container, Row, Col, CardHeader, UncontrolledTooltip, } from 'reactstrap';

import { Link } from "react-router-dom";

function InfoPrecioFinal(props){

    return(
        <React.Fragment>
            <Container style={{paddingTop: "10rem", paddingBottom: "10rem"}}>
                <Row>
                    <Col md="12" className="d-flex justify-content-center">
                        <Card style={{maxWidth: '50rem'}} className="px-3 py-3">
                            <CardHeader className="d-flex justify-content-between">
                                <CardTitle className="h1 text-warning font-weight-bold text-capitalize">Cómo se calcula el precio final?</CardTitle>
                                <i className="tim-icons icon-alert-circle-exc text-warning" />
                            </CardHeader>
                            <CardBody>
                                <CardText className="text-info" style={{lineHeight: "1.5"}}>
                                    Todos los precios se calculan como añadidos a un proyecto base. De ésta forma, si quisieras una aplicación web simple (MPA Laravel por ejemplo) para que muestre contenido dinámico, que tú mísmo puedas administrar, y que contenga un formulario para que tus usuarios te envíen Emails, entonces deberás sumar:
                                </CardText>
                                <CardSubtitle className="my-3 text-neutral font-weight-bold">
                                        Costos de mantenimiento mensual
                                </CardSubtitle>
                                <CardText className="text-info my-3" style={{lineHeight: "1.5"}}>
                                    El precio del dominio que elijas + el precio de hosting de MPA Laravel ($ 400) + el precio del servicio de Emails ($ 300) + el servicio del proyecto autoadministrable ($1.000).
                                </CardText>
                                <CardText className="text-info my-3">
                                    Ésto daría un total de $ 1700 pesos mensuales + los $ 6.000 que cuesta la aplicación web por sí sola.
                                </CardText>
                                <CardText className="text-info my-3">
                                    (Ten en cuenta que los costos mensuales y/o de la aplicación <u>VARIARÁN</u> dependiendo de las necesidades de cada cliente y puede resultar siendo más barato o más caro, esto es solo un ejemplo)
                                </CardText>
                                <CardLink id="CardInfoPrecioFinal" to="/beneficios" tag={Link} className="font-weight-bold text-capitalize" style={{margin: "auto"}} onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        left: 0
                                    })
                                }}><u>es muy caro, por qué debería pagarlo?</u></CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <UncontrolledTooltip delay={0} placement="bottom" target="CardInfoPrecioFinal">
                Click para ver en qué te beneficia
            </UncontrolledTooltip>
        </React.Fragment>
    )
}

export default InfoPrecioFinal;