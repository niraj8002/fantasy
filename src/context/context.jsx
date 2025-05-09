import React, { useEffect, useState, createContext } from "react";
export const context = createContext();

const ContextProvider = ({ children }) => {
  const [isAuthen, setIsAuthen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setIsAuthen(!!email);
    setIsLoading(false);
  }, []);

  return (
    <context.Provider value={{ isAuthen, setIsAuthen, isLoading }}>
      {children}
    </context.Provider>
  );
};


export default ContextProvider;
