import Animation from "components/animated/Animation";
import {
  IntroBubblesWrapper,
  ServiceBubbles,
} from "components/animated/CustomSvgAnimations/Bubbles";
import Text from "components/text/Text";
import AutomationImage from "resources/images/automation.webp";
import Clicker from "resources/icons/clickMe.svg";
import ServiceCardSlideshow from "components/animated/ServiceCardSlideshow";
import WebService from "components/Services/WebService";
import Reviews from "components/common/Reviews";
import { useState } from "react";
import { WEB_SERVICES } from "constants/serviceData";

const ClickMarker = () => {
  return (
    <div className="my-20">
      <div className="flex justify-between px-20 items-center">
        <div className="text-4xl font-semibold">
          <Animation>
            <Text underlined>Automating Processes</Text>
            <Text div className="text-secondary">
              for Efficiency
            </Text>
          </Animation>
        </div>
        <Animation delay={0.4} className="font-semibold mr-16 mt-20">
          <Text div>Explore Our Automation Solutions</Text>
          <Text>Streamline Operations and Save Time</Text>
          <div className="w-full flex justify-end">
            <img src={Clicker} alt="icon" className="w-20 h-20" />
          </div>
        </Animation>
      </div>
    </div>
  );
};

const Introduction = () => {
    return (
      <IntroBubblesWrapper img={AutomationImage}>
        <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center text-white text-lg leading-tight font-semibold">
          <Animation>
            <Text className="text-white text-5xl mb-8" div>
              Automation Solutions
            </Text>
          </Animation>
          <Animation delay={0.5}>
            <Text div className="text-white text-center">
              We automate repetitive tasks to increase productivity.
            </Text>
            <Text div className="text-white text-center">
              Our automation services streamline your workflows and save you time.
            </Text>
            <Text div className="text-white text-center">
              Let’s integrate automation to optimize your business operations.
            </Text>
          </Animation>
        </div>
      </IntroBubblesWrapper>
    );
  };
  
    

const AutomationServicePage = () => {
  const [selectedIndex, selectCard] = useState(0);

  return (
    <div>
      <Introduction />
      <ClickMarker />
      <div className="w-[100vw] relative overflow-hidden">
        <ServiceBubbles />
        <ServiceCardSlideshow
          selectCard={selectCard}
          selectedIndex={selectedIndex}
        />
        {WEB_SERVICES[selectedIndex].component}
      </div>
      <Reviews />
    </div>
  );
};

export default AutomationServicePage;
