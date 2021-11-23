import React from "react"

import { Row, Col, Card, CardBody, CardTitle, CardFooter } from "reactstrap"

function ListaMundos(props){

    const MundoCard = (
        <Col md="7" className="mb-4 mg-1">
            <Card className="card-stats bg-warning">
                <CardBody style={{position: "relative"}}>
                    <h1 className="h1" style={{position: "absolute"}}>2</h1>
                    {/* aqui va el numero del mundo */}
                    <div className="justify-content-center">
                        <div className="numbers">
                            <CardTitle>Suzuha</CardTitle>
                            {/* dios regente */}
                                {/* <p className="card-category text-white">
                                    Sin Final
                                </p> */}
                        </div>
                    </div>
                </CardBody>
                <CardFooter>
                    <CardTitle>
                        <p className="card-category text-white">(2) steins;gate y steins;gate 0 originales</p>
                        <p className="card-category text-white">(1) toradora!</p>
                        <p className="card-category text-white">(3) Ookami-san to Shichinin no Nakama-tachi</p>
                        <p className="card-category text-white">(4) occultic;nine</p>
                    </CardTitle>
                </CardFooter>
            </Card>
        </Col>
    )
    
    return (
        <Row className=" justify-content-center">
            {MundoCard}
        </Row>
    )
}

export default ListaMundos;