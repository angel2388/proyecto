import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, matchPath } from "react-router-dom";
import { fileURLToPath } from "url";
import { Card } from "../component/card";
import { Cardscroll } from "../component/cardscroll";
import config from "./config";

export const MainPage = () => {
  const { store, actions } = useContext(Context);
  const [juegos, setJuegos] = useState([]);
  const [generos, setGeneros] = useState([]);
  useEffect(() => {
    const calljuegos = async () => {
      const res = await fetch(`${config.HOSTNAME}/api/posts`);
      const data = await res.json();
      setJuegos(data.data);
      console.log(data.data);
    };
    calljuegos();

    const callgeneros = async () => {
      const res = await fetch(`${config.HOSTNAME}/api/get_genero`);
      const data = await res.json();
      setGeneros(data.data);
    };
    callgeneros();
  }, []);
  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Juegos del momento</h1>
      <div className="container">
        <div>
          {generos.map((gender) => {
            return (
              <div>
                <Cardscroll
                  genero={gender.nombre}
                  content={juegos.map((juego) => {
                    if (juego.genero === gender.nombre) {
                      return (
                        <div className="col-3">
                          <Card
                            title={juego.nombre}
                            url={juego.id}
                            img={juego.imagen}
                          ></Card>
                        </div>
                      );
                    }
                  })}
                ></Cardscroll>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
/**/
/* {store.message || "Loading message from the backend (make sure your python backend is running)..."} */
