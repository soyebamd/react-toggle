import { useState } from "react";

export default function ToggleState() {
  const [openID, setToggleStatus] = useState("");

  function toggle(id) {
    console.log(id);
    setToggleStatus(id);
  } //event listenr to updat toggle status

  return {
    openID,
    toggle,
  };
}
