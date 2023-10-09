import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

function ResumenPedido() {
  const location = useLocation();
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleOrdenarClick = () => {
    setMostrarMensaje(true);
  };

  if (!location.state) {
    return null; // No mostrar nada si no hay datos en la ubicación
  }

  // Construye la cadena de texto para la pizza seleccionada
  const { pizzaSeleccionada } = location.state;
  
  // Renderiza los detalles de la pizza personalizada en una tarjeta
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>Resumen del Pedido</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pizza Seleccionada</h5>
              <p className="card-text">{pizzaSeleccionada}</p>
              <h5 className="card-title">Precio Total</h5>
              <button className="btn btn-primary" onClick={handleOrdenarClick}>
                Ordenar Pizza
              </button>
            </div>
          </div>
        </div>
      </div>

      {mostrarMensaje && (
        <div className="modal-backdrop show">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Gracias por su preferencia</h5>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">
                  <Link to="/" className="btn btn-primary mb-3">
                    Regresar al menú
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
      
}

export default ResumenPedido;