import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#">
          MY GAMES SITE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="Home">
                  Géneros
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link active" href="#">
                  Conversaciones
                </a>
              </li>
              <div className="dropdown">
                <button
                  className="profilebtn btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://i.redd.it/js3o38c990a41.jpg"
                    className="rounded-circle img-fluid"
                  ></img>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Mi perfil &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Cambiar contraseña
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Cerrar sesión
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mis publicaciones &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Publicaciones públicas
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Publicaciones privadas
                        </a>
                      </li>
                    </ul>
                    <li>
                      <a className="dropdown-item" href="#">
                        Publicaciones que me han gustado
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item bg-dark text-light" href="#">
                        Crear publicación
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Realizar búsqueda"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
/*import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#">
          MY SITEGAME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="/">
                  Géneros
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link active" href="#">
                  Conversaciones
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Mi perfil
                </a>
              </li>
              <li className="nav-item dropdown me-4 ">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ajustes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Editar perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Configuración de la cuenta
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Realizar búsqueda"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/
