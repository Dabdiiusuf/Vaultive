import { createContext, useState } from "react";

const AuthContext = createContext(undefined);

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleForm = () => {
    setIsActive((prev) => !prev);
    setUsername("");
    setPassword("");
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        password,
        response,
        error,
        isActive,
        handleForm,
        setUsername,
        setPassword,
        setResponse,
        setError,
        setIsActive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
