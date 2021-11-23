import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

function LanguajeTable () {
    return (
      <Container style={{ marginBottom: "10vw" }}>
        <Row>
          <Col lg="12">
            <h2 className="text-center text-neutral py-5 my-5">¿Cuáles son los Idiomas que hablo?</h2>
          </Col>
        </Row>
        <Row className="px-3">
          <Col lg="6">
            <Card className="bg-info">
                <CardBody>
                    <CardHeader>
                      <CardTitle className="text-center"><h3>Inglés</h3></CardTitle>
                    </CardHeader>
                    <CardText style={{ marginBottom: "1.5em" }}>Llevo estudiando continuamente el idioma desde la primaria, aunque en el fue 2018 cuando comencé a estudiar seriamente en el CUI (el Centro Universitario de Idiomas) y desde entonces he estado desarrollando mis habilidades comunicativas en el idioma Inglés, a tal punto que actualmente lo domino a un nivel avanzado.</CardText>
                </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="bg-danger">
                <CardBody>
                    <CardHeader>
                      <CardTitle className="text-center"><h3>Japonés</h3></CardTitle>
                    </CardHeader>
                    <CardText>A principios del 2019 comencé a estudiar el idioma y aunque lo domino a un nivel más bien básico, lo suficiente para mantener conversaciones, siempre me mantengo estudiando y practicando el mísmo en el CUI (el Centro Universitario de Idiomas) y gracias a eso logré rendir y aprobar el examen de certificación internacional Noryoku Shiken N5.</CardText>
                </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

export default LanguajeTable;
