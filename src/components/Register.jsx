import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterPageContext } from "../Contexts/RegisterPageContext";

export const Register = () => {
  const { isInfo, user, setUser } = useContext(RegisterPageContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignUp = async () => {
    if (user.name && user.email && user.password) {
      const response = await fetch(`http://localhost:3000/user/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      response.ok ? navigate("/") : "Sorry something went Wrong";
    } else {
      alert(`Please input every field`);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};
