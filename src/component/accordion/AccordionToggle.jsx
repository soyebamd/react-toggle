import React from "react";
import { useState } from "react";

const AccordianContext = React.createContext();

const ToggleContainer = ({ children }) => {
  const [on, setOn] = useState(false);

  function toggle() {
    console.log("button works");
    setOn((prev) => !prev);
  }

  return (
    <AccordianContext.Provider value={{ on, toggle }}>
      {children}
    </AccordianContext.Provider>
  );
};

export default ToggleContainer;

export { AccordianContext };
