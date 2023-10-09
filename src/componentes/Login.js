import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div className="p-3 mb-2 bg-warning text-emphasis-warning">
      <div className="col-md-6 offset-md-3">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row ">
        <div className="">
          <div className="card">
            <div className="card-body">
              <div>
                <h1 className="display-6 text-center">
                  <i className="bi bi-person-arms-up"></i>
                </h1>
                <h1 className="display-6 text-center">Iniciar sesion</h1>
                <br />
                <br />
                <div className="mb-3 row">
                  <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="inputEmail" />
                  </div>
                </div>
                
                <div className="mb-3 row">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <center>
                    <Link to="/" className=" btn btn-primary mb-3">
                      Entrar
                    </Link>
                  </center>
                </div>
                <div className="">
                  <Link className="" to='/registro'>
                  <h6> No tiene cuenta? Registrese</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    
    </div>
    </div>
  )
}

export default Login;