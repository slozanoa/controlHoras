import React, { useState } from "react";
import PropTypes from 'prop-types'
  
const AuthContext = React.createContext();
export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [userRegistrado, setUserRegistrado] = useState("");

  //guardar nombre de usuario
  const addUser = (usuario) => {
    setUserRegistrado(usuario)
  };

  return (
    <AuthContext.Provider
      value={{
        userRegistrado,
        addUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthContextConsumer = AuthContext.Consumer;
