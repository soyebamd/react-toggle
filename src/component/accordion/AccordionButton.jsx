import React from "react";
import { AccordianContext } from "./AccordionToggle";

export default function ToggleButton({ children }) {
  const { toggle } = React.useContext(AccordianContext);
  return <div onClick={toggle}>{children}</div>;
}
