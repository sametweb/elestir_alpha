import React, { useState } from "react";

export const Context = React.createContext();

export const UserContext = props => {
  const [user, setUser] = useState({
    username: "Guest",
    token: "123",
    login: loginUser => setUser({ ...user, ...loginUser }),
    logout: () => setUser({ ...user, username: "Guest", token: "123" })
  });

  return <Context.Provider value={user}>{props.children}</Context.Provider>;
};

export default UserContext;
