import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Web Development", path: "/services/web" },
    { name: "UI/UX Design", path: "/services/ui" },
    { name: "SEO", path: "/services/seo" },
    { name: "Automation", path: "/services/automation" },
  ];

  return (
    <div className="relative">
      <div
        className="cursor-pointer text-xl font-medium text-customblack hover:text-primary"
        onMouseEnter={() => setIsHovered(true)}
        onClick={() => navigate("/services/web")}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsHovered(!isHovered);
          }
        }}
        aria-haspopup="true"
        aria-expanded={isHovered}
      >
        Services
      </div>

      {isHovered && (
        <div
          className="absolute top-12 left-0 w-auto py-3 px-4 mt-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full shadow-xl transition-all duration-300"
          style={{
            fontFamily: "Urbanist, sans-serif",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6 justify-center items-center">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="px-6 py-3 text-base text-gray-700 hover:bg-primary hover:text-white rounded-full shadow-md transition-all duration-200 flex justify-center items-center whitespace-nowrap"
                onClick={() => navigate(item.path)}
                
                style={{ minWidth: "180px" }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
