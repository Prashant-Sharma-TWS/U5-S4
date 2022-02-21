import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterPageContext } from "../Contexts/RegisterPageContext";

export const Info = () => {
  const { user, setUser, setInfo } = useContext(RegisterPageContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = () => {
    if (
      user.highestQualification &&
      user.passingYear &&
      user.dateOfBirth &&
      user.gender &&
      user.state
    ) {
      setInfo(true);
      navigate("/register");
    } else {
      alert(`Please input every field`);
    }
  };

  return (
    <div>
      <h2>Info</h2>
      <div>
        <div>
          <label>Highest Qualification</label>
          <input
            type="text"
            name="highestQualification"
            value={user.highestQualification}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Passing Year</label>
          <input
            type="text"
            name="passingYear"
            value={user.passingYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={user.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>gender</label>
          <input
            type="text"
            name="gender"
            value={user.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={user.state}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};
