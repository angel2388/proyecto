import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Texto } from "./texto";
import { Like } from "./like";
import "../../styles/subirpost.css";

import config from "./config";

export const Subirpost = () => {
  const { store, actions } = useContext(Context);
  const [imageURL, setImageURL] = useState("");

  const sendImage = async () => {
    //manda la foto al cloudinary
    console.log(">>>sendImage");
    const archivos = document.getElementById("file-input").files;
    if (archivos.length == 0) {
      alert(">> Falta imagen");
      return;
    }
    console.log({ archivos });
    const archivo = archivos[0];
    const body = new FormData();
    body.append("archivo", archivo);

    fetch(`${config.HOSTNAME}/api/upload`, {
      method: "POST",
      body,
    })
      .then((res) => {
        return res.json(); //lo cambia a un formato legible
      })
      .then((data) => {
        console.log({ data });
        loadImage(data.secure_url);
        setImageURL(data.secure_url);
        console.log("hola" + imageURL);
      });
    console.log();
  };

  const loadImage = (url) => {
    console.log("aqui hay imagen");
    const archivo = document.getElementById("file-input").files[0];

    let urlImage = url;
    if (!urlImage) {
      const blob = new Blob([archivo], { type: archivo.type });
      urlImage = URL.createObjectURL(blob);
    }

    console.log({ urlImage });
    setImageURL({ urlImage });
    console.log("aqui debajo");
    console.log({ imageURL });
    const imageElement = document.getElementById("image");
    imageElement.src = urlImage;
    console.log(imageElement.src);
    setImageURL(imageElement.src);
    console.log(imageURL);
  };

  const openWindowFile = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div className="text-center pt-3">
      <div className="d-flex justify-content-center my-2">
        <h1 className="col-6 text-white">Crea tu publicación</h1>
      </div>

      <div className="d-flex">
      <div className="col-6">
      <div className="publicacion d-flex align-items-center ms-5">
        <p className="col-2 my-2">Nombre del juego</p>
        <input className="h-25 ms-5 w-50"></input>
      </div>
      <div className="publicacion d-flex align-items-center ms-5">
        <p className="col-2 my-2">Sinopsis</p>
        <input className="h-25 ms-5 w-50"></input>
      </div>
      </div>

      <div className="col-6">
      <div className="d-flex align-items-center ms-5">
        <p className="subir-imagen rounded-pill col-4 p-1 my-2" onClick={openWindowFile}>
          Subir imagen
        </p>
        <img
          className="ms-5"
          src=""
          id="image"
          style={{ width: "100px", height: "100px" }}
        ></img>
        <button onClick={sendImage} className="ms-3">Subir</button>
      </div>
      </div>
      </div>

      <input
        hidden
        id="file-input"
        type="file"
        onChange={() => loadImage()}
      ></input>
      {/* <input hidden id="file-input" type="file"></input> */}

      {/* <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p> */}
      <Texto value={imageURL}></Texto>
    </div>
  );
};
