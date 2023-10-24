import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';




function Ofertas() {
  return (
    <div className="bg-info-subtle">
    <div className="container-fluid">
      <h1 className="display-1 text-center">Ofertas de la semana</h1>
      <br/>
      <br/>
      <br/>

      <div className="row align-items-center">
        <div className="col">
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4">
              <img src={"./imagenes/hawai.jpg"} alt="hawaiana" width="160px" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hawaiana</h5>
                  <p className="card-text">
                     Sabrosa pizza hawaiana mediana con extra queso,
                     base de masa fina ¡Todo lo que necesitas
                     para una pasar un buen rato con un sabor único
                     y diferente!  
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                    $150.00 MXN Hasta agotar existencias
                    </small>
                  </p>
                  <button className="btn btn-success">
                  <Link to="/resumenpedido" className="btn btn-success" >
                    Ordenar
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4">
              <img src={"./imagenes/mexa.jpg"} alt="Mexicana" width="160px" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Mexicana</h5>
                  <p className="card-text">
                    Deliciosa pizza chica preparada con los 
                    mejores ingredientes de la región
                    para desgustar con tu pareja o amigos.
                    ¡La mejor pizza Mexicana de Balancán! 
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      $100.00 MXN Hasta agotar existencias
                    </small>
                  </p>
                  <button className="btn btn-success">
                  <Link to="/resumenpedido" className="btn btn-success" >
                    Ordenar
                    </Link>
                  </button>               
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4">
              <img src={"./imagenes/champi.jpg"}  alt="Champeroni" width="160px" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Champeroni</h5>
                  <p className="card-text">
                      ¡Para que degustes del sasón de Oliver!
                      Prueba la deliciosa pizza de peperoni con
                   champiñones lista para ordenar y con la 
                   garantía de calidad de Oliver
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                    $200.00 MXN Hasta agotar existencias
                    </small>
                  </p>
                  <button className="btn btn-success">
                  <Link to="/resumenpedido" className="btn btn-success">
                    Ordenar
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

        

      </div>

      <br/>
      <br/>
      <br/>

      <div className="modal-footer">
                <button className="btn btn-primary">
                  <Link to="/" className="btn btn-primary mb-3">
                    Regresar al menú
                  </Link>
                </button>
        </div>

    </div>
    </div>
  );
  }

export default Ofertas;
