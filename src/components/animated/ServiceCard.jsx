const ServiceCard = ({ data, isSelected, onClick }) => {
  const { icon, iconSelected, title, desc } = data;

  return (
    <div
      className={`w-64 rounded-xl transition-all duration-300 h-[380px] cursor-pointer px-5 pt-4 select-none backdrop-blur-sm ${
        isSelected
          ? "bg-primary text-white scale-105"
          : "bg-[#cbdfee9f] text-primary hover:scale-105"
      }`}
      onClick={onClick}
    >
      <img
        src={isSelected ? iconSelected : icon}
        alt="icon"
        className={`w-24 h-24 p-5 rounded-full my-2 ${
          isSelected ? "bg-white" : "bg-secondary"
        } transition-colors duration-300`}
      />
      <div className="font-bold text-2xl mb-3">{title}</div>
      <div className="font-medium leading-tight">{desc}</div>
    </div>
  );
};

export default ServiceCard;
