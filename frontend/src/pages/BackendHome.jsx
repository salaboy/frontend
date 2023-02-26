
import "./Home.scss";
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

function BackendHome() {
  const { backend, setBackend } = useContext(AppContext);

  setBackend(true);

  return (
    <div 
      className="page home" 
    >
        <h1>Backend Home Page</h1>
        <div>
            Estoy en backend {}
        </div>
    </div>
  )
}

export default BackendHome;
