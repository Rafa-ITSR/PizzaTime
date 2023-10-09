import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Ofertas() {
  const ofertas = [
    {
      id: 1,
      nombre: "Oferta 1",
      imagen1: "./public/imagenes/imagen1.jpg"
    },
    {
      id: 2,
      nombre: "Oferta 2",
      imagen2: "./imagenes/imagen2.jpg"
    },
    // Agregar más ofertas según las necesidades
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>Ofertas Actuales</h1>
        </div>
      </div>

      <div className="row mt-3">
        {ofertas.map((oferta) => (
          <div className="col-md-4" key={oferta.id}>
            <div className="card mb-4">
              <img
                src={require(`./${oferta.imagen1}`).default}
                className="card-img-top"
                alt={oferta.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{oferta.nombre}</h5>
                <button className="btn btn-primary">Ordenar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-3">
        <div className="col">
          <Link to="/" className="btn btn-primary">Regresar al menú principal</Link>
        </div>
      </div>
    </div>
  );
}

export default Ofertas;
