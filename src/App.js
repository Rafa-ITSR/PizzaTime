import React from 'react';
import { BrowserRouter} from "react-router-dom";
import './App.css';

import Rutas from "./rutas/rutas";


function App() {

  return (
   

    <BrowserRouter>
    
      <div className="container-fluid">    
       
        <Rutas/>
      
      </div>
      
    </BrowserRouter>


    
  );
}
  


export default App;
