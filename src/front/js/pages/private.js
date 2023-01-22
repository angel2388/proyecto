import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Util } from "./util";

export const Private = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Util(setDisabled, navigate);
  }, [disabled]);

  if (disabled) {
    return <div>Cargando...</div>;
  }

  return <div>Private</div>;
};
