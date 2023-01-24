import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { MainPage } from "./pages/mainPage";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Subirpost } from "./pages/subirpost";
import { Game } from "./pages/game";
import { Gamemillan } from "./pages/gamemillan";
import { Perfil } from "./pages/perfil";
import { Forogeneral } from "./pages/forogeneral";

import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Private } from "./pages/private";
import { Pruebagenero } from "./pages/pruebagenero";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Registro from "./pages/registro";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/home" />
            <Route element={<MainPage />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Subirpost />} path="/subirpost" />
            <Route element={<Game />} path="/game/:id" />
            <Route element={<Gamemillan />} path="gamemillan" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<Forogeneral />} path="/conversaciones" />

            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Private />} path="/private" />
            <Route element={<Pruebagenero />} path="/genero" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
