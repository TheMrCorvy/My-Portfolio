import React from "react"

import { Row, Col, Card, CardBody, CardTitle, CardFooter, Pagination, PaginationItem, PaginationLink, Container, Button, } from "reactstrap"

import {GetPage} from "components/Ajax/AjaxAirport"

import classnames from "classnames";

class ListaAnimes extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            animes: [],
            controller: "GetPage",
            metodo: "GetAnimesPaginatedUser",
            orden: "DESC",
            amountPages: [],
            currentPage: 1,
            token: false,
        };
      }
    
    componentDidMount(){
        const userToken = localStorage.getItem("usertoken")

        if (userToken) {
            this.setState({
                token: userToken,
                metodo: "GetAnimesPaginatedAdmin"
            }, 
            function () {
                this.animeFetch()
            });//this.setState no cambia el estado inmediatamente, por lo que hay que usar como segundo parametro una funcion anonima la cual va a ser llamada cuando se termine de setear el estado
        }else{
            this.animeFetch()
        }
    }

    animeFetch = async () => {

        const url = "v2/CorvalanGonzalo/" + this.state.controller + "/" + this.state.metodo + "/" + this.state.orden + "?page=" + this.state.currentPage

        const animesArray = await GetPage(url, this.state.token)

        if (animesArray) {
            this.setState({
                animes: animesArray.animes.data
            })
    
            let arrayVacio = []
    
            for (let i = 1; i <= animesArray.animes.last_page; i++) {
                arrayVacio.push(i) 
            }
    
            this.setState({
                amountPages: arrayVacio
            })
        }else{
            console.log("Hubo un error en el proceso")
            localStorage.removeItem('usertoken')
            window.location.replace('/redirect')
        }
    }

    pageNumber = (e, numero) => {
        e.preventDefault()
        
        this.setState({
            currentPage: numero
        }, () => {
            this.animeFetch()
        })

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }
    
    arrows = (e, accion) => {
        e.preventDefault()
        
        if (accion === "plusOne") {

            if (this.state.currentPage !== this.state.amountPages.length) {
  
              this.setState({
                  currentPage: this.state.currentPage +1
              }, () => {
                  this.animeFetch()
              })

              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
  
            }else{
              console.log("No hay más páginas para ver.")
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
            }
              
          }else{
            if (this.state.currentPage !== 1) {
  
              this.setState({
                currentPage: this.state.currentPage -1
              }, () => {
                  this.animeFetch()
              })

              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
  
            }else{
                console.log("No hay más páginas para ver.")

                window.scrollTo({
                    top: 0,
                    left: 0
                })
            }
          }
    }

    cambiarOrden = e => {
        e.preventDefault()
        if (this.state.orden === "DESC") {
            this.setState({
                orden: "ASC"
            }, () => {
                this.animeFetch()
            })

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })

        }else{
            this.setState({
                orden: "DESC"
            }, () => {
                this.animeFetch()
            })

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        }
    }
    
    render(){
        return (
            <React.Fragment>
                <Container>
                    <Row style={{ height: "35vh"}}>
                        <Col lg="8" style={{ margin: "auto" }} className="text-center">
                            <h1 className="text-center text-neutral" style={{ lineHeight: "1.2" }}>Cambiar el orden</h1>
                            <Button color="info" onClick={e => {this.cambiarOrden(e)}}>{this.state.orden}</Button>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ minHeight: '30vw' }}>
                    <Row className="justify-content-center">
                        <Pagination className="pagination pagination-info" listClassName="pagination-info">
                            <PaginationItem>
                                <PaginationLink aria-label="Previous" href="#pablo" onClick={e => this.arrows(e, "restar")}>
                                    <span aria-hidden={true}>
                                    <i aria-hidden={true} className="tim-icons icon-double-left"/>
                                    </span>
                                </PaginationLink>
                            </PaginationItem>
                            
                            {this.state.amountPages.map(numeroPagina => (
                                <PaginationItem className={
                                    classnames({
                                        "active show": this.state.currentPage === numeroPagina
                                    })} 
                                    onClick={e => this.pageNumber(e, numeroPagina)} key={numeroPagina}>
                                    <PaginationLink>{numeroPagina}</PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationLink aria-label="Next" href="#pablo" onClick={e => this.arrows(e, "plusOne")}>
                                    <span aria-hidden={true}>
                                    <i aria-hidden={true} className="tim-icons icon-double-right"/>
                                    </span>
                                </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </Row>
                    <Row className="justify-content-center">
                        
                        {this.state.animes.map(serie => (
                            <Col md="6" className="mb-4 mg-1" key={serie.id}>
                                <Card className="card-stats bg-warning">
                                    <CardBody style={{position: "relative"}}>
                                        <h1 className="h1 float-left">{serie.id}</h1>
                                        <div className="justify-content-center">
                                            <div className="numbers position-relative">
                                                <CardTitle className="text-capitalize">{serie.titulo}</CardTitle>
                                                    {!serie.final &&
                                                        <p className="card-category text-white text-capitalize">
                                                            Sin Final
                                                        </p>
                                                    }
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <CardTitle>
                                            {serie.descripcion &&
                                                <p className="card-category text-white text-capitalize">Descripción: {serie.descripcion}</p>
                                            }
                                            {serie.periodo_visto &&
                                                <p className="card-category text-white text-capitalize">Período visto: {serie.periodo_visto}</p>
                                            }
                                                
                                        </CardTitle>
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                
                    <Row className="justify-content-center">
                        <Pagination className="pagination pagination-info" listClassName="pagination-info">
                            <PaginationItem>
                                <PaginationLink aria-label="Previous" href="#pablo" onClick={e => this.arrows(e, "restar")}>
                                    <span aria-hidden={true}>
                                    <i aria-hidden={true} className="tim-icons icon-double-left"/>
                                    </span>
                                </PaginationLink>
                            </PaginationItem>
                            
                            {this.state.amountPages.map(numeroPagina => (
                                <PaginationItem className={
                                    classnames({
                                        "active show": this.state.currentPage === numeroPagina
                                    })} 
                                    onClick={e => this.pageNumber(e, numeroPagina)} key={numeroPagina}>
                                    <PaginationLink>{numeroPagina}</PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationLink aria-label="Next" href="#pablo" onClick={e => this.arrows(e, "plusOne")}>
                                    <span aria-hidden={true}>
                                    <i aria-hidden={true} className="tim-icons icon-double-right"/>
                                    </span>
                                </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default ListaAnimes;