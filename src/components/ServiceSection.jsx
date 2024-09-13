const ServiceSection = ({ title, desc, alignment = "left" }) => {
  const LeftDiv = () => <div className="w-1/2 h-[800px] bg-white"></div>;

  const RightDiv = () => <div className="w-1/2 h-[800px] bg-primary"></div>;

  return (
    <div className="flex w-full">
      {alignment === "left" && <LeftDiv />}
      {alignment === "left" && <RightDiv />}
      {null && "====================================>>>>>>>>>>>>"}
      {alignment !== "left" && <RightDiv />}
      {alignment !== "left" && <LeftDiv />}
    </div>
  );
};

export default ServiceSection;
