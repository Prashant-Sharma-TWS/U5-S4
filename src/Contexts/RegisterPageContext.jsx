import { createContext, useState } from "react";

const RegisterPageContext = createContext();

const userDetail = {
  name: "",
  email: "",
  password: "",
  gender: "",
  dateOfBirth: "",
  state: "",
  passingYear: "",
  highestQualification: "",
  hasLaptop: "",
  canAttendClasses: "",
};

const RegisterPageContextProvider = ({ children }) => {
  const [user, setUser] = useState(userDetail);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [isPrerequisite, setIsPrerequisite] = useState(false);

  const value = { user, setUser, isAuth, setIsAuth,isInfo, setIsInfo,isPrerequisite, setIsPrerequisite,isLoggedIn, setIsLoggedIn };
  return (
    <RegisterPageContext.Provider value={value}>
      {children}
    </RegisterPageContext.Provider>
  );
};

export { RegisterPageContext, RegisterPageContextProvider };
