import React from "react";
import { Link } from "react-router-dom";
import "../../styles/perfil.css";


export const Perfil = () => {
  return (
  <div>
    {/* Encabezado */}
    <div>
    <div className="header">
    <h1 className="mb-4">Mi perfil</h1>
    <img src="https://i.redd.it/js3o38c990a41.jpg" className="rounded-circle img-fluid col-1 mb-2"></img>
    <p>Nombre de usuario</p>
    </div>
    </div>
    {/* Publicaciones */}
    <div className="mt-4">
        <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Publicaciones públicas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Publicaciones privadas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Likes</a>
      </li>
    </ul>    
    </div>
  </div>
    )
  };