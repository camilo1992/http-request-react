import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";
import react from "react";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <react.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </react.Fragment>
  );
}

export default App;

/* we are accesin a provider which is a component and therefore all the children
        of the components within will have access to this context state */

/* there are t 2 ways of linstening to the context, 
        we can use a reactHook, or AuthContext.consumer */
