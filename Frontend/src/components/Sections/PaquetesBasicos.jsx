import React from 'react'

import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, ListGroup, ListGroupItem, Button, UncontrolledTooltip } from 'reactstrap'

import { Link } from "react-router-dom"

function PaquetesBasicos (props) {
    let url = window.location.href //obtengo la url actual
    let urlPartida = url.split('/')
    return (
            <Container className={props.className}>
              <Row className="mb-5 pb-5">
                <Col md="4">
                  <hr className="line-info" />
                  <h1 style={{ lineHeight: "1.2" }}>
                    Elegí el combo{" "}
                    <span className="text-info">que mejor se adapte a lo que necesitás</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Combo Básico</h4>
                          <span>Plan Personal Profile</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>Web App de formato SPA</ListGroupItem>
                          <ListGroupItem>Dominio .com.ar</ListGroupItem>
                          <ListGroupItem>Hosting Low Cost</ListGroupItem>
                          <ListGroupItem><s>Servicio de Emails</s></ListGroupItem>
                          <ListGroupItem><s>Autoadministrable</s></ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Link className="font-weight-bold text-success mt-5" to="/pricing/combo-basico" onClick={() => {
                              window.scrollTo({
                                top: 0,
                                left: 0
                              })
                            }}>
                          <Button className="btn-simple" color="success" to="/pricing/combo-basico" id="masinfo1">
                              Más info
                          </Button>
                        </Link>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/ripp.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Combo Medio</h4>
                          <span>Plan Blog</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>Web App de formato SPA</ListGroupItem>
                          <ListGroupItem>Dominio .com.ar</ListGroupItem>
                          <ListGroupItem>Servicio de Emails</ListGroupItem>
                          <ListGroupItem>Autoadministrable</ListGroupItem>
                          <ListGroupItem>Contenido dinámico</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Link className="font-weight-bold text-info mt-5" to="/pricing/combo-medio" onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0
                              })
                            }}>
                          <Button className="btn-simple" color="info" id="masinfo2">
                              Más info
                          </Button>
                        </Link>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/bitcoin.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Combo Grande</h4>
                          <span>Plan E-comerce</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>Web App de formato SPA</ListGroupItem>
                          <ListGroupItem>Dominio .com.ar o personalizado</ListGroupItem>
                          <ListGroupItem>Servicio de emails</ListGroupItem>
                          <ListGroupItem>Autoadministrable</ListGroupItem>
                          <ListGroupItem>Sistema de Login/Registro</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Link className="font-weight-bold text-primary mt-5" to="/pricing/combo-grande" onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0
                              })
                            }}>
                          <Button className="btn-simple" color="primary" id="masinfo3">
                              Más info
                          </Button>
                        </Link>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              {urlPartida[3] !== 'pricing' &&
              <Row className="mb-5 pb-5">
                <Col md="4">
                  <Link className="font-weight-bold text-info mt-5" to="/pricing" onClick={() => {
                            window.scrollTo({
                              top: 0,
                              left: 0
                            })
                          }}>
                            Más info en la sección de Pricing
                            <i className="tim-icons icon-minimal-right text-info" />
                  </Link>
                </Col>
              </Row>
              }
              <UncontrolledTooltip placement="bottom" target="masinfo1" delay={0}>
                    ¿Qué incluye este paquete?
              </UncontrolledTooltip>

              <UncontrolledTooltip placement="bottom" target="masinfo2" delay={0}>
                    ¿Qué incluye este paquete?
              </UncontrolledTooltip>

              <UncontrolledTooltip placement="bottom" target="masinfo3" delay={0}>
                    ¿Qué incluye este paquete?
              </UncontrolledTooltip>

            </Container>
      )
}

export default PaquetesBasicos