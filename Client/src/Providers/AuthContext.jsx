import { createContext, useState } from "react";

const AuthContext = createContext(undefined);

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  const [isFourthOpen, setIsFourthOpen] = useState(false);
  const [isFifthOpen, setIsFifthOpen] = useState(false);

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
        isFirstOpen,
        isSecondOpen,
        isThirdOpen,
        isFourthOpen,
        isFifthOpen,
        handleForm,
        setUsername,
        setPassword,
        setResponse,
        setError,
        setIsActive,
        setIsFirstOpen,
        setIsSecondOpen,
        setIsThirdOpen,
        setIsFourthOpen,
        setIsFifthOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
