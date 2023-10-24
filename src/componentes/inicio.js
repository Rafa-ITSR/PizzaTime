import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Inicio() {
    return (
   
 
<div className="bg-success">
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Pizzatime</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/login">Iniciar sesión</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Pizzería "El rincón de Oliver's"</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
    </nav>
     
    

    
    <div className="row mt-4">
          <div className="col text-center">
            <button className="btn btn-primary btn-lg">
              <Link to="/personalizar" className=" btn btn-primary mb-3">Personalizar pizza</Link>
              </button>
            <button className="btn btn-secondary btn-lg"> 
            <Link to="/ofertas" className="text-white">Ofertas</Link></button>
          </div>
     </div>   
    
     <div className="row mt-4">
        <div className="position-relative">
          <div  className="position-absolute top-0 start-0 translate-middle-y">
            <img  src={'./imagenes/imagen1.jpg'} className="img-fluid" alt="Pizza Abajo Izquierda" width="400px"/>
          </div>
        </div>

        <div className="position-relative">
          <div className="position-absolute top-0 end-0 translate-middle-y">
            <img  src={'./imagenes/imagen2.jpg'} className="img-fluid" alt="Pizza Abajo Derecha" width="250px"/>
          </div>
        </div>
      
      
      <br/>
      <br/>
      <br/>
        
        <div className="position-relative">
          <div className="position-absolute top-100 start-50 translate-middle-x">
            <img  src={'./imagenes/imagen4.jpg'} className="img-fluid" alt="Pizza Abajo Centro"  width="300px"/>
          </div>
        </div>
        </div>
    
        </div>
  
     
    );

  }
  
  export default Inicio;