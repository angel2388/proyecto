import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "../component/navbar";
import "../../styles/game.css"
import { Post } from "../component/post.js"



document.body.style = "background: #2A2A2A;";

export function Game(props) {	
	const { store, actions } = useContext(Context);

	return (
    <div>
    <div className="portada p-5 text-center">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
        <h1 className="mb-3">{props.title}</h1>
        </div>
    </div>
      </div>
    <div className="mt-5"></div>
    <Post></Post>
    </div>
    )

    }