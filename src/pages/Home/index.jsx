import Animation from "components/animated/Animation";
import Button from "components/Button";
import Text from "components/text/Text";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import Bubbles from "resources/animations/bubbles.json";
import SatisfiedClient from "resources/images/people/man-smiling.jpg";
import Tick from "resources/icons/tick.svg";
import { ANIMATIONS } from "constants/animations";
import Wave from "resources/backgrounds/wave.svg";
import Laptop from "resources/images/laptop.png";
import FloatingPhone from "components/animated/FloatingPhone";
import Book from "resources/icons/book.svg";
import Reviews from "components/common/Reviews";
import Meeting from "components/common/Meeting";
import Footer from "components/common/Footer";
import Projects from "components/common/Projects";

const Introduction = () => {
  const FancyText = ({ className, icon, delay = 0.15, children }) => {
    return (
      <Animation
        className={`rounded-full px-4 py-2 h-fit w-fit font-medium text-white bg-white bg-opacity-20 backdrop-blur-sm ${className}`}
        animation={ANIMATIONS.fadeIn}
        delay={delay}
      >
        {icon && <img src={icon} alt="" className="mr-2" />}
        {children}
      </Animation>
    );
  };
  const FancyImage = ({ className, delay, src }) => {
    return (
      <Animation animation={ANIMATIONS.fadeIn} delay={delay}>
        <img
          src={src}
          alt=""
          className={`rounded-full w-32 h-32 ${className}`}
        />
      </Animation>
    );
  };

  const FancyBox = ({
    className,
    headingClassName,
    heading,
    desc,
    delay = 0.15,
  }) => {
    return (
      <Animation
        animation={ANIMATIONS.fadeIn}
        delay={delay}
        className={`w-44 h-fit rounded-lg bg-white bg-opacity-20 p-4 flex flex-col ${className}`}
      >
        <div
          className={`text-[44px] font-semibold self-center ${headingClassName}`}
        >
          {heading}
        </div>
        <div className="text-white font-medium font-white self-center leading-tight">
          {desc}
        </div>
      </Animation>
    );
  };

  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current && animationRef.current.setSpeed(0.3);
  }, [animationRef]);

  return (
    <div className="relative w-full flex">
      <div className="w-1/2 h-[600px] flex flex-col justify-center items-center">
        <div className="max-w-[80%] flex flex-col justify-center items-start">
          <Animation className="text-5xl font-semibold">
            <Text underlined>Hire the best</Text>
            <Text> tech guys</Text>
            <Text div className=" mb-1"></Text>
            <Text>and</Text>
            <Text className="text-secondary"> grow your business</Text>
          </Animation>
          <Animation className="text-xl font-medium mt-8" delay={0.5}>
            <Text>
              Lorem ipsum dolor sit amet dolor sit ametLorem ipsum dolor sit
              amet dolor sit amet dolor sit ametLorem ipsum
            </Text>
          </Animation>
          <Animation className="mt-6" delay={1.5}>
            <Button>Get Started</Button>
          </Animation>
        </div>
      </div>
      <div className="relative w-1/2 h-[800px]">
        <div className="absolute z-0 w-full h-full pointer-events-none opacity-90">
          <Lottie
            className="w-full h-full"
            animationData={Bubbles}
            lottieRef={animationRef}
          />
        </div>
        <div className="absolute -z-10 w-full h-full pointer-events-none bg-secondary">
          <svg className="w-full h-full" viewBox="0 0 500 500">
            <path
              d="M 370 0 l 0 120 q 0 130 -140 70 t -140 40 t 100 70 t 160 -20 t 20 80 t 0 120"
              stroke="#0F77BE"
              fill="none"
              strokeWidth={3}
              strokeOpacity={0.5}
              className="animated-path"
            ></path>
          </svg>
        </div>
        <div className="relative z-20 w-full h-full flex justify-center items-center pointer-events-none">
          <div className="absolute w-4/5 h-[300px] mb-40 flex flex-col justify-between">
            <FancyText className="self-end ">
              Tech Solutions, Simplified.
            </FancyText>
            <div className="flex flex-col self-start relative">
              <FancyImage
                src={SatisfiedClient}
                className={"absolute -top-[40px] left-5"}
                delay={0.5}
              />
              <FancyText className={"mt-20"} delay={0.5}>
                26k+ Happy clients
              </FancyText>
            </div>
            <FancyText
              className="self-end flex items-center"
              icon={Tick}
              delay={1}
            >
              92% boost in audience retention
            </FancyText>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[550px] w-full h-[420px] pt-24 pb-14 px-16 bg-cover flex justify-between"
        style={{ backgroundImage: `url(${Wave})` }}
      >
        <Animation className="text-[44px] font-semibold leading-tight">
          <Text div className="text-white" underlined>
            We have helped
          </Text>
          <Text div className="text-white">
            thousands of dreams
          </Text>
          <Text div className="text-white">
            come true
          </Text>
        </Animation>
        <div className="flex gap-10">
          <FancyBox
            heading={"$25M+"}
            desc={"Revenue that can be tracked across our portfolio"}
            className={"self-start"}
            headingClassName={"text-orange-300"}
            delay={0.15}
          />
          <FancyBox
            heading={"350%"}
            className={"self-end"}
            headingClassName={"text-lime-200"}
            desc={"Average annual growth rate among our clients"}
            delay={0.5}
          />
          <FancyBox
            heading={"90%"}
            className={"self-center"}
            headingClassName={"text-yellow-300"}
            desc={"Average annual growth rate among our clients"}
            delay={1}
          />
        </div>
      </div>
      <div className="absolute top-[950px] w-full h-[420px]">
        <img src={Laptop} alt="" className="w-[600px]" />
      </div>
      <div className="absolute top-[950px] w-1/2 z-10 left-[200px] pointer-events-none">
        <Animation delay={1}>
          <FloatingPhone />
        </Animation>
      </div>
    </div>
  );
};

