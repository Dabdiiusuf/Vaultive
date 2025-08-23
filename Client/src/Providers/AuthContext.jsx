import { createContext, useState, useEffect } from "react";

const AuthContext = createContext(undefined);

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [csrfToken, setCsrfToken] = useState("");
  const [jwt, setDecodedJwt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
        email,
        avatar,
        response,
        error,
        success,
        csrfToken,
        isActive,
        isLoading,
        isFirstOpen,
        isSecondOpen,
        isThirdOpen,
        isFourthOpen,
        isFifthOpen,
        jwt,
        handleForm,
        setUsername,
        setPassword,
        setEmail,
        setAvatar,
        setResponse,
        setError,
        setSuccess,
        setCsrfToken,
        setIsActive,
        setIsLoading,
        setIsFirstOpen,
        setIsSecondOpen,
        setIsThirdOpen,
        setIsFourthOpen,
        setIsFifthOpen,
        setDecodedJwt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
