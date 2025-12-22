"use client";

import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      try {
        setCurrentUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem("user");
        setCurrentUser(null);
      }
    }

    const handleStorageUpdate = () => {
      const updated = localStorage.getItem("user");
      setCurrentUser(updated ? JSON.parse(updated) : null);
    };

    window.addEventListener("storageUpdate", handleStorageUpdate);

    return () => {
      window.removeEventListener("storageUpdate", handleStorageUpdate);
    };
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};