import Animation from "components/animated/Animation";
import {
  IntroBubbles,
  ServiceBubbles,
} from "components/animated/CustomSvgAnimations/Bubbles";
import Text from "components/text/Text";
import Laptop from "resources/images/laptop.png";
import Clicker from "resources/icons/clickMe.svg";
import ServiceCardSlideshow from "components/animated/ServiceCardSlideshow";

const ClickMarker = () => {
  return (
    <div className="my-20">
      <div className="flex justify-between px-20 items-center">
        <div className="text-[40px] font-semibold">
          <Animation>
            <Text underlined>Crafting Websites</Text>
            <Text div className="text-secondary">
              That Convert
            </Text>
          </Animation>
        </div>
        <Animation delay={0.4} className="font-semibold mr-16 mt-20">
          <Text div>Explore Our Work: Discover Projects by Category</Text>
          <Text>Select a Category to View Projects</Text>
          <div className="w-full flex justify-end">
            <img src={Clicker} alt="icon" className="w-20 h-20" />
          </div>
        </Animation>
      </div>
      <div></div>
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="relative w-full h-[100vh] bg-mid">
      <IntroBubbles />
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center text-white text-lg leading-tight font-semibold">
        <Animation>
          <Text className="text-white text-5xl mb-8" div>
            Custom Web development
          </Text>
        </Animation>
        <Animation delay={0.5}>
          <Text div className="text-white text-center">
            Lorem ipsum dolor sit amet dolor sit
          </Text>
          <Text div className="text-white text-center">
            amet Lorem ipsum dolor sit amet dolor sit amet dolor
          </Text>
          <Text div className="text-white text-center">
            sit ametLorem ipsum
          </Text>
        </Animation>
      </div>
      <div className="absolute z-20 w-full h-full flex justify-end items-end">
        <img src={Laptop} alt="" className="w-[30vw]" />
      </div>
    </div>
  );
};
const WebServices = () => {
  return (
    <div>
      <Introduction />
      <ClickMarker />
      <div className="w-[100vw] h-[200vw]">
        <ServiceBubbles />
      </div>
      <ServiceCardSlideshow />
    </div>
  );
};

export default WebServices;
