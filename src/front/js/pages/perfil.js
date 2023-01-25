import React from "react";
import { Link } from "react-router-dom";
import "../../styles/perfil.css";
import { Post } from "../component/post.js";

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

      {/* PUBLICACIONES */}
      {/* TÍTULOS */}
      <div>
      <ul className="nav nav-tabs m-4" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Publicaciones públicas</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Publicaciones privadas</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Me gusta</button>
    </li>
  </ul>
  </div>

    {/* CONTENIDO */}
  <div className="tab-content m-4" id="myTabContent">
    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0"><Post></Post></div>
    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
  </div>

  </div>
    )
  };