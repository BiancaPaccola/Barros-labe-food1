import React, { useState } from "react";
import { Router } from "../routes/router";
import { CartContext } from "./Context";

const StateGlobal = () => {
  const [restInfo, setRestInfo] = useState({});
  const [states, setStates] = useState([]);

  return (
    <CartContext.Provider value={{ restInfo, setRestInfo, states, setStates }}>
      <Router />
    </CartContext.Provider>
  );
};

export default StateGlobal;
