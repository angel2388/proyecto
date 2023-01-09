import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/post.css";
import "../../styles/hashtags.css";


export const Post = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="pagination justify-content-center">
      <div className="card border-light mb-3 col-7">
        <div className="row px-2 py-2">
          <div className="d-flex">
            <img
              src="https://i.redd.it/js3o38c990a41.jpg"
              className="rounded-circle img-fluid col-1"
            ></img>
            <p className="col-6 mt-auto ms-2">Nombre de usuario</p>
            <p className="col-5 mt-auto text-end pe-2">Fecha</p>
          </div>
        </div>
        {/* División del post (foto y texto) */}
        <div className="d-flex align-items-center px-2 py-2">
          <div className="d-flex col-7">
            <img
              className="imagen mx-auto img-fluid mb-2 h-100"
              src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/11/3/sgwrnbir22k5cjhtnfnc/yakuza-like-a-dragon-personajes">
            </img>
          </div>
          {/*CATEGORÍAS */}
          <div className="col-5 ms-2">
            <div className="categoria w-25 rounded-pill m-auto">
              <p className="p-1 text-center">Nombre</p>
            </div>
            <div className="text-center">
                <p>Texto</p>
              </div>
            <div className="categoria w-25 rounded-pill m-auto">
              <p className="p-1 text-center">Sinopsis</p>
            </div>
              <div className="me-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
              <div className="d-flex">
              <div className="categoria col-5 rounded-pill m-auto">
              <p className="p-1 text-center">Horas jugables</p>
            </div>
            <div className="categoria col-3 rounded-pill m-auto">
              <p className="p-1 text-center">Género</p>
            </div>
            <div className="categoria col-3 rounded-pill m-auto">
              <p className="p-1 text-center">Edad</p>
            </div>
            </div>
          </div>
        </div>
        {/* OPINIÓN PERSONAL */}
        <hr class="dashed"></hr>
        <div className="categoria w-25 rounded-pill m-auto">
              <p className="m-auto p-1 text-center">Opinión personal</p>
            </div>
            <div className="ms-2">
                <p>Texto</p>
            </div>
            <div className="text-end me-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
                <line x1="8" y1="12" x2="8" y2="12.01" />
                <line x1="16" y1="12" x2="16" y2="12.01" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
                </div> 
      </div>
    </div>
  );
};

