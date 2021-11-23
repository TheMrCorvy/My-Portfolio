import React from "react";

import MiTrabajo from "components/Sections/MiTrabajo.jsx"

import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  Container
} from "reactstrap"

import Tecnologias from "components/Sections/Tecnologias"
import MiExperiencia from "../components/Sections/MiExperiencia";

import SectionContacto from "components/Sections/SectionContacto.jsx"

import LanguajesTable from "components/otros/LanguajesTable.js"

class MasInfo extends React.Component {
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
                <BreadcrumbItem active>Mi CV</BreadcrumbItem>
            </Breadcrumb>
          </Container>

          <img alt="..." className="path" src={require("assets/img/path1.png")} />
          <section className="section-lg section mb-5">
          
            <MiTrabajo />
          
          </section>
          
          <MiExperiencia/>
          
          <img alt="..." className="path" src={require("assets/img/path4.png")}/>
          
          <Tecnologias />

          <img alt="..." className="path" style={{zIndex: "-1", marginTop: "-50vw"}} src={require("assets/img/path2.png")}/>
          
          <LanguajesTable/>
          
          <SectionContacto/> 
      </React.Fragment>
    );
  }
}

export default MasInfo;
