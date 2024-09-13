const Button = ({ onClick, variant = "blue", children }) => {
  return (
    <div
      className={`rounded-full px-4 py-2 h-fit font-semibold cursor-pointer select-none hover:opacity-90 ${
        variant === "blue" ? "bg-primary text-white" : "bg-white text-primary"
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
