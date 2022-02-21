import React, { useContext, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { Prerequisites } from "./components/Prerequisites";
import { Info } from "./components/Info";
import { Register } from "./components/Register";
import { Dashboard } from "./components/Dashboard";
import { RegisterPageContext } from "./Contexts/RegisterPageContext";
import "./App.css";

function App() {
  const { isAuth, setIsAuth, isInfo, isPrerequisite, isLoggedIn } =
    useContext(RegisterPageContext);

  useEffect(() => {
    setIsAuth(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="App">
      <nav>
        <Link to="/prerequisites">Sign Up</Link>
      </nav>
      <Routes>
        {!isAuth && <Route path="/" element={<Home />} />}
        {isAuth && <Route path="/dashboard" element={<Dashboard />} />}
        {isInfo && <Route path="/register" element={<Register />} />}
        {isPrerequisite && <Route path="/info" element={<Info />} />}
        <Route path="/prerequisites" element={<Prerequisites />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
