import Animation from "components/animated/Animation";
import Text from "components/text/Text";
import Lottie from "lottie-react";
import Book from "resources/icons/book-white.svg";
import Bubbles from "resources/animations/smallLessBubbles.json";
import { useEffect, useRef } from "react";
import ProjectCardSlideshow from "./animated/ProjectCardSlideshow";

const ServiceSection = ({ title, desc, leftAlligned = true, category }) => {
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef.current && lottieRef.current.setSpeed(0.5);
  }, [lottieRef]);

  const CategoryTitle = () => (
    <Animation className="mt-10 mb-6 text-4xl font-semibold">
      <Text div className="text-primary ">
        Our projects in
      </Text>
      <Text className="text-secondary">{category}</Text>
    </Animation>
  );

  const LeftDiv = () => (
    <div
      className={`relative w-1/2 h-[120vh] bg-white flex flex-col justify-star`}
    >
      <div className="absolute z-0 w-full h-full pointer-events-none opacity-50">
        <Lottie
          className="w-fullx`"
          animationData={Bubbles}
          lottieRef={lottieRef}
        />
      </div>
      <div className="max-w-96 ml-20">
        {category && <CategoryTitle />}
        <Animation>
          <div className={`flex items-center mb-5 ${category ? "" : "mt-20"}`}>
            <div className="w-14 h-14 rounded-full flex justify-center items-center bg-primary mr-2">
              <img src={Book} alt="" className="w-7 h-7" />
            </div>
            <Text className="text-3xl text-primary font-semibold" underlined>
              {title}
            </Text>
          </div>
          <Text className="font-medium text-primary">{desc}</Text>
        </Animation>
      </div>
    </div>
  );

  const RightDiv = () => <div className={`w-1/2 h-[120vh] bg-primary`}></div>;

  return (
    <div className="flex w-full relative">
      <div className="absolute z-10 w-full h-full">
        <ProjectCardSlideshow isLeftAlligned={leftAlligned} />
      </div>
      {leftAlligned && <LeftDiv />}
      {leftAlligned && <RightDiv />}
      {null && "==================================================>>>>>>>>>>>>"}
      {null && "==================================================>>>>>>>>>>>>"}
      {!leftAlligned && <RightDiv />}
      {!leftAlligned && <LeftDiv />}
      {null && "//"}
      {null}
      {null}
      {null}
      {null}
    </div>
  );
};

export default ServiceSection;
