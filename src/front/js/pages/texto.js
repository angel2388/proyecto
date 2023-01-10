import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Like } from "./like";
import { doc } from "prettier";
import propTypes from "prop-types";
const HOSTNAME =
  "https://3001-angel2388-proyecto-28nm3xbuson.ws-eu77.gitpod.io";

export const Texto = (props) => {
  const onTexto = async () => {
    const nombre = document.getElementById("nombre-input").value;
    const imagen = document.getElementById("imagen-input").value;
    const horas_jugables = document.getElementById(
      "horas_jugables-input"
    ).value;
    const sinopsis = document.getElementById("sinopsis-input").value;
    const opinion = document.getElementById("opinion-input").value;
    const privado = document.getElementById("privado-input").value;
    const user_id = document.getElementById("user_id-input").value;
    const genero_id = document.getElementById("genero_id-input").value;
    const edad_id = document.getElementById("edad_id-input").value;

    if (
      nombre === null ||
      imagen === null ||
      horas_jugables === null ||
      sinopsis === null ||
      opinion === null ||
      privado === null ||
      user_id === null ||
      genero_id === null ||
      edad_id === null
    ) {
      alert(`Todos los campos son obligatorios`);
    }

    const body = JSON.stringify({
      nombre,
      imagen,
      horas_jugables,
      sinopsis,
      opinion,
      privado,
      user_id,
      genero_id,
      edad_id,
    });

    const res = await fetch(`${config.HOSTNAME}/api/postup`, {
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

    console.log(`El post se creo correctamente`);
  };
  const [value_private, setValue_private] = useState(false);
  const onvalue_private = () => {
    value_private === true
      ? setValue_private(false)
      : value_private === false
      ? setValue_private(true)
      : "";
  };

  return (
    <div className="text-center mt-5 bg-black">
      <input
        type="checkbox"
        className="btn-check"
        id="btn-check"
        autoComplete="off"
      />
      <label
        className="btn btn-primary"
        htmlFor="btn-check"
        onClick={onvalue_private}
      >
        {value_private ? "Privado" : "Publico"}
      </label>

      <div className="d-flex align-items-center ms-5">
        <label
          htmlFor="nombre-input"
          className="form-label rounded-pill bg-danger fs-1 my-2 "
        >
          Nombre
        </label>
        <input
          type="nombre"
          className="form-control h-25 ms-5"
          id="nombre-input"
          placeholder="nombre"
        />
      </div>
      <div className="d-flex align-items-center ms-5">
        <label
          htmlFor="horas_jugables-input"
          className="form-label rounded-pill bg-danger fs-1 my-2"
        >
          horas_jugables
        </label>
        <input
          type="horas_jugables"
          className="form-control"
          id="horas_jugables-input"
          placeholder="horas_jugables"
        />
      </div>
      <div className="d-flex align-items-center ms-5">
        <label
          htmlFor="imagen-input"
          className="form-label rounded-pill bg-danger fs-1 my-2"
          hidden
        >
          imagen
        </label>
        <input
          type="imagen"
          className="form-control"
          id="imagen-input"
          placeholder="imagen"
          value={props.valueimage}
          hidden
        />
      </div>
      <div className="d-flex align-items-center ms-5">
        <label
          htmlFor="sinopsis-input"
          className="form-label rounded-pill bg-danger fs-1 my-2"
        >
          sinopsis
        </label>
        <input
          type="sinopsis"
          className="form-control"
          id="sinopsis-input"
          placeholder="sinopsis"
        />
      </div>
      <div className="d-flex align-items-center ms-5">
        <label
          htmlFor="opinion-input"
          className="form-label rounded-pill bg-danger fs-1 my-2"
        >
          opinion
        </label>
        <input
          type="opinion"
          className="form-control"
          id="opinion-input"
          placeholder="opinion"
        />
      </div>
      <div className="d-flex align-items-center ms-5">
        <label
          htmlFor="privado-input"
          className="form-label rounded-pill bg-danger fs-1 my-2"
        >
          privado
        </label>
        <input
          type="privado"
          className="form-control"
          id="privado-input"
          placeholder="privado"
        />
      </div>
      <div className="d-flex align-items-center ms-5">
        <label
          htmlFor="user_id-input"
          className="form-label rounded-pill bg-danger fs-1 my-2"
        >
          user_id
        </label>
        <input
          type="user_id"
          className="form-control"
          id="user_id-input"
          placeholder="user_id"
        />
      </div>
      <div className="d-flex align-items-center ms-5">
        <label
          htmlFor="genero_id-input"
          className="form-label rounded-pill bg-danger fs-1 my-2"
        >
          genero_id
        </label>
        <input
          type="genero_id"
          className="form-control"
          id="genero_id-input"
          placeholder="genero_id"
        />
      </div>
      <div className="d-flex align-items-center ms-5">
        <label
          htmlFor="edad_id-input"
          className="form-label rounded-pill bg-danger fs-1 my-2"
        >
          edad_id
        </label>
        <input
          type="edad_id"
          className="form-control"
          id="edad_id-input"
          placeholder="edad_id"
        />
      </div>
      <button onClick={onTexto}>Enviar</button>
    </div>
  );
};
