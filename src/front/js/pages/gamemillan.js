import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "./config";
import { Link } from "react-router-dom";

export const Gamemillan = (props) => {
  const params = useParams();
  const [detalle, modificardetalle] = useState({});
  const [cargando, modificarCargando] = useState(true);

  useEffect(async () => {
    //const res = await fetch(`${config.HOSTNAME}/people/${params.uid}`);
    const res = await fetch(`${config.HOSTNAME}/api/post`);
    const data = await res.json();
    console.log({ detalle: data });
    modificardetalle(data.data);
    console.log({ detalle: data });
    modificarCargando(false);
  }, []);

  if (cargando) {
    return <div>La info esta cargando...</div>;
  }

  return (
    <div style={{ backgroundImage: 'url("/cielo-estrellado.webp")' }}>
      <div className="card w-50 m-auto">
        <img
          className="card-img-top"
          src="/cielo-estrellado.webp"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">
            <h1>{detalle[0].user}</h1>
          </h5>
          <p className="card-text">
            Nombre:{detalle.nombre}
            <br />
            Genero:{detalle.genero}
            <br />
            Altura:{detalle.edad}cm
            <br />
            Peso:
            <br />
            Color de pelo:{detalle.horas_jugables}
            <br />
            Color de piel:{detalle.imagen}
            <br />
            Color de ojos:{detalle.opinion}
            <br />
            Año de nacimiento:{detalle.sinopsis}
            <br />
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    </div>
  );
};
