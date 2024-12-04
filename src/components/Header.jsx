import { useEffect, useRef, useState } from "react";
import Logo from "resources/logos/main-wide.png";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [hidden, setHidden] = useState(false);

  const [selectedPage, selectPage] = useState(null);

  const prevScrollY = useRef(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 500) return setHidden(false);
      const isScrolledDown = window.scrollY >= prevScrollY.current;
      prevScrollY.current = window.scrollY;
      setHidden(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 w-full flex justify-center pointer-events-none ${
        hidden ? "top-[-80px] opacity-0" : "top-6 opacity-100"
      } transition-all duration-500`}
    >
      <div className="absolute w-11/12 rounded-full bg-white bg-opacity-40 min-h-20 flex justify-between items-center px-10 pointer-events-auto backdrop-blur-sm">
        <img src={Logo} alt="logo" className="w-36" />
        <div className="flex gap-10 font-medium text-xl text-customblack">
          <div
            className="cursor-pointer hover:text-primary"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <DropdownMenu />
          <div
            className="cursor-pointer hover:text-primary"
            onClick={() => navigate("/education")}
          >
            Education
          </div>
          <div
            className="cursor-pointer hover:text-primary"
            onClick={() => navigate("/projects")}
          >
            Our Projects
          </div>
          <div
            className="cursor-pointer hover:text-primary"
            onClick={() => navigate("/carriers")}
          >
            Carriers
          </div>
        </div>
        <Link to="/contact">
          <Button>Contact us</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
