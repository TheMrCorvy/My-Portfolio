import React from "react"

import { Container, Row, Col } from "reactstrap"

function Tecnologias(props){
    let url = window.location.href 
    let urlPartida = url.split('/')
    return (
      <React.Fragment>
        <Container className="mt-5" style={{ paddingTop: "10vw", marginBottom: props.margen }}>
          <Row className="justify-content-center">
            <Col lg="12">
              <h1 className="text-center text-neutral">¿Cuales son las tecnologías que utilizo para el desarrollo?</h1>
              <Row className="row-grid justify-content-center">

                <Col lg="3">
                  <div className="info" style={{ paddingTop: "15%" }}>
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-bullet-list-67" />
                    </div>
                    <h4 className="info-title">Laravel</h4>
                    <hr className="line-primary" />
                    <p>
                    El framework PHP de código abierto utilizado para crear sitios y aplicaciones web con PHP 7, cuyo objetivo es permitir el desarrollo de forma elegante y simple, y evitando el "código espagetti".
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info" style={{ paddingTop: "15%" }}>
                    <div className="icon icon-success">
                      <i className="tim-icons icon-atom" />
                    </div>
                    <h4 className="info-title">ReactJS</h4>
                    <hr className="line-success" />
                    <p>
                      La biblioteca de JavaScript de código abierto, creada y mantenida por Facebook, y que está diseñada para crear interfaces de usuario basándose en la arquitectura SPA (aplicación de una sola página por sus siglas en inglés).
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info" style={{ paddingTop: "15%" }}>
                    <div className="icon icon-info">
                      <i className="tim-icons icon-book-bookmark" />
                    </div>
                    <h4 className="info-title">Git y GitHub</h4>
                    <hr className="line-info" />
                    <p>
                    Git es el software de control de versiones más utilizado del mundo, pensando para la eficiencia y la confiabilidad a la hora del mantenimiento de versiones de aplicaciones en desarrollo.
                    </p>
                  </div>
                </Col>

                <Col lg="3">
                  <div className="info" style={{ paddingTop: "15%" }}>
                    <div className="icon icon-danger">
                      <i className="tim-icons icon-align-left-2" />
                    </div>
                    <h4 className="info-title">PHP</h4>
                    <hr className="line-danger" />
                    <p>
                    Lenguaje de backend orientado a objetos, principalmente utilizado en el desarrollo de aplicaciones web. En futuras versiones de esta página, añadirá más funciones que involucren ajax y PHP.
                    </p>
                  </div>
                </Col>

                <Col lg="3">
                  <div className="info" style={{ paddingTop: "15%" }}>
                    <div className="icon icon-warning">
                      <i className="tim-icons icon-laptop" />
                    </div>
                    <h4 className="info-title">JavaScript</h4>
                    <hr className="line-warning" />
                    <p>
                    El lenguaje de scripting más utilizado en el mundo. Orientado a objetos y utilizado para desarrollar aplicaciones complejas y dinámicas que se ejecutan del lado del cliente.
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info" style={{ paddingTop: "15%" }}>
                    <div className="icon icon-danger">
                      <i className="tim-icons icon-settings-gear-63" />
                    </div>
                    <h4 className="info-title">MySQL</h4>
                    <hr className="line-danger" />
                    <p>
                    Un sistema de gestión de bases de datos relacionales, y conciderada como la base de datos de código abierto más popular del mundo ya que provee una alta velocidad de lectura de datos.
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info" style={{ paddingTop: "15%" }}>
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-pencil" />
                    </div>
                    <h4 className="info-title">CSS y CSS3</h4>
                    <hr className="line-primary" />
                    <p>
                    Cascading Style Sheet (Hojas de estilo en cascada) es un lenguaje de diseño gráfico muy comunmente usado para establecer el diseño visual e interfaces de usuario escritas en un documento HTML.
                    </p>
                  </div>
                </Col>

                <Col lg="3">
                  <div className="info" style={{ paddingTop: "15%" }}>
                    <div className="icon icon-success">
                      <i className="tim-icons icon-single-copy-04" />
                    </div>
                    <h4 className="info-title">Bootstrap</h4>
                    <hr className="line-success" />
                    <p>
                    Conjunto de herramientas de código abierto para diseños de sitios y aplicaciones web basado en CSS y con extenciones de JavaScript y jQuery, utilizado úicamente para el desarrollo frontend.
                    </p>
                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>
        </Container>

        {urlPartida[3] === 'mi-cv' &&
          <Container className="mt-5" style={{ paddingTop: "10vw" }}>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center text-neutral" style={{ lineHeight: "1.5em" }} >También cuento con amplia experiencia utilizando las herramientas de Microsoft Office</h1>
                <Row className="row-grid justify-content-center">

                  <Col lg="6">
                    <div className="info" style={{ paddingTop: "15%" }}>
                      <div className="icon icon-info">
                        <i className="tim-icons icon-caps-small" />
                      </div>
                      <h4 className="info-title">Word</h4>
                      <hr className="line-info" />
                      <p>
                      El programa informático destinado al procesamiento de textos que sirve para escribir o editar textos con cualquier finalidad, ya sea académica, profesional, etc. Cuenta con un completo paquete de herramientas que permite modificar el formato de un escrito. Estas permiten modificar el tipo o tamaño de la fuente al diseño de la página, así como la inclusión de elementos gráficos como imágenes o tablas.
                      </p>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="info" style={{ paddingTop: "15%" }}>
                      <div className="icon icon-success">
                        <i className="tim-icons icon-chart-bar-32" />
                      </div>
                      <h4 className="info-title">Excel</h4>
                      <hr className="line-success" />
                      <p>
                        La hoja de cálculos más utilizada del mundo. Dicha aplicación se enfoca principalmente en realizar tareas contables y financieras, y cuenta tanto con herramientas gráficas, tablas dinámicas, como un lenguaje de programación macro llamado Visual Basic. En ella se pueden realizar cálculos aritméticos básicos, aplicar funciones matemáticas de mayor complejidad, o utilizar funciones estadísticas.
                      </p>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="info" style={{ paddingTop: "15%" }}>
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-image-02" />
                      </div>
                      <h4 className="info-title">Power Point</h4>
                      <hr className="line-warning" />
                      <p>
                      El programa por excelencia para realizar presentaciones con diapositivas de forma rápida y eficiente. Es un programa diseñado para hacer presentaciones con texto esquematizado, así como presentaciones visualmente atractivas, animaciones de texto e imágenes prediseñadas o importadas desde imágenes de la computadora, y que facilita la aplicación de distintos diseños de fuente, plantilla y animación, etc. 
                      </p>
                    </div>
                  </Col>

                  <Col lg="6">
                    <div className="info" style={{ paddingTop: "15%" }}>
                      <div className="icon icon-info">
                        <i className="tim-icons icon-email-85" />
                      </div>
                      <h4 className="info-title">Outlook</h4>
                      <hr className="line-info" />
                      <p>
                      Una aplicación para gestionar la información personal y que incluye en un único lugar, tanto la información de los contactos, como los eventos agendados en el calendario, y un gestor de emails. Todo esto lo convierte en una aplicación ideal para gestionar de forma organizada el ámbito administrativo en una empresa. Mediante Outlook se pueden gestionar amplios volúmenes de emails, así como crear mensajes de emails que llamen la atención gracias a que se puede combinar con las demás herramientas de Microsoft Office.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        }
      </React.Fragment>
    )
}

export default Tecnologias;