import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
       <Routes>
              <Route element={<Home />} path="/" exact />
        </Routes>
    </div>
  );
}

export default App;
