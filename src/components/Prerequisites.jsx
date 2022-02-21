import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RegisterPageContext } from "../Contexts/RegisterPageContext";

const Flex = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const Prerequisites = () => {
  const { user, setUser, setIsPrerequisite } = useContext(RegisterPageContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setUser({ ...user, [name]: checked });
  };
  const handleContinue = () => {
    if (user.canAttendClasses && user.hasLaptop) {
      setIsPrerequisite(true);
      navigate("/info");
    } else {
      alert(`Please check all`);
    }
  };

  return (
    <div>
      <h2>Prerequisites</h2>
      <div>
        <Flex>
          <input
            type="checkbox"
            name="canAttendClasses"
            checked={user.canAttendClasses}
            onChange={handleChange}
          />
          <p>Can you attend 90% of the classes</p>
        </Flex>
        <Flex>
          <input
            type="checkbox"
            name="hasLaptop"
            checked={user.hasLaptop}
            onChange={handleChange}
          />
          <p>Do you have a laptop</p>
        </Flex>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};
