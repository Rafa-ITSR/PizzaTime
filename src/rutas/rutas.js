import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Ofertas from "../pages/Ofertas";
import Inicio from "../componentes/inicio";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";
import ResumenPedido from "../componentes/Ordenar";
import Registro from "../componentes/Registro"; 
import Personalizar from "../pages/Servicios";
import Login from "../componentes/Login";



function Rutas() {
  return (
    <>
    <Layout>
      <Routes> 
        <Route path="/home" element={<Home />} />   
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/inicio" element={<Inicio/>}/>   
        <Route path="/ofertas" element={<Ofertas/>}/>
        <Route path="/resumenpedido" element={<ResumenPedido/>}/>
        <Route path="/personalizar" element={<Personalizar/>}/>
        <Route path="/" element={<Inicio/>}/>    
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>   
      </Routes>
    </Layout>
    </>
  );
}

export default Rutas;