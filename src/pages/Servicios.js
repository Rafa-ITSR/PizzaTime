import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link,  } from 'react-router-dom';

function Personalizar() {
  const [tamaño, setTamaño] = useState('');
  const [aderezoSeleccionado, setAderezoSeleccionado] = useState('');
  const [ingredienteSeleccionado, setIngredienteSeleccionado] = useState('');
  
  

  const handleTamañoChange = (event) => {
    setTamaño(event.target.value);
  };

  const handleAderezoChange = (event) => {
    setAderezoSeleccionado(event.target.value);
  };

  const handleIngredienteChange = (event) => {
    setIngredienteSeleccionado(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>¡Personaliza tu pizza!</h1>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="form-group">
            <label htmlFor="tamañoDropdown">Tamaño</label>
            <select
              className="form-control"
              id="tamañoDropdown"
              value={tamaño}
              onChange={handleTamañoChange}
            >
              <option value="">Selecciona el tamaño</option>
              <option value="Chica">Chica</option>
              <option value="Mediana">Mediana</option>
              <option value="Grande">Grande</option>
              <option value="Familiar">Familiar</option>
              <option value="Extragrande">Extragrande</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="form-group">
            <label htmlFor="aderezoDropdown">Aderezos</label>
            <select
              className="form-control"
              id="aderezoDropdown"
              value={aderezoSeleccionado}
              onChange={handleAderezoChange}
            >
              <option value="">Selecciona el aderezo</option>
              <option value="Cátsup">Cátsup</option>
              <option value="Chimichurri">Chimichurri</option>
              <option value="Salsa Inglesa">Salsa Inglesa</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="form-group">
            <label htmlFor="ingredienteDropdown">Ingredientes</label>
            <select
              className="form-control"
              id="ingredienteDropdown"
              value={ingredienteSeleccionado}
              onChange={handleIngredienteChange}
            >
              <option value="">Selecciona el ingrediente</option>
              <option value="Hawaiana">Hawaiana</option>
              <option value="Peperoni">Peperoni</option>
              <option value="Mexicana">Mexicana</option>
              <option value="Champeroni">Champeroni</option>
              <option value="Choriqueso">Choriqueso</option>
              <option value="Carnes frías">Carnes frías</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-primary">
            <Link to="/" className="btn btn-primary mb-3">
              Regresar al menú principal
            </Link>
          </button>
        </div>
        <div className="col">
          <button className="btn btn-success">
            <Link to={{ 
      pathname: "/resumenpedido",
      state: {
        tamaño,
        aderezoSeleccionado,
        ingredienteSeleccionado,
      },
    }}  className="btn btn-primary mb-3">
              Aceptar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personalizar;