import ProjectCard from "components/animated/ProjectCard";
import SampleImage from "resources/images/sampleProject.jpg";

const cards = [
  {
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    image: SampleImage,
  },
  {
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    image: SampleImage,
  },
  {
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
    image: SampleImage,
  },
];

const ProjectCardSlideshow = ({ isLeftAlligned }) => {
  return (
    <div className="relative z-50 top-0 w-full h-full">
      {cards.map((card, index) => (
        <ProjectCard
          data={card}
          index={index}
          isLeftAlligned={isLeftAlligned}
        />
      ))}
    </div>
  );
};

export default ProjectCardSlideshow;
