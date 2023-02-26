import { Link } from "react-router-dom";
import "./Nav.scss";



export default function Nav() {

    return (
        <nav className="Nav">   
            <Link to={"/"}>Home</Link>
        </nav>
    )
}