import React from 'react';

import {GetPage} from "components/Ajax/AjaxAirport"

import { 
    Container, 
    Col, 
    Row, 
    Card, 
    CardTitle, 
    CardBody, 
    UncontrolledTooltip,
    Modal
} from "reactstrap";

class InfoPrecios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          demoModal: false,
          miniModal: false,
          infoPrecioModal: false,
          mensajeModal: [],
          dominios: [],
          servicios: [],
          proyectos: [],
        }
    }

    componentDidMount(){
        this.fetchPrices()
    }

    fetchPrices = async () => {

        const url = "v2/CorvalanGonzalo/GetPage/GetPricingPage"

        const prices = await GetPage(url, null)

        if (prices) {
            this.setState({
                dominios: prices.dominios,
                servicios: prices.servicios,
                proyectos: prices.proyectos,
            })
        }else{
            console.log("Hubo un error en el proceso")
        }
    }

    toggleModal = (modalState) => {
        this.setState({
            [modalState]: !this.state[modalState]
        });
    };

    callModal = (mensaje) => {
        this.toggleModal("infoPrecioModal")
        this.setState({
            mensajeModal: mensaje
        })
    }

    renderSwitch = (id) => {
        switch (id) {
            case 1:
                return "bg-danger"
            case 2:
                return "bg-info"
            case 3:
                return "bg-primary"
            case 4:
                return "bg-warning"
            case 5:
                return "bg-default"
            default:
                return "bg-info"
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container style={{ marginTop: "10vh" }}>
                    <h2 className="mt-5 text-center text-neutral">Más info acerca de precios y servicios indivuduales</h2>
                    <h3 className="mt-5 pt-5 text-neutral text-center">Registro de Dominios Web:</h3>
                    <img alt="..." className="path" style={{ transform: "scale(0.7)"}} src={require("assets/img/path5.png")} />
                    <Row className="row-grid justify-content-around">

                        {this.state.dominios.map(dominio => (
                            <Col lg="6" className="mb-4" key={dominio.id}>
                                
                                <Card className={this.renderSwitch(dominio.id)}>
                                    <CardBody>
                                        <button className="close" id={"dominio" + dominio.id} 
                                        onClick={() => this.callModal([dominio.titulo_secundario, dominio.texto_info])}>
                                            <i className="tim-icons icon-alert-circle-exc text-white" />
                                        </button>
    
                                        <UncontrolledTooltip placement="left" target={"dominio" + dominio.id} delay={0}>
                                            Más Info
                                        </UncontrolledTooltip>
                        
                                        <CardTitle className="h3">{dominio.titulo_principal}</CardTitle>
                                        <CardTitle className="text-neutral font-weight-bold">{dominio.precio_dominio}</CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}

                    </Row>

                    <h3 className="mt-5 pt-5 text-neutral text-center">Páginas Web y opciones de Hosting</h3>

                    <Row className="row-grid justify-content-around">

                        {this.state.proyectos.map(proyecto => (
                            <Col lg="6" className="mb-4" key={proyecto.id}>
                                
                                <Card className={this.renderSwitch(proyecto.id)}>
                                    <CardBody>
                                        <button className="close" id={"proyecto" + proyecto.id} 
                                        onClick={() => this.callModal([proyecto.titulo_secundario, proyecto.texto_info])}>
                                            <i className="tim-icons icon-alert-circle-exc text-white" />
                                        </button>
    
                                        <UncontrolledTooltip placement="left" target={"proyecto" + proyecto.id} delay={0}>
                                            Más Info
                                        </UncontrolledTooltip>
                        
                                        <CardTitle className="h3">{proyecto.titulo_principal}</CardTitle>
                                        <CardTitle className="text-neutral font-weight-bold">{proyecto.costo_proyecto}</CardTitle>
                                        <CardTitle className="text-neutral font-weight-bold">{proyecto.costo_mensual}</CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}

                    </Row>

                    <h3 className="mt-5 pt-5 text-neutral text-center">Servicios complementarios:</h3>
                    <img alt="..." className="path" style={{ transform:"scale(0.7)", marginTop: "-45vh", zIndex: "-1" }} src={require("assets/img/path1.png")} />
                    
                    <Row className="row-grid justify-content-around">

                        {this.state.servicios.map(servicio => (
                            <Col lg="6" className="mb-4" key={servicio.id}>
                                <Card className={this.renderSwitch(servicio.id)}>
                                    <CardBody>
                                        <button className="close" id={"servicio" + servicio.id} onClick={() => this.callModal([servicio.titulo_secundario, servicio.texto_info])}>
                                            <i className="tim-icons icon-alert-circle-exc text-white" />
                                        </button>

                                        <UncontrolledTooltip placement="left" target={"servicio" + servicio.id} delay={0}>
                                            Más Info
                                        </UncontrolledTooltip>

                                        <CardTitle className="h3">{servicio.titulo_principal}</CardTitle>
                                        <CardTitle className="text-neutral font-weight-bold">{servicio.precio_servicio}</CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                    
                </Container>

                <Modal modalClassName="modal-info" isOpen={this.state.infoPrecioModal} toggle={() => this.toggleModal("infoPrecioModal")}>
                    <div className="modal-header justify-content-center">
                        <div>
                            <button className="close" onClick={() => this.toggleModal("infoPrecioModal")}>
                                <i className="tim-icons icon-simple-remove text-white" />
                            </button>
                        </div>
                        <div className="text-muted text-center ml-auto mr-auto" style={{ maxWidth: "80%" }}>
                            <h3 className="mb-0">{this.state.mensajeModal[0]}</h3>
                        </div>
                    </div>
                    <div className="modal-body">
                        {/* <div >
                            
                        </div> */}
                        <p className="h4">{this.state.mensajeModal[1]}</p>
                    </div>
                </Modal>

            </React.Fragment>
        )
    }
}

export default InfoPrecios;