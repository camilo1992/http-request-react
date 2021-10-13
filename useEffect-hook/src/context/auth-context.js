// we are creating a file with lower cases
//otherwise it will inply that we are creating a component
// this is a context

import react, { useState, useEffect } from "react";
//  Thi create a context object.

const AuthContext = react.createContext({
  isLoggedIn: false,
  isLoggedout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (userLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);

    localStorage.clear("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onlogOut: logoutHandler,
        onLogIn: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// In order to use this context we need to provide it and consume it.
// Providing
// ---> we need to wrap any component taht is gonna listen to it.
