import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import config from "./config";
import { doc } from "prettier";
import propTypes from "prop-types";

export const Pruebagenero = (props) => {
  const [generos, setGeneros] = useState([]);
  const [edades, setEdades] = useState([]);
  const [genderselected, setgenderselected] = useState(null);
  const [ageselected, setageselected] = useState(null);

  useEffect(() => {
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
