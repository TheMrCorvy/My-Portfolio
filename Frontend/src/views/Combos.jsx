import React from "react";

import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Card, CardHeader, CardBody, CardFooter, ListGroup, ListGroupItem } from "reactstrap"

import { Link } from "react-router-dom";

import SectionContacto from "../old/components/Sections/SectionContacto"

class Combos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            urlUpdate: ""
        }
      }

    componentDidMount() {
        document.body.classList.toggle("index-page");

        const urlParam = this.props.match.params.combo

        this.setState({
            urlUpdate: urlParam
        })

        if (urlParam !== "combo-basico" && urlParam !== "combo-medio" && urlParam !== "combo-grande") {
            this.props.history.push('/404')
        }
    }
      componentWillUnmount() {
        document.body.classList.toggle("index-page");
        clearTimeout(this.timeout)
    }

    
  render() {
    return (
        <React.Fragment>
            <Container className="mt-5 pt-5">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home Page</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/pricing">Pricing</Link></BreadcrumbItem>
                    <BreadcrumbItem active >{this.props.match.params.combo}</BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <img alt="..." className="path" style={{ transform: 'scale(0.7)', left: '-15em', top: "-7em", zIndex: "-1" }} src={require("../assets/img/path5.png")} />

            <Container>
                {/* <PaquetesBasicosSeparado paramsUrl={this.props.match.params.combo}/> */}
              <Row className="mb-5 pb-5">
              </Row>
              <Row>
                {this.props.match.params.combo === "combo-basico" &&
                    <React.Fragment>
                        <Col md="4">
                            <Card className="card-coin card-plain">
                                <CardHeader>
                                    <img alt="..." className="img-center img-fluid" src={require("../assets/img/etherum.png")} />
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
                                    <h4 className="text-white">PRECIO: (PESOS) $5000</h4>
                                    <h4 className="text-white">COSTE MENSUAL: (PESOS) $340</h4>
                                </CardFooter>
                            </Card>
                        </Col>
            
                        <Col md="8">
                            <div className="px-md-5 text-white">
                                <hr className="line-success" />
                                <h3>Combo Básico: Plan Personal Profile / Curriculum Personal</h3>
                                <h4>¿A quiénes va dirigido?</h4>
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>A clientes particulares que quieran tener un Curriculum Vitae online, para facilitar la visibilidad de sus servicios, proyectos, productos, etc.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>A clientes particulares/startups que quieran promocionar o dar a conocer su proyecto, haciendo uso de una campaña en redes sociales.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>A clientes particulares que quieran promocionarse a si mismos mediante campañas online.</li>
                                    <li style={{ lineHeight: "1.5" }}>a clientes particulares o asociaciones que quieran promocionar o dar a conocer un evento, o determinados detalles del mísmo.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>A startups o clientes particulares que tengan un proyecto aún por comenzar, o aun en estado de planificación, y deseen mostrar datos o aspectos antisipados del mísmo.</li>
                                </ul>
                                <br/>
                                <h4>¿Qué incluye?</h4>
                                
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>Web App de formato SPA: Una plataforma web construida con la moderna arquitectura SPA (Single Page Application), mediante la tecnología ReactJS.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Dominio .com.ar: El dominio regional específico de Argentina (midominio.com.ar, por ejemplo).</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Un hosting Low Cost para mantener el sitio web activo sin tener que gastar demasiado dinero en un hosting más potente de lo necesario.</li>
                                </ul>
                                
                                <br/>
                                <h4>¿Qué no incluye?</h4>
                                
                                    <ul>
                                        <li style={{ lineHeight: "1.5" }}>Este combo no incluye la opción de añadir un formulario al sitio web para que los usuarios envien consultas mediante email desde la propia página web, pero si se puede añadir si se le contrata por separado.</li>
                                        <br/>
                                        <li style={{ lineHeight: "1.5" }}>La opcion "Autoadministrable" no es compatible con esta configuración, ya que para actualizar el contenido de la página, se debe hacer desde el aspecto técnico por algun programador de ReactJS.</li>
                                    </ul>
                                
                            </div>
                        </Col>
                    </React.Fragment>
                }
                {this.props.match.params.combo === "combo-medio" &&
                    <React.Fragment>
                        <Col md="4">
                            <Card className="card-coin card-plain">
                                <CardHeader>
                                    <img alt="..." className="img-center img-fluid" src={require("../assets/img/ripp.png")} />
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
                                    <h4 className="text-white">PRECIO: (PESOS) $7.000</h4>
                                    <h4 className="text-white">COSTE MENSUAL: (PESOS) $500</h4>
                                </CardFooter>
                            </Card>
                        </Col>
            
                        <Col md="8">
                            <div className="px-md-5 text-white">
                                <hr className="line-success" />
                                <h3>Combo Medio: Plan de Blog</h3>
                                <h4>¿A quiénes va dirigido?</h4>
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>A clientes particulares que quieran iniciar un blog personal o profesional.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>A empresas que otorguen servicios web.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>A empresas o particulares que modifiquen o actualicen regularmente el contenido que quieren dar a conocer.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>A clientes particulares o empresas que necesiten de alguna aplicación web o servicio en particular.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>A clientes particulares o empresas que deseen tener una plataforma con la que interactuar con sus usuarios.</li>
                                </ul>
                                <br/>
                                <h4>¿Qué incluye?</h4>
                                
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>Web App de formato SPA: Una plataforma web construida con la moderna arquitectura SPA (Single Page Application), mediante la tecnología ReactJS y utilizando Laravel para los procesos que deben ejecutarse en el servicio de hosting para mayor seguridad o eficiencia.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Contenido Dinámico: gracias a que esta configuración incluye Laravel, se puede lograr mostrar contenido dentro del sitio web que no necesariamente deba ser manualmente escrito o preparando por una persona, sino que se puede modificar o actualizar el contenido del sitio web de forma automática desde el seevidor de hosting en el que se encuentra publicada la página.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Dominio .com.ar: El dominio regional específico de Argentina (midominio.com.ar por ejemplo).</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Servicio de Emails: Un formulario de contacto dentro del sitio web para que los usuarios/clientes puedan escribir consultas desde el propio siti, asi como también la posibilidad de una suscripción por mail para los usuarios de la aplicación del cliente, para que los usuarios finales reciban novedades o actualizaciones o noticias que el cliente escriba desde el propio portal del sitio para los administradores.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Autoadministrable: La opción autoadministrable esto significa que, una vez terminado el proyecto, el cliente que haya contratado el servicio podrá ejercer control sobre el sitio editando o actualizando el contenido del mismo, o preparando y enviando emails a sus usuarios; todo desde una seccion oculta para el público general, al que solo tendrán acceso quienes el cliente permita, para que administren el sitio web.</li>
                                </ul>
                                
                                <br/>
                                <h4>¿Qué no incluye?</h4>
                                
                                    <ul>
                                        <li style={{ lineHeight: "1.5" }}>Dominios Especiales</li>
                                    </ul>
                                
                            </div>
                        </Col>
                    </React.Fragment>
                }
                {this.props.match.params.combo === "combo-grande" &&
                    <React.Fragment>
                        <Col md="4">
                            <Card className="card-coin card-plain">
                                <CardHeader>
                                    <img alt="..." className="img-center img-fluid" src={require("../assets/img/bitcoin.png")} />
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
                                    <h4 className="text-white">PRECIO: (PESOS) $20.000</h4>
                                    <h4 className="text-white">COSTE MENSUAL: (PESOS) $1.000</h4>
                                </CardFooter>
                            </Card>
                        </Col>
            
                        <Col md="8">
                            <div className="px-md-5 text-white">
                                <hr className="line-success" />
                                <h3>Combo Grande: Plan de E-Comerce</h3>
                                <h4>¿A quiénes va dirigido?</h4>
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>A empresas o startups que deseen tener un sitio de compra/venta online (E-Comerce) por fuera de plataformas mas grandes como MercadoLibre.</li>
                                </ul>
                                <br/>
                                <h4>¿Qué incluye?</h4>
                                
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>Web App de formato SPA: Una plataforma web construida con la moderna arquitectura SPA (Single Page Application), mediante la tecnología ReactJS y utilizando Laravel para los procesos que deben ejecutarse en el servicio de hosting para mayor seguridad o eficiencia.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Dominio .com.ar o personalizado: Un dominio especial, sea el regional de Argentina (.ar), u otro(s). Estos dominios incluyen, entre otros, al .net .store .comerce .org, etc.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Servicio de emails: Un formulario de contacto dentro del sitio web para que los usuarios/clientes puedan escribir consultas desde el propio sitio, así como también la posibilidad de una suscripción por mail para los usuarios de la aplicación del cliente, para que los usuarios finales reciban novedades o actualizaciones, o noticias que el cliente escriba desde el propio portal del sitio para los administradores.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Autoadministrable: La opción autoadministrable. Esto significa que, una vez terminado el proyecto, el cliente que haya contratado mis servicios podrá ejercer control sobre el sitio editando o actualizando el contenido del mísmo, o preparando y enviando emails a sus usuarios. Todo desde una sección oculta para el público general, al que solo tendrán acceso quienes el cliente permita, para que administren el sitio web.</li>
                                    <br/>
                                    <li style={{ lineHeight: "1.5" }}>Sistema de Login/Registro: Un sistema de login/registro que permite a los usuarios iniciar sesion en el sitio, así como tener su propio perfil privado, y otros beneficios que el cliente puede desear que sus usuarios posean.</li>
                                </ul>
                                
                                <br/>
                                <h4>¿Qué no incluye?</h4>
                                
                                    <ul>
                                        <li style={{ lineHeight: "1.5" }}>Dominios Especiales</li>
                                    </ul>
                                
                            </div>
                        </Col>
                    </React.Fragment>
                }
              </Row>
            </Container>
            <section className="section section-lg justify-content-center">
                <SectionContacto />
            </section>
        </React.Fragment>
    );
  }
}

export default Combos;
