import React, { createContext, useState } from "react";

export const UserContext = createContext();
export const UserAuthProvider = ({ children }) => {
  const [islogedIn, setLogin] = useState(false);

  return (
    <UserContext.Provider value={{ islogedIn, setLogin }}>
      {children}
    </UserContext.Provider>
  );
};
