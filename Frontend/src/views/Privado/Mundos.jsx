import React from "react";

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { Link } from "react-router-dom";

import ListaMundos from "../../old/components/Privado/Sections/ListaMundos"

class Animes extends React.Component {
    componentDidMount() {
        document.body.classList.toggle("index-page");
        
        const userToken = localStorage.getItem("usertoken")
        
        if (userToken) {
            console.log(userToken)
            this.setState({
                isAdmin: true
            });
        }else{
            const { history } = this.props;
            if(history) {
                history.push('/');
            }

            window.scrollTo({
                top: 0,
                left: 0
            })
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
                    <BreadcrumbItem><Link to="/admin">Admin</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/animes">Lista de Animes</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Mundos</BreadcrumbItem>
                </Breadcrumb>
            </Container>
            
            <img alt="..." className="path" src={require("../../assets/img/path4.png")}/>
            
            <Container>
                <Row className="justify-content-center" style={{ height: "35vh"}}>
                    <Col lg="8" style={{ margin: "auto" }}>
                        <h1 className="text-center text-neutral" style={{ lineHeight: "1.2" }}>"Si no se contradicen, podrian estar en el mismo universo"</h1>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <ListaMundos/>
            </Container>
        </React.Fragment>
    );
  }
}

export default Animes;
