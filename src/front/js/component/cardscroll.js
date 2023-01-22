import React, { useContext } from "react";
import propTypes from "prop-types";
import { Link, matchPath } from "react-router-dom";

export const Cardscroll = (props) => {
  return (
    <div className="mt-5">
      <h3 className="mb-4 text-light">{props.genero}</h3>
      <div className="d-flex row flex-nowrap overflow-scroll img-fluid">
        {props.content}
      </div>
    </div>
  );
};
