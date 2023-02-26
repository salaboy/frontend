
import "./Home.scss";
import Agenda from "../components/Agenda/Agenda";
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

function Home() {

  const { backend, setBackend } = useContext(AppContext);

  setBackend(false);

  return (
    <div 
      className="page home" 
    >
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos porro, suscipit modi laudantium aliquam repellat aliquid ducimus incidunt unde corporis explicabo laborum voluptas alias? Fugit ex dolore ipsum in.</p>
        <div>
            <Agenda />  
        </div>
    </div>
  )
}

export default Home;
