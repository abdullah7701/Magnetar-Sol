import { PROJECTS } from "constants/projects";
import { useRef, useState } from "react";

const {
  default: AnimatedCardSlideshow,
} = require("components/animated/AnimatedCardSlideshow");
const { default: WebDev } = require("components/ServicesHome/WebDev");
const { default: StickyWrapper } = require("components/StickyWrapper");

const Projects = () => {
  const wrapperRef = useRef(null);
  const [selectedProject, selectProject] = useState(0);
  return (
    <div>
      <StickyWrapper id="cards" height={2800} wrapperRef={wrapperRef}>
        <div className="w-full h-[100vh] bg-red-100 bg-cover">
          <AnimatedCardSlideshow
            wrapperRef={wrapperRef}
            selectedProject={selectedProject}
            selectProject={selectProject}
          />
        </div>
      </StickyWrapper>
      {PROJECTS[selectedProject].component}
    </div>
  );
};

export default Projects;
