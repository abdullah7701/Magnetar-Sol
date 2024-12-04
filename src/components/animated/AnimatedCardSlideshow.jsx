import AnimatedCard from "./AnimatedCard";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { PROJECTS } from "constants/projects";

const Background = () => {
  const bgTexture = useLoader(THREE.TextureLoader, "back.jpg");


  const bgGeometry = useMemo(() => new THREE.PlaneGeometry(13, 7), []);
  const bgMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: bgTexture,
        toneMapped: false,
      }),
    [bgTexture]
  );

  return (
    <mesh geometry={bgGeometry} material={bgMaterial} position={[0, 0, -1]} />
  );
};

const AnimatedCardSlideshow = ({
  wrapperRef,
  selectedProject,
  selectProject,
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "200px 0px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (wrapperRef.current) {
        const { top } = wrapperRef.current.getBoundingClientRect();
        setYPosition(Math.round(top + window.scrollY));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, [wrapperRef]);

  return (
    <div
      ref={containerRef}
      className="-z-50 top-0 w-full h-full pointer-events-none select-none bg-primary"
    >
      {isInView && (
        <Canvas
          style={{
            height: "100vh",
            width: "100%",
          }}
          camera={{ position: [0, 0, 5], fov: 50 }}
        >
          <Background />

          {PROJECTS.map((card, index) => (
            <AnimatedCard
              title={card.title}
              desc={card.desc}
              category={card.category}
              index={index}
              key={index}
              parentYPosition={yPosition}
              isSelected={index === selectedProject}
              onClick={() => selectProject(index)}
            />
          ))}
        </Canvas>
      )}
    </div>
  );
};

export default AnimatedCardSlideshow;
