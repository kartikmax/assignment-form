import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    return storedUsers;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
