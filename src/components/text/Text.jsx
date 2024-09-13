const Text = ({
  underlined = false,
  className = "",
  div = false,
  children,
}) => {
  const Element = div ? "div" : "span";

  return (
    <Element
      className={`text-primary ${
        underlined ? "underline decoration-secondary" : ""
      } ${className}`}
    >
      {children}
    </Element>
  );
};

export default Text;
