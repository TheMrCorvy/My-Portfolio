import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }

  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };

  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };

  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };

  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };

  scrollUp = () =>{
    window.scrollTo({
      top: 0,
      left: 0
    })

    this.toggleCollapse()
  }

  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="Home"
              data-placement="bottom"
              to="/"
              tag={Link}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0
                })
              }}
            >
              <span>Gonzalo Salvador Corvalán</span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                     Opciones
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink id="linkedin"
                  href="https://www.linkedin.com/in/gonzalo-salvador-corvalan"
                  target="_blank"
                  onClick={this.scrollUp}
                >
                  <i className="fab fa-linkedin" />
                  <p className="d-lg-none d-xl-none">Linkedin</p>
                </NavLink>
              </NavItem>

              <NavItem className="p-0">
                <NavLink id="github"
                  href="https://github.com/TheMrCorvy"
                  target="_blank"
                  onClick={this.scrollUp}
                >
                  <i className="fab fa-github" />
                  <p className="d-lg-none d-xl-none">GitHub</p>
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink className="btn btn-link" tag={Link} to="/mi-cv" id="CV" onClick={this.scrollUp}>
                  Mi CV
                </NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="btn btn-link" tag={Link} to="/beneficios" id="beneficios" onClick={this.scrollUp}>
                  Qué beneficios me trae?
                </NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="btn btn-link" tag={Link} to="/pricing" id="pricing" onClick={this.scrollUp}>
                  Paquetes y Servicios
                </NavLink> 
              </NavItem>
            </Nav>
          </Collapse>
        </Container>

        <UncontrolledTooltip placement="bottom" target="CV" delay={0}>{/*el delay en milisegundos */}
                    Más información acerca de mí
        </UncontrolledTooltip>

        <UncontrolledTooltip placement="bottom" target="beneficios" delay={0}>
                    Echá un vistazo
        </UncontrolledTooltip>

        <UncontrolledTooltip placement="bottom" target="pricing" delay={0}>{/*el delay en milisegundos */}
                    ¿Qúe servicios ofrezco?
        </UncontrolledTooltip>

        <UncontrolledTooltip placement="bottom" target="linkedin" delay={0}>
                    Visitá mi Linkedin
        </UncontrolledTooltip>

        <UncontrolledTooltip placement="bottom" target="github" delay={0}>
                    Revisá mi GitHub
        </UncontrolledTooltip>

        <UncontrolledTooltip placement="bottom" target="Home" delay={0}>
                    Home Page
        </UncontrolledTooltip>

      </Navbar>
    );
  }
}

export default PagesNavbar;
