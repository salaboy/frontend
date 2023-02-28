
import "./Home.scss";
import Agenda from "../components/Agenda/Agenda";
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { Navigate } from "react-router-dom";

const Home = ({ auth, handleLogin, userManager }) => {

  
  return (
    <div 
      className="page home" 
    >
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos porro, suscipit modi laudantium aliquam repellat aliquid ducimus incidunt unde corporis explicabo laborum voluptas alias? Fugit ex dolore ipsum in.</p>
        <div>
            <Agenda />  
        </div>
        <div>
      {auth === null && <div>Loading...</div>}
      {auth === false && (
        <div>
          <h1>Welcome!</h1>
          <button
            onClick={() => {
              // Perform the authorization request, including the code challenge
              handleLogin();
            }}
          >
            Please log in.
          </button>
        </div>
      )}
      {auth && <Navigate to="/backoffice" />}
    </div>
    </div>
  )
}

export default Home;
