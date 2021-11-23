import React from "react";

import { Container, Breadcrumb, BreadcrumbItem, } from "reactstrap"

import { Link } from "react-router-dom";

import AnimesForm from "../../components/Privado/Otros/AnimesForm"
import DomainForm from "../../components/Privado/Otros/DomainForm"
import ServiceForm from "../../components/Privado/Otros/ServiceForm"
import ProjectForm from "../../components/Privado/Otros/ProjectForm"
import WebsiteForm from "../../components/Privado/Otros/WebsiteForm"

import {GetPage} from "../../components/Ajax/AjaxAirport"

class Animes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            token: ""
        };
      }

    componentDidMount() {
        document.body.classList.toggle("index-page");
        
        const userToken = localStorage.getItem("usertoken")
        
        if (userToken) {
            this.setState({
                isAdmin: true,
                token: userToken
            }, () => {
                this.verifyAdmin()
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

    verifyAdmin = async () => {
        const url = "v2/CorvalanGonzalo/Admin/GetAuthenticatedAdmin"
        
        const verificating = await GetPage(url, this.state.token)
        
        if (verificating.code !== 200) {
            
            localStorage.removeItem('usertoken')

            // const { history } = this.props;
            
            // if(history) {
            //     history.push('/');
            // }

            window.location.replace('/redirect')

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
                    {this.state.isAdmin &&
                        <React.Fragment>
                            <BreadcrumbItem><Link to="/mundos">Mundos</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/animes">Animes</Link></BreadcrumbItem>
                        </React.Fragment>
                    }
                    <BreadcrumbItem active>Sección de Administración</BreadcrumbItem>
                </Breadcrumb>
            </Container>
            
            <img alt="..." className="path" style={{ zIndex: '-1' }} src={require("../../assets/img/path4.png")}/>
            {this.state.isAdmin && 
                <Container>
                    <AnimesForm/>
                    <DomainForm/>
                    <ProjectForm/>
                    <ServiceForm/>
                    <WebsiteForm/>
                </Container>
            }
        
        </React.Fragment>
    );
  }
}

export default Animes;
