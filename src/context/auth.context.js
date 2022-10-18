import React from "react";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://drab-red-cuttlefish-boot.cyclic.app";
const AuthContext = createContext();

const Auth = (props) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = async () => {
    const storeToken = localStorage.getItem("authToken");

    if (storeToken) {
      axios
        .get(`${API_URL}/admin/verify`, {
          headers: { Authorization: `Bearer ${storeToken}` },
        })
        .then((response) => {
          const user = response.data;
          setIsLoggedIn(true);
          setUser(user);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
    navigate("/");
  };

  useEffect(() => {
    authenticateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{ setToken, authenticateUser, logOutUser, isLoggedIn, user }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { Auth, AuthContext };
