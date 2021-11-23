import React from "react"

import { Container, Row, Col } from "reactstrap"

function BeneficiosInfo(props){
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid justify-content-center">

                <Col lg="12" className="text-right">
                  <div className="info" style={{ "minWidth": "100%", paddingTop: "5%" }}>
                    <h2 className="text-warning">Restaurantes, Pizzerías, o similares</h2>
                    <div style={{"width": "100%", "position": "relative"}}>
                        <hr className="line-warning" style={{"position": "absolute", "right": "0", "top": "-30px"}}/>
                    </div>
                    <h4 className="text-neutral">
                    Posibilidad de que sus clientes hagan reservaciones o pedidos desde la web, ya sea para que cuando llegue, su comida esté lista, o bien para coordinar una entrega por delivery de forma automatizada (con PedidosYa o similares).
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Gracias a una página o aplicación web podrán organizar eventos en el restaurante informando a sus clientes de que, por ejemplo, "Hoy es el cumpleaños del dueño de la pizzería, así que estarémos regalando una pizza GRATIS por cada 10 pedidos realizados desde la web!", todo esto mediante un servicio de envío de Emails a sus clientes registrados.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Mostrar, mediante el servicio web, un mapa en el que ser resalte la ubicación del restaurante o sucursales para que sus posibles clientes puedan acceder fáicilmente.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        La capacidad de informar, mediante la página web, la disponibilidad de mesas en el restaurante para determinados horarios y fechas.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Siguiendo con la posibilidad de notificar a sus clientes, gracias a tener un servicio web podrán notificarles via Email cuando una recervación sea exitosa, cuando surja un imprevisto en el restaurante, o cuando se acerque la fecha de su reserva (si es que se hizo con un gran intervalo de por medio).
                    </h4>
                  </div>
                </Col>

                <Col lg="12">
                  <div className="info" style={{ "minWidth": "100%", paddingTop: "5%" }}>
                    <h2 className="text-success">Vendedores de MercadoLibre, comercios, proveedores</h2>
                    <hr className="line-success" />
                    <h4 className="text-neutral">
                        Una web E-comerce en la que poder realizar la compra-venta de productos fuera del entorno MercadoLibre, lo que trae con sigo la ventaja de no tener que estar pagando comisiones por cada venta, y la misma seguridad que uno podría llegar a tener dentro de plataformas como MercadoLibre o similares.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Si realizás pedidos de importación de productos desde el exterior, tus clientes podrán registrarse en el servicio web para realizar el pedido desde la propia página web y así poder tener un seguimiento de cómo va su pedido (si ya pasó por aduana, si se está preparando para el envío, etc). Y de ésta forma el vendedor solo tendrá que presionar un botón para actualizar a los usuarios del estado de sus pedidos.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Al tener un sitio web, se tiene la posibilidad de no sólo mostrar que productos se encuentran a la venta en estos momentos, sino que también se puede adelantar que productos entrarán en stock en un futuro, que servicios se ofrecen, etc.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        La posibilidad de enviar notificaciones via Email a todos los clientes registrados cuando se renueve el stock de un producto comprado previamente, o cuando se ofrece un nuevo servicio, o bien si un producto cotizado o esperado finalmente se encuentra disponible.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Un servicio web ofrece la opción de automatizar determinados aspectos como realizar seguimiento a ciertas cosas, enviar recordatorios de reponer stock, avisar a los clientes cuando surja un imprevisto para el vendedor, o actualizar el estado del envío o pedido de un producto.
                    </h4>
                  </div>
                </Col>
                
                <Col lg="12" className="text-right">
                  <div className="info" style={{ "minWidth": "100%", paddingTop: "5%" }}>
                    <h2 className="text-info">Escuelas o institutos</h2>
                    <div style={{"width": "100%", "position": "relative"}}>
                        <hr className="line-info" style={{"position": "absolute", "right": "0", "top": "-30px"}}/>
                    </div>
                    <h4 className="text-neutral">
                        La posibilidad de difundir detalles acerca de la institución de forma mucho más eficaz, y así hacer saber a padres o alumnos sobre, por ejemplo, qué actividades académicas se realizan, cuál es el reglamento, o bien cómo y cuándo se realizan exámenes, etc.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Publicación de los eventos escolares o que se realizarán en la institución, y siguiendo esta corriente de ideas, también se puede notificar mediante Email a los padres y/o alumnos acerca de dichos eventos, cuándo serán, qué hace falta llevar, dónde se realizarán, etc.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Dentro del sitio web los alumnos podrán tener acceso online a las tareas dejadas por los profesores, información extra para la clase, aportes que algún profesor quiera dar para que sus estudiantes revisen fuera de la mísma. Y por otro lado, los alumnos también podrán tener disponible la información acerca de los exámenes que se aproximan, trabajos que deban realizar, entre otros.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        En el caso de las escuelas, los padres podrían tener una sección dedicada para que puedan hacer seguimiento a las notas de sus hijos en los exámenes o trabajos, o a las faltas que tienen "en tiempo real", antes de que se tengan que publicar los boletines o similares.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Muchas personas no son grandes amigos/as de la tecnología, y para facilitarles ese aspecto, el propio sitio web podrá contar con un "recorrido guiado" para que la gente sepa cómo funciona, qué pueden hacer, qué no, y de qué manera.
                    </h4>
                    <br/>
                  </div>
                </Col>

                <Col lg="12">
                  <div className="info" style={{ "minWidth": "100%", paddingTop: "5%" }}>
                    <h2 className="text-primary">Médicos, abogados, proveedores de servicios</h2>
                    <hr className="line-primary" />
                    <h4 className="text-neutral">
                        Muéstrale al mundo a qué te dedicás exactamente, qué es lo que sabés hacer, en que rama o campo estás especializado/a, porqué deberían contratar tus servicios en lugar de los de alguien más, y qué ventajas obtendrán tus clientes al contratar tus servicios.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Educá a tus clientes, no todo el mundo sabrá a que te dedicás. Ésta es una oportunidad para explicarles de antemano en qué consiste tu especialidad, y porqué es importante que lo sepan. De esta forma tus clientes se acercarán con dudas más puntuales y fáciles de tratar o resolver.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Al tener una página web, las personas tendrán la opción de solicitar un turno o reunión mediante el propio servicio web, notificandote a ti y al cliente a través de el servicio de Emails, y reservandote automáticamente la disponibilidad en esa fecha y hora, con la información de quien vendrá.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Gracias a tener una aplicación web, tendrás la posibilidad de mostrar a los visitantes de la mísma un mapa en el que se muestre la ubicación del consultorio / oficina, o bien una aproximación. Y continuando con la idea, también se podrá mostrar información acerca de qué transporte público pasa cerca.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Es un hecho que tener un sitio web presenta a los clientes una imagen más profecional y creíble, pero es mejor aún cuando éste sitio web tiene un diseño moderno y amigable, y que se adapta a todo tipo de dispositivos para su correcta visualización.
                    </h4>
                    <br/>
                  </div>
                </Col>

                <Col lg="12" className="text-right">
                  <div className="info" style={{ "minWidth": "100%", paddingTop: "5%" }}>
                    <h2 className="text-danger">Pymes, startups, y otras empresas</h2>
                    <div style={{"width": "100%", "position": "relative"}}>
                        <hr className="line-danger" style={{"position": "absolute", "right": "0", "top": "-30px"}}/>
                    </div>
                    <h4 className="text-neutral">
                        Un sitio web es una excelente herramienta de reclutamiento, ya sea para conseguir nuevos empleados, colaboradores, o inversionistas de manera fácil y sencilla.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Mediante un servicio web alojado en la nube, se puede alcanzar una mayor eficiencia a la hora de transmitir información dentro de la empresa, o entre sucursales, sin tener que depender de servicios de terceros, sino mediante el sistema propietario que se puede desarrollar para la empresa.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Gracias a la oportunidad de registrar un dominio único para la empresa, se puede tener una dirección de Email especial para que sea "@empresa.com.ar" y de esa forma redirigir los mensajes de Email a las direcciónes de correo electrónico internas para su debido procesamiento.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Al tener una aplicación web, su empresa tendrá la posibilidad de establecer una interacción social con sus clientes / seguidores dentro de la mísma, para así entablar una mejor comunicación, recibir feedback de manera más eficiente, y difundir de mejor manera sus servicios.
                    </h4>
                  </div>
                </Col>

                <Col lg="12">
                  <div className="info text-center" style={{ "minWidth": "100%", paddingTop: "5%" }}>
                    <h2 className="text-success text-capitalize">aún más beneficios</h2>
                    <h4 className="text-neutral">
                        Un sitio web debe, bajo cualquier circunstancia, ser accesible para todos los públicos. Al facilitarle a la gente el uso de una aplicación web mediante un "recorrido guiado", por dar un ejemplo, estarás ganando un posible cliente fidelizado, ya que si alguien no pudiera comprender o utilizar tus servicios, simplemente migrará a otro sitio.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Un servicio web en la nube ofrece la capacidad de emitir reportes de forma periódica en formato de planillas de Excel mostrando la cantidad de actividad, por parte de los clientes, dentro del servicio web ( por ejemplo, comprar productos, reservar mesas, sacar turnos, etc. ), y así mismo mostrar las ganancias de todo lo realizable dentro del servicio web.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Un servicio web ofrece la opción de automatizar determinados aspectos como realizar seguimiento a ciertas cosas, enviar recordatorios, avisar a los clientes cuando surja un imprevisto, o actualizar el estado del envío o pedido de un producto. De la mísma manera se podrán facilitar muchas tareas rutinarias al permitir completarlas desde el propio servicio web.
                    </h4>
                    <br/>
                    <h4 className="text-neutral">
                        Gracias a la oportunidad de registrar un dominio único, se puede tener una dirección de Email especial para que sea "@empresa.com.ar", o algún otro, y de esa forma redirigir los mensajes de Email a las direcciónes de correo electrónico internas para su debido procesamiento.
                    </h4>
                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
}

export default BeneficiosInfo;