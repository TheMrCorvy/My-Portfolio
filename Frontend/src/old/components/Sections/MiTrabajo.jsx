import React, { useState, useEffect } from "react"

import { Container, Row, Col, UncontrolledTooltip } from "reactstrap"

import { Link } from "react-router-dom"

import CardImage from "../otros/CardImage.js"

import {GetPage} from "../Ajax/AjaxAirport"

function MiTrabajo(){

    let url = window.location.href //obtengo la url actual
    let urlPartida = url.split('/') //la parto en cada /, esto da "http:", "", "eldominio.com.ar", "mi-cv"

    const token = null

    const urlFetch = "v2/CorvalanGonzalo/GetPage/GetProjectsForHomePage"

    const [project, setProject] = useState(false)

    async function fetchProject() {
      let response = await GetPage(urlFetch, token)
      
      if (!response) {
        console.log("Hubo un error en el proceso")
      }else{
        setProject(response)
      }
    }

    useEffect(() => {
      fetchProject();
    }, []);

    return (
          <section >
            <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5" id="ExamplePage">
                    {project &&
                      <CardImage project={project}/>
                    }
                  </Col>

                  <Col md="6" className="mt-4">
                    <div className="pl-md-5">
                      <h1>¿A Qué Me Dedico?</h1>
                      <p>
                        Soy un joven programador Freelancer enfocado en el desarrollo web.
                      </p>
                      <br />
                      <p>
                        Me dedico a ofrecer mis servicios como programador Full-Stack profesional para desarrollar y mantener páginas web, así como otros servicios relacionados.
                      </p>
                      <br />

                      {urlPartida[3] === 'mi-cv' &&
                        <div>
                            <p>Puedes hacer click en el enlace debajo si estás interesado en conocer más acerca de los servicios que ofrezco, tales como los tipos de paquetes para páginas web, precios, servicios de hosting, mantenimiento de bases de datos, renovación y mantenimiento de páginas web, datos técnicos más específicos, etc.</p>
                          <br />
                          <Link className="font-weight-bold text-info mt-5" to="/pricing" onClick={() => {
                            window.scrollTo({
                              top: 0,
                              left: 0
                            })
                          }}>
                            Más Info para precios y paquetes
                            <i className="tim-icons icon-minimal-right text-info" />
                          </Link>
                        </div>
                      }

                        {urlPartida[3] !== 'mi-cv' &&
                        <div>
                          <p>Siempre enfocado en el desarrollo web, también me dedico a hacer y/o mantener apps mobile nativas (aplicaciones instalables en android o ios desde su respectiva app store) utilizando el framework basado en JavaScript React Native, así como desarrollar programas de escritorio (ya sea en windows 8.1 en adelante y Mac OS) haciendo uso del framework de JavaScript, Electron.</p>

                          <br/>

                          <Link className="font-weight-bold text-info mt-5" to="/mi-cv" onClick={() => {
                              window.scrollTo({
                              top: 0,
                              left: 0
                              })
                          }}>
                          Visitar mi CV 
                            <i className="tim-icons icon-minimal-right text-info" />
                          </Link>
                        </div>
                      }
                    </div>
                  </Col>
                </Row>
              </Container>

              {project &&
                <UncontrolledTooltip placement="top" target="ExamplePage" delay={0}>
                    {"Click para visitar la web page de " + project.web_infos.website_name}
                </UncontrolledTooltip>
              }
            
        </section>
    )
}

export default MiTrabajo;