import React, { useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link, matchPath } from "react-router-dom";

export const Card = (props) => {
  return (
    <div>
      <div className="card m-auto" style={{ width: 300, height: 400 }}>
        <img
          src={props.img}
          className="card-img-top"
          style={{ width: 300, height: 350 }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{props.title}</h5>
          <div className="button d-flex justify-content-center mt-auto">
            <button className="btn btn-dark">
              <Link to={`/game/${props.url}`}>{props.title}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
/*Card.propTypes = {
  img: propTypes.string,
  title: propTypes.string,
};*/
