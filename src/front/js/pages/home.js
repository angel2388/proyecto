import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Navbar from "../component/navbar";
import { Card } from "../component/card";
import { Hashtags } from "../component/hashtags";
import Portada from "../../img/portada.png";
import Portada2 from "../../img/portada2.png";
import Portada3 from "../../img/portada3.jpg";
import { Cardscroll } from "../component/cardscroll";
import config from "./config";

export const Home = () => {
  const { store, actions } = useContext(Context);
  //millan nuevo
  const [juegos, setJuegos] = useState([]);
  const [generos, setGeneros] = useState([]);
  useEffect(() => {
    const calljuegos = async () => {
      const res = await fetch(`${config.HOSTNAME}/api/post`);
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

  document.body.style = "background: #2A2A2A;";

  return (
    <div>
      <div>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-mdb-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Portada} class="d-block w-100" />
              <div className="texto-portada col-md-4 bg-secondary bg-opacity-50 p-3">
                <div class="texto-encima ">¡Bienvenido/a a My Games Site!</div>
                <div class="texto-debajo">Tu red social de videojuegos.</div>
              </div>
            </div>
            <div class="carousel-item" data-mdb-interval="2000">
              <img src={Portada3} class="d-block w-100" />
              <div className="texto-portada col-md-4 bg-secondary bg-opacity-50 p-3">
                <div class="texto-encima ">¡Descubre nuevos videojuegos!</div>
                <div class="texto-debajo">
                  Escribe tus propias reseñas y descubre nuevos videojuegos
                  mediante las reseñas del resto de usuarios.
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Portada2} class="d-block w-100" />
              <div className="texto-portada col-md-4 bg-secondary bg-opacity-50 p-3">
                <div class="texto-encima ">
                  ¡Conoce a personas con gustos similares!
                </div>
                <div class="texto-debajo">
                  Podrás hacerlo través de nuestra sección de "conversaciones".
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            data-mdb-target="#carouselExampleInterval"
            type="button"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button
            class="carousel-control-next"
            data-mdb-target="#carouselExampleInterval"
            type="button"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      <div className="text-center mt-5 d-flex">
        <div className="col-3">
          <Hashtags></Hashtags>
        </div>
          <div className="col-9">
        <h1 className="mb-4 text-light">Juegos mejor valorados</h1>
        <div className="Container">
            {generos.map((gender) => {
              return (
                <div>
                  <Cardscroll
                    genero={gender.nombre}
                    content={juegos.map((juego) => {
                      if (juego.genero === gender.nombre) {
                        return (
                          <div className="col-3">
                            <Card title={juego.nombre}></Card>
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
    </div>
  );
};

/* {store.message || "Loading message from the backend (make sure your python backend is running)..."} */
