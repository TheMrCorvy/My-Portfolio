import React from "react";

import { Container, Breadcrumb, BreadcrumbItem, } from "reactstrap"

import { Link } from "react-router-dom";

import SectionContacto from "../old/components/Sections/SectionContacto"

import Chart from "../old/components/Sections/Chart"
import BeneficiosInfo from "../old/components/Sections/BeneficiosInfo"

class Beneficios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            urlUpdate: ""
        }
      }

    componentDidMount() {
        document.body.classList.toggle("index-page");
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
                    <BreadcrumbItem active className="text-capitalize">Los beneficios para tu negocio</BreadcrumbItem>
                </Breadcrumb>
            </Container>
            <img alt="..." className="path" style={{ transform: 'scale(0.7)', left: '-15em', top: "-7em", zIndex: "-1" }} src={require("../assets/img/path5.png")} />
            
            <Chart/>

            <img alt="..." className="path" style={{ transform: 'scale(0.7)', zIndex: "-1" }} src={require("../assets/img/path1.png")} />

            <BeneficiosInfo/>

            <section className="section section-lg justify-content-center">
                <SectionContacto />
            </section>
        </React.Fragment>
    );
  }
}

export default Beneficios;
