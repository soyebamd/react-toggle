import React from "react";

import ToggleOn from "./AccordionOn";

const Content = ({ children }) => {
  // const { on, menuID } = React.useContext(AccordianContext);

  return (
    <ToggleOn>
      {
        <div className="accordion-content">
          <p>{children}</p>
        </div>
      }
    </ToggleOn>
  );
};

export default Content;
