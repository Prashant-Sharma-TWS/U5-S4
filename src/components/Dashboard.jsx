import React, { useContext } from "react";
import { RegisterPageContext } from "../Contexts/RegisterPageContext";

export const Dashboard = () => {
  const { user } = useContext(RegisterPageContext);

  return (
    <div>
      <h1>Welcome to the Dashboard, Dear {user.name || 'Akashi'} </h1>
    </div>
  );
};
