import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

import { Link } from "react-router-dom"

class NotFound extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand" style={{ maxWidth: "90vw !important", minWidth: "20em !important" }}>
            <h1 className="h1-seo">Página no Encontrada.</h1>
            <Link className="font-weight-bold text-success mt-5" to="/" onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0
              })
            }}>
              <Button className="btn-simple" color="success" id="masinfo1">
                Regresar a la página principal
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default NotFound;