const OurOffer = () => {
  return (
    <div className="flex mt-[200px] w-full h-[500px] justify-end items-center px-[10%]">
      <div className="max-w-[480px] mb-40">
        <Animation className="text-5xl font-semibold">
          <Text underlined>What we have</Text>
          <Text className="text-secondary"> to offer</Text>
        </Animation>
        <Animation className="mt-3" delay={0.5}>
          <Text>
            Lorem ipsum dolor sit amet dolor sit ametLorem ipsum dolor sit amet
            dolor sit amet dolor sit ame
          </Text>
        </Animation>
      </div>
    </div>
  );
};

const Benefits = () => {
  const Card = ({ icon, title, desc, className, extra, delay = 0.15 }) => {
    return (
      <div
        className={`w-[330px] h-[500px] rounded-lg p-4 leading-tight flex flex-col justify-between items-start group hover:scale-105 transition-all duration-1000 select-none ${className}`}
      >
        <div>
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mt-10 group-hover:-translate-y-10 transition-all duration-1000">
            <img src={icon} alt="" className="w-12 h-12" />
          </div>
          <Animation
            className="text-4xl font-semibold mb-4 mt-2 !translate-y-0 group-hover:!-translate-y-10 transition-all duration-1000"
            delay={delay}
          >
            <Text className="text-white decoration-primary" underlined>
              {title}
            </Text>
          </Animation>
          <Animation className="font-bold text-lg mb-4 leading-none !translate-y-0 group-hover:!-translate-y-10 transition-all duration-1000">
            <Text className="text-white">{desc}</Text>
          </Animation>
          <Animation className="font-medium !opacity-0 mt-4 group-hover:!opacity-100 group-hover:mt-0 !translate-y-0 group-hover:!-translate-y-8   overflow-hidden transition-all duration-700">
            <Text className="text-white">{extra}</Text>
          </Animation>
        </div>
        <div className="w-11/12 mx-auto rounded-full bg-white text-primary font-semibold text-lg py-2 mb-10 group-hover:mb-5 opacity-0 group-hover:opacity-100 transition-all duration-1000 text-center cursor-pointer hover:bg-gray-300">
          Explore More
        </div>
      </div>
    );
  };
  return (
    <div className="flex justify-center gap-14">
      <Card
        icon={Book}
        title={"Benefit Title 3"}
        desc={"Lorem ipsum dolor sit amet dolor sit amet"}
        extra={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
        }
        className={"bg-secondary bg-opacity-70 mt-20"}
      />
      <Card
        icon={Book}
        title={"Benefit Title 2"}
        desc={"Lorem ipsum dolor sit amet dolor sit amet"}
        extra={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
        }
        className={"bg-mid bg-opacity-70 mt-10"}
      />
      <Card
        icon={Book}
        title={"Benefit Title 1"}
        desc={"Lorem ipsum dolor sit amet dolor sit amet"}
        extra={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
        }
        className={"bg-primary bg-opacity-70"}
      />
    </div>
  );
};

const Upgrades = () => {
  return (
    <div className="my-40">
      <div className="flex justify-between px-20 items-center">
        <div className="text-4xl font-semibold">
          <Animation>
            <Text underlined>Offer yourself</Text>
            <Text underlined className="text-secondary">
              {" "}
              an
            </Text>
            <Text div className="text-secondary">
              upgrade for better
            </Text>
          </Animation>
        </div>
        <Animation delay={0.4} className="font-semibold mr-16">
          <Text div>Explore Our Work: Discover Projects by Category</Text>
          <Text>Select a Category to View Projects</Text>
        </Animation>
      </div>
      <div></div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Introduction />
      <OurOffer />
      <Benefits />
      <Upgrades />
      <Projects />
      <Reviews />
    </div>
  );
};

export default Home;
