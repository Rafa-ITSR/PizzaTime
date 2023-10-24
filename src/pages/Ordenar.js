import React from 'react';
import { useLocation, Link } from 'react-router-dom';


function ResumenPedido() {
  const location = useLocation();
  const { newTamaño, newAderezo, newIngrediente } = location.state || {};

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <img
              src="./imagenes/pedido.jpg" 
              alt="Pizza"
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">Resumen del Pedido</h2>
              <p className="card-text">
                <strong>Tamaño:</strong> {newTamaño}
              </p>
              <p className="card-text">
                <strong>Aderezo:</strong> {newAderezo}
              </p>
              <p className="card-text">
                <strong>Ingrediente:</strong> {newIngrediente}
              </p>
            </div>
            <div className="card-footer">
              <Link to="/personalizar" className="btn btn-primary mr-2">
                Regresar a la personalización
              </Link>
              <Link to="/" className="btn btn-primary">
                Regresar al menú principal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumenPedido;