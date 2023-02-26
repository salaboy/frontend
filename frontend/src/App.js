import {
  Routes,
  Route,
} from "react-router-dom";
import AppContext from "./contexts/AppContext";
import React, { useState } from 'react';
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";


function App() {
  const [appStatus, setAppStatus] = useState(true);
  const [backend, setBackend] = useState(false);
  return (
    <AppContext.Provider value={{
        appStatus: appStatus, 
        setAppStatus: setAppStatus,
        backend: backend,
        setBackend: setBackend
      }}>
      <div className="App">
        <Nav /> 
        <Routes>
          <Route element={<Home />} path="/" exact />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
