
import "./Home.scss";
import Agenda from "../components/Agenda/Agenda";

function Home() {


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