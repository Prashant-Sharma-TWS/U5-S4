import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterPageContext } from "../Contexts/RegisterPageContext";

const loginObject = { email: "", password: "" };

export const Home = () => {
  const { setIsAuth, isLoggedIn, setIsLoggedIn } = useContext(RegisterPageContext);
  const [loginForm, setLoginForm] = useState(loginObject);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/user/`);
    const result = await response.json();

    result.forEach((user) => {
      console.log(user);
      if (
        loginForm.email === user.email &&
        loginForm.password === user.password
      ) {
        setIsLoggedIn(true);
        navigate("/dashboard");
      }
    });
    !isLoggedIn ? console.log(`Email or Password entered is wrong`) : "";
  };

  return (
    <div>
      <form onSubmit={handleLogIn}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={loginForm.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
