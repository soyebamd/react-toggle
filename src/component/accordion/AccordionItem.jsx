import React from "react";
import AccordianContext from "./AccordionToggle";
const Item = ({ children }) => {
  const menuID = React.useId();
  return (
    <AccordianContext>
      <div className="accordion-item">{children}</div>
    </AccordianContext>
  );
};

export default Item;
