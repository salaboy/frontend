import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import React, { useState, useEffect } from 'react';
import Home from "./pages/Home";
import BackendHome from "./pages/BackendHome";
import Nav from "./components/Nav/Nav";
import { UserManager, WebStorageStateStore } from "oidc-client-ts";

import authConfig from "./authConfig";

function App() {
  const [appStatus, setAppStatus] = useState(true);
  
  const userManager = new UserManager({
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    ...authConfig,
  });

  function authorize() {
    userManager.signinRedirect({ state: "a2123a67ff11413fa19217a9ea0fbad5" });
  }

  function clearAuth() {
    userManager.signoutRedirect();
  }

  const [authenticated, setAuthenticated] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [userManager]);

  return (
    <AppContext.Provider value={{
        appStatus: appStatus, 
        setAppStatus: setAppStatus,
      }}>
        <div className="App"><Nav /> 
        
      
        
        <Routes>
          <Route
            path="/"
            element={<Home auth={authenticated} handleLogin={authorize} />}
          />
          <Route
          path="/backoffice"
          element={
            <BackendHome
              auth={authenticated}
              setAuth={setAuthenticated}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              handleLogout={clearAuth}
              userManager={userManager}
            />
          }
        />
          
        </Routes>
      
        </div>
    
      </AppContext.Provider>
  );
}

export default App;
