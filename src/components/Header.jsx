import { useEffect, useRef, useState } from "react";
import Logo from "resources/logos/main-wide.png";
import Button from "./Button";

const Header = () => {
  const [hidden, setHidden] = useState(false);

  const [selectedPage, selectPage] = useState(null);

  const prevScrollY = useRef(0);

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
          <div>Home</div>
          <div>Services</div>
          <div>Our Projects</div>
          <div>Carriers</div>
        </div>
        <Button>Contact us</Button>
      </div>
    </div>
  );
};

export default Header;
