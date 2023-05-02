import { useState } from "react";

export default function useToken() {
  const isLocalStorageSupported =
    typeof window !== "undefined" && window.localStorage;

  const getToken = () => {
    if (!isLocalStorageSupported) {
      return null;
    }
    return localStorage.getItem("token");
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    if (!isLocalStorageSupported) {
      return;
    }
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
