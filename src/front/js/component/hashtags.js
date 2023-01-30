import React from "react";
import { Context } from "../store/appContext";
import "../../styles/hashtags.css";


export const Hashtags = () => {
  return (
    <div className="sticky-bottom">
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">1</div>
        </div>
        <a className="tema m-auto" href="Foronoticias">Noticias</a>
      </div>
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">2</div>
        </div>
        <a className="tema m-auto" href="Foronovedades">Novedades</a>
      </div>
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">3</div>
        </div>
        <a className="tema m-auto" href="Forogrupos">Grupos</a>
      </div>
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">4</div>
        </div>
        <a className="tema m-auto" href="Forodudas">Dudas</a>
      </div>
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">5</div>
        </div>
        <a className="tema m-auto" href="Foroquedadas">Quedadas</a>
      </div>
    </div>
  );
};
