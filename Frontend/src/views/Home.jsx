import React from "react";

// core components
import PageHeader from "../components/Sections/PageHeader.jsx";

import MiTrabajo from "../components/Sections/MiTrabajo.jsx"
import Tecnologias from "../components/Sections/Tecnologias.jsx"
import SectionContacto from "../components/Sections/SectionContacto.jsx"
import PaquetesBasicos from "../components/Sections/PaquetesBasicos.jsx"

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <React.Fragment>
        <PageHeader />

        <section className="section section-basic wrapper justify-content-between">
          <img alt="..." className="path" src={require("../assets/img/path1.png")} />

          <section className="section section-lg">
            <MiTrabajo />
          </section>

          <section className="section section-lg">

            <img alt="..." className="path" style={{ transform: 'scale(0.7)', left: '-15em', top: "-7em" }} src={require("../assets/img/path2.png")} />
            <Tecnologias />
          </section>

        </section>

        <img alt="..." className="path" src={require("../assets/img/path4.png")} />

        <PaquetesBasicos />

        <section className="section section-lg justify-content-center">
          <SectionContacto />
        </section>
      </React.Fragment>
    );
  }
}

export default Index;
