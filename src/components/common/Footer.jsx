import Logo from "resources/logos/white.png";
import Facebook from "resources/icons/facebook.svg";
import Twitter from "resources/icons/twitter.svg";
import Instagram from "resources/icons/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-primary w-full text-white">
      <div className="w-full flex justify-center px-32 pt-10 pb-40">
        <div className="w-full flex justify-between">
          <div className="w-1/2">
            <img className="w-44" src={Logo} alt="logo"></img>
            <div className="flex gap-4 mt-4 ml-2">
              <img src={Facebook} className="w-6" alt="fb" />
              <img src={Twitter} className="w-6" alt="tw" />
              <img src={Instagram} className="w-6" alt="in" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-full flex justify-between">
              <div>
                <div className="font-semibold text-lg mb-5">Services</div>
                <div className="font-medium mb-3">Web Development</div>
                <div className="font-medium mb-3">UI/UX Design</div>
                <div className="font-medium mb-3">Graphic Design</div>
              </div>
              <div>
                <div className="font-semibold text-lg mb-5">Support</div>
                <div className="font-medium mb-3">How it works</div>
                <div className="font-medium mb-3">Contact us</div>
              </div>
              <div>
                <div className="font-semibold text-lg mb-5">About Us</div>
                <div className="font-medium mb-3">Blog</div>
                <div className="font-medium mb-3">Privacy policy</div>
                <div className="font-medium mb-3">Terms of use</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto border-t-2 border-white"></div>
      <div className="py-6 text-center">
        ©2024 Magnetar. All rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
