import React, { useEffect, useState, createContext } from "react";
export const context = createContext();

const ContextProvider = ({ children }) => {
  const [isAuthen, setIsAuthen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("user");
    setIsAuthen(!!email);
    setIsLoading(false);
  }, [isAuthen]);
  // const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  return (
    <context.Provider value={{ isAuthen, setIsAuthen, isLoading }}>
      {children}
    </context.Provider>
  );
};
export default ContextProvider;
