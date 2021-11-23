import React from "react"

import { Line } from "react-chartjs-2";

import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from "reactstrap"

class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {},
      width: window.innerWidth,
      mobile: false
    };
  }

  componentDidMount() {

    if (this.state.width <= 768) {
      this.setState({
        mobile: true
      })
    }

    const options = {
      maintainAspectRatio: true,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: "#fff",
        titleFontColor: "#ccc",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(0,0,0,0.0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
              suggestedMin: 0,
              suggestedMax: 350,
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(0,0,0,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    }

    this.setState({
      options: options
    })
  }

  data = (canvas) => {
    let ctx = canvas.getContext("2d")

    let gradientFill

    let cantidadDatos

    let cantidadLabels //los labels los dejo vacios por que se ven cortados...

    if (this.state.width <= 768) {
      gradientFill = ctx.createLinearGradient(0, 200, 0, 35);
      cantidadDatos = [
        0,  
        100, 
        90, 
        80, 
        180, 
        310,
        350,
      ] 

        cantidadLabels = [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
    }else{
      gradientFill = ctx.createLinearGradient(0, 330, 0, 90);
      cantidadDatos = [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]

      cantidadLabels = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }


    gradientFill.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientFill.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientFill.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: cantidadLabels, 
      datasets: [
        {
          label: "Medidor de Éxito",
          fill: true,
          backgroundColor: gradientFill,
          borderColor: "#1d8cf8",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1d8cf8",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#5464ed",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: cantidadDatos
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col md="12">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h3 className="card-category text-capitalize">la mejor opción</h3>
                      <CardTitle tag="h2" className="text-capitalize">para el éxito de tu negocio</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line data={this.data} options={this.state.options} />
                  </div>
                  {this.state.mobile && 
                    <h1 className="text-center text-neutral" style={{ "marginTop": "-20vh"}}>Tener una página web trae beneficios <u>siempre</u></h1>
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
          { !this.state.mobile &&
            <Row>
              <Col md="12">
                <h1 className="text-center text-neutral" style={{ "marginTop": "-10vh"}}>Tener una página web trae beneficios <u>siempre</u></h1>
              </Col>
            </Row> 
          }
        </Container>
      </React.Fragment>
    )
  }
}

export default Chart;