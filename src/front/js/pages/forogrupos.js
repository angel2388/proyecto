import React from "react";
import "../../styles/foro.css";
import { Link } from "react-router-dom";


export const Forogrupos = () => {
  return (
    <div className="col-8 m-auto mt-5">
      <h1 className="text-center text-white">Noticias</h1>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">¿Buscas grupo para jugar?</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Escribe aquí tu mensaje..." rows="3"></textarea>
          <button type="button" className="btn btn-light mt-2">Enviar</button>
        </div>
  </div>
  )
}