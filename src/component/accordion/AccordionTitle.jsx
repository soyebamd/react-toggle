import ToggleButton from "./AccordionButton";

const Title = ({ children }) => {
  return (
    <ToggleButton>
      <div className="accordion-title">
        {" "}
        <h1>{children}</h1>{" "}
      </div>
    </ToggleButton>
  );
};

export default Title;
