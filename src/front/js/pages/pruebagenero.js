import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import config from "./config";

import propTypes from "prop-types";

export const Pruebagenero = (props) => {
  const [generos, setGeneros] = useState([]);
  const [edades, setEdades] = useState([]);
  const [genderselected, setgenderselected] = useState(null);
  const [ageselected, setageselected] = useState(null);
  /*const [comentario, setComentario] = useState("");*/

  useEffect(() => {
    /*const callcomentarios = async () => {
      const res = await fetch(`${config.HOSTNAME}/api/comentario/1`);
      const data = await res.json();
      setComentario(data.data);
      console.log({ comentario });
    };
    callcomentarios();*/
    const callgeneros = async () => {
      const res = await fetch(`${config.HOSTNAME}/api/get_genero`);
      const data = await res.json();
      setGeneros(data.data);
    };
    callgeneros();
    const calledades = async () => {
      const res = await fetch(`${config.HOSTNAME}/api/edad`);
      const data = await res.json();
      setEdades(data.data);
    };
    calledades();
  }, []);

  const onComentario = async () => {
    const texto = document.getElementById("texto-input").value;
    const user_id = document.getElementById("user_id-input").value;

    const body = JSON.stringify({
      texto,
      user_id,
    });
    const res = await fetch(`${config.HOSTNAME}/api/comentario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await res.json();
    if (res.status != 201) {
      alert(data.msg);
      return;
    }
    console.log("El comentario se creo correctamente");
  };

  const consola = () => {
    console.log(generos);
  };
  const selgenero = (element) => {
    setgenderselected(element);
  };
  const seledad = (element) => {
    setageselected(element);
  };

  return (
    <div className="text-center mt-5 bg-black">
      <div>
        <label htmlFor="texto-input" className="form-label">
          Comenta
        </label>
        <input
          type="texto"
          className="form-control"
          id="texto-input"
          placeholder="Escribe aqui"
        />
        <label htmlFor="user_id-input" className="form-label">
          Comenta
        </label>
        <input
          type="user_id"
          className="form-control"
          id="user_id-input"
          value={1}
        />
        <button onClick={onComentario}>Este</button>
      </div>
      <button
        className="btn btn-outline-secondary dropdown-toggle float-end m-5"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {genderselected === null ? "Generos" : genderselected}
      </button>
      <ul className="dropdown-menu">
        {generos.map((item) => (
          <li>
            <button
              onClick={() => selgenero(item.nombre)}
              id={item.nombre}
              value={item.nombre}
              className="border-0 w-100"
            >
              {item.nombre}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="btn btn-outline-secondary dropdown-toggle float-end m-5"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {ageselected === null ? "Edades" : ageselected}
      </button>
      <ul className="dropdown-menu">
        {edades.map((item) => (
          <li>
            <button
              onClick={() => seledad(item.valor)}
              id={item.valor}
              value={item.valor}
              className="border-0 w-100"
            >
              {item.valor}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={consola}>Enviar</button>
    </div>
  );
};
