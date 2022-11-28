import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Navbar from "../component/navbar";
import Card from "../component/card";

export const MainPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Mejores juegos</h1>
	  <h3>Género</h3>
      <div className="Container">
        <div className="d-flex p-3">
          <div class="col-4">
            <Card
              title="Título"
              img="https://www.westsideplaza.co.uk/wp-content/uploads/2017/07/300x300.png"
            />
          </div>
          <div class="col-4">
            <Card
              title="Título"
              img="https://www.westsideplaza.co.uk/wp-content/uploads/2017/07/300x300.png"
            ></Card>
          </div>
          <div class="col-4">
            <Card
              title="Título"
              img="https://www.westsideplaza.co.uk/wp-content/uploads/2017/07/300x300.png"
            ></Card>
          </div>
          </div>
        </div>
		
      </div>
  );
};

/* {store.message || "Loading message from the backend (make sure your python backend is running)..."} */
