import React from "react";
import { Context } from "../store/appContext";

export const Hashtags = () => {
  return (
    <div className="sticky-bottom">
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">1</div>
        </div>
        <div className="tema m-auto">Noticias</div>
      </div>
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">2</div>
        </div>
        <div className="tema m-auto">Novedades</div>
      </div>
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">3</div>
        </div>
        <div className="tema m-auto">Grupos</div>
      </div>
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">4</div>
        </div>
        <div className="tema m-auto">Dudas</div>
      </div>
      <div className="hashtag rounded-pill d-flex mb-3">
        <div className="circulo">
          <div className="mt-1">5</div>
        </div>
        <div className="tema m-auto">Quedadas</div>
      </div>
    </div>
  );
};
