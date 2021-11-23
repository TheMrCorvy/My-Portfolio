import React from "react"

import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap"

function DescripcionServicios () {
    return(
        <section className="section section-lg section-safe my-5">
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">ReactJS</CardTitle>
                          <p className="card-category text-white">
                            Tecnologías modernas
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">Laravel</CardTitle>
                          <p className="card-category text-white">excelente funcionamiento garantizado</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-primary">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">MySQL</CardTitle>
                          <p className="card-category text-white">Aplicaciones web rápidas y dinámicas</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">Bootstrap</CardTitle>
                          <p className="card-category text-white">Diseño 100% Responsive, elegante, y simple</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-warning">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">Escalable</CardTitle>
                          <p className="card-category text-white">Proyectos fáciles de mejorar y actualizar</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">seguridad</CardTitle>
                          <p className="card-category text-white">genere confianza en sus usuarios y clientes</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Satisfacción Garantizada</h3>
                    <h6>Diseño:</h6>
                    <p>
                      Todas las aplicaciones, ya sean páginas web, apps para smartphones, programas de escritorio, etc. Siempre deben contar con lo que se conoce como "Responsive Design". Esto es que el contenido a vender debe adaptarse al formato de pantalla en el que se esté consumiendo ya que por el contrario si, por ejemplo, un sitio web no se adapta al tamaño de pantalla de los smartphones, esto podría resultar en la perdida de clientes potenciales que ingresan desde sus celulares. Es por eso que todos los proyectos que están a su dispocición en este sitio web cumplen con esta función sin tener que pagar un extra por separado del precio inicial (como si se hace al contratar otras empresas).
                    </p>
                    <br/>
                    <h6>Seguridad:</h6>
                    <p>
                      De la misma forma, todas las aplicaciones, ya sean sitios web, apps para smartphones, programas de escritorio, etc. Siempre deben contar con la seguridad adecuada que los proteja de ser atacados. Todos los paquetes que ofrezco cuentan con modernas técnicas de seguridad que ofrecen tranquilidad a mis clientes y sus usuarios; de la misma forma que con el Responsive Design, éstas no se pagan por separado, sino que están incluidas en todos y cada uno de los paquetes disponibles para contrato, así como también la reparación gratuita en caso de que aún así el sitio sea atacado, o bien la realización y restauración de copias de seguridad sin costo extra.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>siempre online</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>diseños atractivos</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-bulb-63" />
                          </div>
                          <div className="ml-3">
                            <h6>fáciles de mejorar o actualizar</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
    )
}

export default DescripcionServicios