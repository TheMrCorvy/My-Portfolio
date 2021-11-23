import React from "react"

import { Container, Row, Col } from "reactstrap"

import FormContacto from "../otros/FormContacto.js"

function SectionContacto() {
    return (
        <Container id="contacto">
            <h1 className="profile-title text-center text-neutral">Contacto</h1>
            <Row>
                <Col md="6">
                    <FormContacto/>
                </Col>
                <Col className="ml-auto" md="4">
                    <div className="mb-5 mt-5 info-horizontal">
                        <div className="icon icon-primary">
                            <i className="tim-icons icon-email-85" />
                        </div>
                        <div className="description">
                            <h4 className="info-title">Envía un Email:</h4>
                            <p>mr.corvy@gmail.com <br/>  <br/>gonzalosalvadorcorvalan@gmail.com</p>
                        </div>
                    </div>
                    <div className="mb-5 info-horizontal">
                        <div className="icon icon-primary">
                            <i className="tim-icons icon-mobile" />
                        </div>
                        <div className="description">
                            <h4 className="info-title">Envía un WhatsApp:</h4>
                            <p>+54 11 5048-8031 <br/> Lunes a Viernes de 10am a 6pm</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionContacto;