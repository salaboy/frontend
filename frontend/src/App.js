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
  authority: "https://conference-4t3at3.zitadel.cloud", // replace with your instance
  clientId: "202884993150681345@conference",
  responseType: "code",
  redirectUri: "https://3000-salaboy-frontend-212yt0q95al.ws-eu88.gitpod.io",
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
