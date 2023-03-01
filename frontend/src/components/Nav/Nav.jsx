import { Link } from "react-router-dom";
import "./Nav.scss";
import AppContext from "../../contexts/AppContext";
import React, { useContext } from "react";



const Nav = ({ auth, handleLogin, handleLogout }) => {
    return (
        <nav className="Nav">   
            {(!auth || auth === null) && (
                <>
                 <Link to={"/"}>Home</Link> - <button
            onClick={() => {
              // Perform the authorization request, including the code challenge
              handleLogin();
            }}
          >
            Log in
          </button>
                </>
            )}
            {auth && (
                <>
                    <Link to={"/"}>Home</Link> - 
                    <Link to={"/backoffice/proposals"}>Approve Proposals</Link> - <button onClick={handleLogout}>Log out</button>
                </>
            )}
        </nav>
    )
}

export default Nav;