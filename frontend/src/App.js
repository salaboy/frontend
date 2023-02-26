import {
  Routes,
  Route,
} from "react-router-dom";
import AppContext from "./contexts/AppContext";
import React, { useState } from 'react';
import Home from "./pages/Home";


function App() {
  const [appStatus, setAppStatus] = useState(true);
  return (
    <AppContext.Provider value={{
      appStatus: appStatus, 
      setAppStatus: setAppStatus
      }}>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/" exact />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
