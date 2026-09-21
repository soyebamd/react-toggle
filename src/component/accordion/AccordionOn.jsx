import React from "react";
import { AccordianContext } from "./AccordionToggle";

export default function ToggleOn({ children }) {
  const { on } = React.useContext(AccordianContext);
  console.log("toggle on", on);
  return on ? children : null;
}
