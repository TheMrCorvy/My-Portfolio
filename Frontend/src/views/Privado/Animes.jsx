import React from "react";

import { Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { Link } from "react-router-dom";

import ListaAnimes from "components/Privado/Sections/ListaAnimes"

class Animes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false
        };
      }

    componentDidMount() {
        document.body.classList.toggle("index-page");
        
        const userToken = localStorage.getItem("usertoken")

        if (userToken) {
            this.setState({
                isAdmin: true
            });
        }
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
                    {this.state.isAdmin &&
                        <React.Fragment>
                            <BreadcrumbItem><Link to="/admin">Admin</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/mundos">Mundos</Link></BreadcrumbItem>
                        </React.Fragment>
                    }
                    <BreadcrumbItem active>Mi Lista De Animes Que He Visto Hasta Ahora</BreadcrumbItem>
                </Breadcrumb>
            </Container>
            
            <img alt="..." className="path" style={{ zIndex: '-1' }} src={require("assets/img/path4.png")}/>
            
            <ListaAnimes/>
        
        </React.Fragment>
    );
  }
}

export default Animes;
