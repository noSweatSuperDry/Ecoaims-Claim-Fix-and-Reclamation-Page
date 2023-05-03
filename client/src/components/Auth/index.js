import { useState } from "react";

export default function useToken() {
  const isLocalStorageSupported =
    typeof window !== "undefined" && window.sessionStorage;
 //we can replace  sessionStorage to localStorage for type of save location
  const getToken = () => {
    if (!isLocalStorageSupported) {
      return null;
    }
    return sessionStorage.getItem("token");
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    if (!isLocalStorageSupported) {
      return;
    }
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
