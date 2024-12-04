import Animation from "components/animated/Animation";
import {
  IntroBubblesWrapper,
  ServiceBubbles,
} from "components/animated/CustomSvgAnimations/Bubbles";
import Text from "components/text/Text";
import SEOImage from "resources/images/seo.png";
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
            <Text underlined>Boosting Visibility</Text>
            <Text div className="text-secondary">
              with SEO Services
            </Text>
          </Animation>
        </div>
        <Animation delay={0.4} className="font-semibold mr-16 mt-20">
          <Text div>Explore Our SEO Services: Rank Higher and Grow</Text>
          <Text>Select a Service to Learn More</Text>
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
    <IntroBubblesWrapper img={SEOImage}>
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center text-white text-lg leading-tight font-semibold">
        <Animation>
          <Text className="text-white text-5xl mb-8" div>
            SEO Services
          </Text>
        </Animation>
        <Animation delay={0.5}>
          <Text div className="text-white text-center">
            We help businesses rank higher and drive organic traffic.
          </Text>
          <Text div className="text-white text-center">
            Our SEO strategies are designed to improve your online presence.
          </Text>
          <Text div className="text-white text-center">
            Let’s optimize your site for better visibility and engagement.
          </Text>
        </Animation>
      </div>
    </IntroBubblesWrapper>
  );
};

const SEOServicePage = () => {
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

export default SEOServicePage;
