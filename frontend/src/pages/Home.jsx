
import "./Home.scss";
import Agenda from "../components/Agenda/Agenda";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const Home = ({ auth, handleLogin, userManager }) => {

  
  return (
    <div 
      className="page home" 
    >
        <h1>Home Page</h1>

        <div>
      {/* {auth === null && <div>Loading...</div>} */}
      {auth === false || auth === null && (
        <div>
          
        </div>
      )}

      <Agenda />  
     {/* {auth && <Navigate to="/backoffice" />} */}
    </div>
    </div>
  )
}

export default Home;
