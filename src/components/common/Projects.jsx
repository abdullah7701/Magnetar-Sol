import { useRef } from "react";
import Reviews from "./Reviews";

const {
  default: AnimatedCardSlideshow,
} = require("components/animated/AnimatedCardSlideshow");
const { default: WebDev } = require("components/ServicesHome/WebDev");
const { default: StickyWrapper } = require("components/StickyWrapper");

const Projects = () => {
  const wrapperRef = useRef(null);

  return (
    <div>
      <StickyWrapper id="cards" height={2800} wrapperRef={wrapperRef}>
        <div className="w-full h-[100vh] bg-red-100 bg-cover">
          <AnimatedCardSlideshow wrapperRef={wrapperRef} />
        </div>
      </StickyWrapper>
      <WebDev />
      <Reviews />
    </div>
  );
};

export default Projects;
