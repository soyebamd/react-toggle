import classnames from "classnames";
export default function Button({ children, className, color, size, ...rest }) {
  /**
   * Challenge:
   *
   * Accept a `variant` prop and style the Button component
   * accordingly. The values can be `success`, `warning`, or `danger`.
   * Check the Figma design for the specific colors to be used for each
   * variant.
   */
  let sizeClass = size && `button-${size}`;
  let textColor = color && `button-${color}`;
  const allClasses = classnames(sizeClass, textColor, className);

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
