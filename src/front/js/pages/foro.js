import React from "react";
import { Link } from "react-router-dom";
import "../../styles/foro.css";


export const Foro = () => {
  return (
  <div className="temas text-center">
    <div className="tema rounded-pill mt-5 mb-4">
        <a className="m-auto" href="Foronoticias">Noticias</a>
    </div>
    <div className="tema rounded-pill mb-4">
        <a className="m-auto" href="Foronovedades">Novedades</a>
    </div>
    <div className="tema rounded-pill mb-4">
        <a className="m-auto" href="Forogrupos">Grupos</a>
    </div>
    <div className="tema rounded-pill mb-4">
        <a className="m-auto" href="Forodudas">Dudas</a>
    </div>
    <div className="tema rounded-pill mb-4">
        <a className="m-auto" href="Foroquedadas">Quedadas</a>
    </div>
  </div>
    )
  };