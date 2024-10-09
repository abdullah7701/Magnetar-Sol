import Animation from "components/animated/Animation";
import Text from "components/text/Text";
import { WEB_SERVICE_PROCESS } from "constants/serviceData";
import { useCallback, useRef, useState } from "react";
import Slider from "react-slick/lib/slider";
import Background from "resources/images/sampleProject.jpg";
import Flask from "resources/images/technologies/flask.png";
import Rails from "resources/images/technologies/rails.png";
import Laravel from "resources/images/technologies/laravel.png";
import Django from "resources/images/technologies/django.png";
import InfiniteSlider from "components/common/Slider";

const TitleAndImages = () => {
  return (
    <div className="mt-40 px-20 grid grid-cols-2 gap-10">
      <div>
        <Animation className="text-4xl font-semibold leading-tight">
          <Text underlined>CMS Devel</Text>
          <Text>opment</Text>
          <Text div className="text-mid">
            Projects
          </Text>
        </Animation>
        <Animation className="leading-tight mt-6 font-semibold" delay={0.5}>
          <Text div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Text>
          <Text div>sed do eiusmod tempor incididunt ut labore et dolore</Text>
          <Text div>magna aliqua. Ut enim ad minim veniam,</Text>
        </Animation>
      </div>
      <img src={Background} alt="" className="rounded-2xl w-full" />
      <img src={Background} alt="" className="rounded-2xl w-full -mt-40" />
      <img src={Background} alt="" className="rounded-2xl w-full" />
    </div>
  );
};

const Process = ({ data, index }) => {
  return (
    <div className="max-w-[500px]">
      <div className="text-4xl font-bold text-primary mb-4">
        {index + 1 + ". " + data.title}
      </div>
      <div className="text-sm text-black mb-2">{data.desc}</div>
    </div>
  );
};

const ProcessSelector = ({ data, index, onClick, isSelected }) => {
  return (
    <div
      className={`flex cursor-pointer select-none items-center w-[380px] rounded-lg p-2 bg-blue-100 transition-all duration-200 border-2 border-black ${
        isSelected
          ? "bg-opacity-100 border-opacity-100"
          : "bg-opacity-0 border-opacity-0 hover:border-opacity-100 "
      }`}
      onClick={onClick}
    >
      <img src={data.img} alt="" className="w-[90px] h-[90px] ml-2 mr-4" />
      <div className="text-primary font-semibold text-2xl">
        {index + 1 + ". " + data.title}
      </div>
    </div>
  );
};

const Technologies = () => {
  const Breaker = () => <div className="border-r border-[#B7B7B7] h-20" />;
  const TechImg = ({ src }) => (
    <img src={src} alt="" className="mx-16 w-48 h-14 my-5 object-contain" />
  );

  return (
    <InfiniteSlider
      className={"relative shadow-xl py-10 px-4 rounded-2xl mt-20 mb-40"}
    >
      <div className="flex items-center rounded-2xl">
        <TechImg src={Django} />
        <Breaker />
        <TechImg src={Laravel} />
        <Breaker />
        <TechImg src={Rails} />
        <Breaker />
        <TechImg src={Flask} />
        <Breaker />
        <TechImg src={Django} />
        <Breaker />
        <TechImg src={Laravel} />
        <Breaker />
        <TechImg src={Rails} />
        <Breaker />
        <TechImg src={Flask} />
        <Breaker />
      </div>
    </InfiniteSlider>
  );
};

const Processes = () => {
  const [current, setCurrent] = useState(0);

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "custom-slick-dots",
    arrows: false,
    autoplay: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrent(newIndex);
    },
  };

  const processes = WEB_SERVICE_PROCESS;

  const displaySlide = useCallback((index = -1) => {
    if (!sliderRef.current) return;
    if (index === -1) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickGoTo(index);
    }
  }, []);

  return (
    <div className="mx-20 mt-20">
      <div>
        <Animation className="text-4xl font-semibold leading-tight">
          <Text underlined div>
            From Initial idea to Launch:
          </Text>
          <Text div className="text-mid">
            Our Web development process
          </Text>
        </Animation>
      </div>
      <Animation>
        <div className="flex mt-10">
          <div className="flex justify-center items-center px-20 py-6 shadow-lg rounded-2xl mt-10">
            <div className="w-52 h-52 relative">
              {processes.map((process, index) => (
                <img
                  src={process.img}
                  alt=""
                  className={`absolute w-full h-full ${
                    index === current ? "opacity-100" : "opacity-0 select-none"
                  } transition-opacity duration-500 cursor-pointer`}
                  onClick={() => displaySlide()}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 mt-20 ml-40">
            <Slider
              {...sliderSettings}
              ref={(slider) => (sliderRef.current = slider)}
            >
              {processes.map((process, index) => (
                <Process data={process} index={index} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-10 mt-10 w-full">
          {processes.map((process, index) => (
            <ProcessSelector
              data={process}
              index={index}
              isSelected={index === current}
              onClick={() => displaySlide(index)}
            />
          ))}
        </div>
      </Animation>
      <Animation className="text-4xl font-semibold leading-tight mt-32">
        <Text underlined>Crafting Solutions</Text>
        <Text> with</Text>
        <Text div className="!text-mid">
          Industry-Leading Frameworks
        </Text>
      </Animation>
      <Technologies />
    </div>
  );
};

const WebService = () => {
  return (
    <div>
      <TitleAndImages />
      <Processes />
    </div>
  );
};

export default WebService;
