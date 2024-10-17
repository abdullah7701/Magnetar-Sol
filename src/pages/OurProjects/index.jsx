import Animation from "components/animated/Animation";
import { IntroBubblesWrapper } from "components/animated/CustomSvgAnimations/Bubbles";
import Projects from "components/common/Projects";
import Reviews from "components/common/Reviews";
import Text from "components/text/Text";
import StartupIcon from "resources/images/startup.png";

const OurProjects = () => {
  return (
    <div>
      <IntroBubblesWrapper img={StartupIcon} className="mb-20">
        <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center text-white text-lg leading-tight font-semibold">
          <Animation>
            <Text className="text-white text-5xl mb-8" div>
              Our Projects
            </Text>
          </Animation>
          <Animation delay={0.5}>
            <Text div className="text-white text-center">
              Lorem ipsum dolor sit amet dolor sit amet
            </Text>
            <Text div className="text-white text-center">
              Lorem ipsum dolor sit amet dolor sit amet dolor sit ametLorem
              ipsum
            </Text>
          </Animation>
        </div>
      </IntroBubblesWrapper>
      <Projects />
      <Reviews />
    </div>
  );
};

export default OurProjects;
