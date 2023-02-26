import {
  Routes,
  Route,
} from "react-router-dom";
import AppContext from "./contexts/AppContext";
import React, { useState } from 'react';
import Home from "./pages/Home";
import BackendHome from "./pages/BackendHome";
import Nav from "./components/Nav/Nav";
import { AuthProvider } from "oidc-react";

const oidcConfig = {
  onSignIn: async (response: any) => {
    alert(
      "You logged in :" +
        response.profile.given_name +
        " " +
        response.profile.family_name
    );
    window.location.hash = "";
  },
  authority: "http://zitadel.default.35.204.218.48.sslip.io/", // replace with your instance
  clientId: "202861608328823347@conference",
  responseType: "code",
  redirectUri: "https://3000-salaboy-frontend-98w2xjf23wy.ws-eu88.gitpod.io/",
  scope: "openid profile email",
};


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
        <AuthProvider {...oidcConfig}>
      <div className="App">
        <Nav /> 
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<BackendHome />} path="/backend/" exact />
        </Routes>
      </div>
      </AuthProvider>
    </AppContext.Provider>
    
  );
}

export default App;
