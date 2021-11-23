import React from "react";
import { Link, withRouter } from "react-router-dom";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap";

import FormLogin from "components/otros/FormLogin.js"

import {Login} from "components/Ajax/AjaxAirport"

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          demoModal: false,
          miniModal: false,
          formModal: false,
          form: {
            emailForm: ' ',
            passForm: ''
          },
          isLoggedIn: false
        }
    }

    componentDidMount(){
      const userToken = localStorage.getItem("usertoken")

        if (userToken) {
            this.setState({
                isLoggedIn: true
            });
        }
    }

    logout = e => {
      e.preventDefault()
      localStorage.removeItem('usertoken')

      this.setState({
        isLoggedIn: false
      })

      this.ScrollTopMax()

      const { history } = this.props;
      if(history) {
        history.push('/');
      }
    }
    
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
      }
    
    handleSubmit = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
            formModal: false
        }, () => {
          this.logingIn()
          //llamada a la api
        })
    };

    logingIn = async () => {
      const Admin = {
        email: this.state.form.emailForm,
        password: this.state.form.passForm
      }
      const sending = await Login(Admin)

      if (sending) {
        this.setState({
            isLoggedIn: true
        })
      }
    }
    
    toggleModal = modalState => {
        this.setState({
            [modalState]: !this.state[modalState]
        });
    };

    ScrollTopMax = () => {
        window.scrollTo({
            top: 0,
            left: 0
        })
    }

    redirect = () => {
      
    }
  render() {
    
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h2 className="title">Mapa del Sitio:</h2>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link} onClick={this.ScrollTopMax}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/mi-cv" tag={Link} onClick={this.ScrollTopMax}>
                    Mi CV
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/beneficios" tag={Link} onClick={this.ScrollTopMax}>
                    Qué beneficios me trae?
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/pricing" tag={Link} onClick={this.ScrollTopMax}>
                    Precios de Servicios/Combos
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="2">
              <Nav>
                <NavItem>
                  <NavLink to="/pricing/combo-basico" tag={Link} onClick={this.ScrollTopMax}>
                    combo básico
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/pricing/combo-medio" tag={Link} onClick={this.ScrollTopMax}>
                    combo medio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/pricing/combo-grande" tag={Link} onClick={this.ScrollTopMax}>
                    combo grande
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="2">
              <Nav>
                {this.state.isLoggedIn ? (
                  <React.Fragment>
                    <NavItem>
                        <NavLink to="/animes" tag={Link} onClick={this.ScrollTopMax}>
                          animes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/mundos" tag={Link} onClick={this.ScrollTopMax}>
                          mundos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/admin" tag={Link} onClick={this.ScrollTopMax}>
                          administrar sitio
                        </NavLink>
                    </NavItem>
                  </React.Fragment>
                      ) : (
                        <NavItem>
                            <NavLink>
                              
                            </NavLink>
                        </NavItem>
                      )}
                
              </Nav>
            </Col>
            <Col md="2">
                <Nav>
                    <NavItem>
                      {this.state.isLoggedIn ? (
                        <React.Fragment>
                          <NavLink style={{cursor:"pointer"}} onClick={(e) => this.logout(e)}>
                              log out
                          </NavLink>
                        </React.Fragment>
                      ) : (
                        <NavLink style={{cursor:"pointer"}} onClick={() => this.toggleModal("formModal")}>
                            admins only
                        </NavLink>
                      )}
                    </NavItem>
                </Nav>
            </Col>
          </Row>
        </Container>
        <Modal modalClassName="modal-info" isOpen={this.state.formModal} toggle={() => this.toggleModal("formModal")}>
              <div className="modal-header justify-content-center">
                <button className="close" onClick={() => this.toggleModal("formModal")}>
                  <i className="tim-icons icon-simple-remove text-white" />
                </button>
                <div className="text-muted text-center ml-auto mr-auto">
                  <h3 className="mb-0">Ingrese sus Credenciales</h3>
                </div>
              </div>
              <div className="modal-body">
                <FormLogin onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form}/>
              </div>
        </Modal>
      </footer>
    );
  }
}

export default withRouter(Footer);
