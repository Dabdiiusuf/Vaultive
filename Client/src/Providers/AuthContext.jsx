import { createContext, useState } from "react";

const AuthContext = createContext(undefined);

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [csrfToken, setCsrfToken] = useState("");
  const [jwt, setDecodedJwt] = useState(
    JSON.parse(localStorage.getItem("decodedJwt")) // TODO: se över detta, men du vill ha decodedJwt i localStorage (gärna sessionStorage)
  );
  const [authToken, setAuthToken] = useState(localStorage.getItem("jwt"));
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [getMessages, setGetMessages] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  const [isFourthOpen, setIsFourthOpen] = useState(false);
  const [isFifthOpen, setIsFifthOpen] = useState(false);

  //GET MESSAGE
  const handleGetMessage = async () => {
    try {
      const resMessage = await fetch(
        "https://chatify-api.up.railway.app/messages",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (!resMessage.ok) {
        setError("Fetch messages failed");
        console.log("Fetch messages failed");
        return;
      }

      const data = await resMessage.json();
      const message = data;

      setGetMessages(message);
      console.log("GET MESSAGE", message);
    } catch (err) {
      console.error(err);
    }
  };

  //POST MESSAGE
  const handlePostMessage = async () => {
    if (inputValue.trim() && inputValue === "") {
      setError("can not send empty messages!");
    }

    try {
      const res = await fetch("https://chatify-api.up.railway.app/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ text: inputValue, conversationId: null }),
      });

      if (!res.ok) {
        console.log("Post request failed", res.status);
        // setError("Could not send message");
      }

      const data = await res.json();
      const sentMessage = data.latestMessage;

      setPostMessage(sentMessage);
      setInputValue("");

      console.log("POST MESSAGE", sentMessage);
    } catch (err) {
      console.error(err);
    }
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
        authToken,
        getMessages,
        inputValue,
        postMessage,
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
        setAuthToken,
        setGetMessages,
        handleGetMessage,
        handlePostMessage,
        setInputValue,
        setPostMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
