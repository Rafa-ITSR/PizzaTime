import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Registro = () => {

    
    //const url = './imagenes/pizza.jpeg';
    return (
      <div className="menu-container" >
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <span className="navbar-brand">Registrate en PizzaTime</span>
          </div>
        </nav>
  
        <div className="container menu-content">
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
            </div>
  
            <div className="form-group">
              <label htmlFor="apellido">Teléfono</label>
              <input type="text" className="form-control" id="apellido" placeholder="Ingresa tu número de teléfono" />
            </div>
  
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Contraseña</label>
              <input  type="password" className="form-control" id="inputPassword" placeholder="Ingresa tu contraseña" />
            </div>
        
            <Link to="/" className="btn btn-primary">Registrarse</Link>
          </form>
        </div>


        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-inner">
           <div className="carousel-item active">
            <img src="./imagenes/carne.jpg" className="d-block w-100" alt="Pizza de carnes frías"/>
          </div>
             <div className="carousel-item">
           <img src="./imagenes/mexa.jpg" className="d-block w-100" alt="Pizza Mexicana"/>
          </div>
            <div className="carousel-item">
             <img src="./imagenes/chori.jpg" className="d-block w-100" alt="Pizza de chorizo"/>
              </div>
              </div>
                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                  </button>
                   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                  </button>
                 </div>
      </div>


    );
    
  };
  

export default Registro;
