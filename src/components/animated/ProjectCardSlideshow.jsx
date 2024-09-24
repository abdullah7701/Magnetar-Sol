import { Canvas } from "@react-three/fiber";
import ProjectCard from "./ProjectCard";
import useInViewport from "hooks/useInViewport";

const cards = [
  {
    title: "UI/UX Design",
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
  },
  {
    title: "Web development",
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
  },
  {
    title: "SEO",
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
  },
];

const ProjectCardSlideshow = ({ isLeftAlligned }) => {
  const [viewportRef, isInView] = useInViewport({ threshold: 0.1 });

  return (
    <div
      className="absolute -Z-50 top-0 w-full h-full pointer-events-none select-none"
      ref={viewportRef}
    >
      <Canvas
        style={{
          height: "120vh",
          width: "100%",
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        {cards.map((card, index) => (
          <ProjectCard
            title={card.title}
            desc={card.desc}
            index={index}
            key={index}
            isInView={isInView}
            leftAlligned={isLeftAlligned}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default ProjectCardSlideshow;
