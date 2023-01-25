import React from "react";
import { Link } from "react-router-dom";
import { Hashtags } from "../component/hashtags";


export const Foro = () => {
  return (
  <div className="text-center">
    <div className="hashtag rounded-pill d-flex mb-3">
        <div className="tema m-auto" href="#">Noticias</div>
    </div>
    <div className="hashtag rounded-pill d-flex mb-3">
        <div className="tema m-auto" href="#">Novedades</div>
    </div>
    <div className="hashtag rounded-pill d-flex mb-3">
        <div className="tema m-auto" href="#">Grupos</div>
    </div>
    <div className="hashtag rounded-pill d-flex mb-3">
        <div className="tema m-auto" href="#">Dudas</div>
    </div>
    <div className="hashtag rounded-pill d-flex mb-3">
        <div className="tema m-auto" href="#">Quedadas</div>
    </div>
  </div>
    )
  };