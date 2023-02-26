import { Link } from "react-router-dom";
import "./Nav.scss";
import AppContext from "../../contexts/AppContext";
import React, { useContext } from "react";



export default function Nav() {
    const { backend } = useContext(AppContext);
    return (
        <nav className="Nav">   
            {!backend && (
                <>
                 <Link to={"/"}>Home</Link>
                 <Link to={"/backend/"}>Go to Backend</Link>
                </>
            )}
            {backend && (
                <>
                    <Link to={"/"}>Go Home</Link>
                    <Link to={"/backend/"}>Back to home</Link>
                    <Link to={"/backend/proposals"}>Proposals</Link>
                </>
            )}
        </nav>
    )
}