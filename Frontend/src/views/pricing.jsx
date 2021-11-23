import React from "react";

import PaquetesBasicos from "components/Sections/PaquetesBasicos.jsx"

import SectionContacto from "components/Sections/SectionContacto.jsx"

import DescripcionServicios from "components/Sections/DescripcionServicios.js"

import Tecnologias from "components/Sections/Tecnologias.jsx"

import InfoPrecios from "components/Sections/InfoPrecios.js"

import InfoPrecioFinal from "components/Sections/InfoPrecioFinal"

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { Link } from "react-router-dom";

class PricingPage extends React.Component {
    componentDidMount() {
        document.body.classList.toggle("index-page");
    }
      componentWillUnmount() {
        document.body.classList.toggle("index-page");
    }
  render() {
    return (
        <React.Fragment>
            <Container className="mt-5 pt-5">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home Page</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Pricing</BreadcrumbItem>
                </Breadcrumb>
            </Container>
            
            <img alt="..." className="path" src={require("assets/img/path4.png")}/>
            
            <Container>
                <Row className="justify-content-center" style={{ height: "35vh"}}>
                    <Col lg="8" style={{ margin: "auto" }}>
                        <h1 className="text-center text-neutral" style={{ lineHeight: "1.2" }}>Aquí encontrarás Información más detallada acerca de precios y paquetes</h1>
                    </Col>
                </Row>
            </Container>
            
            <PaquetesBasicos className="mb-5 pb-5" />

            <img alt="..." className="path" src={require("assets/img/path2.png")} />

            <DescripcionServicios/>

            <InfoPrecios/>

            <img alt="..." className="path" src={require("assets/img/path5.png")} style={{zIndex: "-1"}}/>

            <InfoPrecioFinal/>

            {/* <img alt="..." className="path" src={require("assets/img/path3.png")} /> */}
            {/* <Tecnologias margen="15vh" /> */}
            
            <SectionContacto/>
        </React.Fragment>
    );
  }
}

export default PricingPage;
