import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import config from "./config";
import { doc } from "prettier";
const HOSTNAME =
  "https://3001-angel2388-proyecto-28nm3xbuson.ws-eu77.gitpod.io";

export const Like = () => {
  const [likes, setLikes] = useState([]);
  const onLike = async () => {
    const like = document.getElementById("like-input").value;
    console.log(like);
    const body = JSON.stringify({
      like,
    });

    const res = await fetch(`${config.HOSTNAME}/api/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await res.json();
    if (res.status != 201) {
      alert(data.msg);
      return;
    }

    console.log(`El post se creo correctamente`);
  };
  const read_like = () => {};
  useEffect(async () => {
    const res_like = await fetch(`${config.HOSTNAME}/api/like/<int:user_id>`);
    const data_like = await res_like.json();
    setLikes(data_like);
    console.log("esto");
  }, []);

  return (
    <div className="text-center mt-5 bg-black">
      <button id="like-input" value={4}>
        este
      </button>
      <label
        className="btn btn-primary"
        for="btn-check"
        onClick={onLike}
      ></label>
      <p>aqui</p>
    </div>
  );
};
