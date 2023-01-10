import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Util } from "./util";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import AvatarDefault from "../../img/avatardefault.png";
import "../../styles/home.css";
import { doc } from "prettier";
import config from "./config";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState();
  const sendImage = async () => {
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
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        loadImage(data.secure_url);
      });
    console.log();
  };
  const loadImage = (url) => {
    const archivo = document.getElementById("file-input").files[0];

    let urlImage = url; //onchange se llama a esta funcion y se aplica a la variable urlImage el url
    if (!urlImage) {
      //si cambia el estado de urlImage
      const blob = new Blob([archivo], { type: archivo.type }); //hace un blob de la const archivo, con el tipo archivo
      urlImage = URL.createObjectURL(blob);
    }

    console.log({ urlImage });
    const imageElement = document.getElementById("image");
    imageElement.src = urlImage; //la url de la imagen se situa en el src para que salga en pantalla
  };
  const openWindowFile = () => {
    //se abre los documentos del usuario al hacer click donde esté esta función,
    document.getElementById("file-input").click(); //toma el elemento con ese id, y le hace "click"
  };

  const newVal = (e) => {
    const emaildata = document.getElementById("pa").value;

    let texto = e;
    if (texto.length < 4) {
      emaildata = "cebolla";
    } else {
      return texto;
    }
  };

  const cebolla = () => {
    return "cebolla";
  };

  const loadData = (data) => {
    const emaildata = document.getElementById("data-input");
  };

  if (localStorage.userdata) {
    const datalocal = JSON.parse(localStorage.getItem("userdata"));
    setUser(datalocal);
    console.log({ userdata });
    console.log("Se esta cargando la informacion desde localStorage");
  } else {
    const res = /*await*/ fetch(`${config.HOSTNAME}/api/people`);
    const data = /*await*/ res.json();

    localStorage.setItem("userdata", JSON.stringify(data.results));
    setUser(data.results);
    console.log({ data });
    console.log("Se esta realizando el fetch a la API");
  }

  /*useEffect(async () => {
    fetch(`${config.HOSTNAME}/api/private`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenData.token}`,
      },
    })
      .then((res) => {
        console.log({ res });
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        setDisabled(false);
      });
  }, []);*/
  return (
    <div className="text-center mt-5">
      {/* <input hidden id="file-input" type="file" onChange={loadImage}></input> */}
      <div className="row">
        <input
          hidden
          id="file-input"
          type="file"
          onChange={() => loadImage()}
        ></input>
        <img
          onClick={openWindowFile}
          src={AvatarDefault}
          id="image"
          style={{ width: "200px", height: "200px" }}
        ></img>
        <button className="col-1 h-25 my-auto" onClick={sendImage}>
          Submit
        </button>
        <input
          className="col-2"
          onChange={(e) => newVal(e.target.value)}
          id="pa"
        />
      </div>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
    </div>
  );
};
