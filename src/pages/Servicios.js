import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Personalizar() {
  const [newTamaño, setTamaño] = useState('');
  const [newAderezo, setAderezoSeleccionado] = useState('');
  const [newIngrediente, setIngredienteSeleccionado] = useState('');
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  const handleTamañoChange = (event) => {
    const newTamaño = event.target.value;
    setTamaño(newTamaño);
  };

  const handleAderezoChange = (event) => {
    const newAderezo = event.target.value;
    setAderezoSeleccionado(newAderezo);
  };

  const handleIngredienteChange = (event) => {
    const newIngrediente = event.target.value;
    setIngredienteSeleccionado(newIngrediente);
  };

  const handleAceptarClick = () => {
    // Usamos navigate para redirigir a la página de resumenpedido
    navigate('/resumenpedido', {
      state: {
        newTamaño,
        newAderezo,
        newIngrediente,
      },
    });
  };


  return (
    <div className="bg-image">
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
              value={newTamaño}
              onChange={handleTamañoChange}
            >
              
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
              value={newAderezo}
              onChange={handleAderezoChange}
            >
              
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
              value={newIngrediente}
              onChange={handleIngredienteChange}
            >
              
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
        <button className="btn btn-success" onClick={handleAceptarClick}>
          Aceptar
        </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Personalizar;