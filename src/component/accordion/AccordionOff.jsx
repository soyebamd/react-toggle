import React from "react";
import { AccordianContext } from "./AccordionToggle";

export default function ToggleOff({ children }) {
  const { on } = React.useContext(AccordianContext);
  console.log(on);
  return on ? null : children;
}
