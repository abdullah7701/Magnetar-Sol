import AnimatedCard from "./AnimatedCard";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
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
  {
    title: "Automation",
    desc: "My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else",
  },
];

const Background = () => {
  const bgTexture = useLoader(THREE.TextureLoader, "background.jpg");

  // Create a plane for the background
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

const AnimatedCardSlideshow = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

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
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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

          {cards.map((card, index) => (
            <AnimatedCard
              title={card.title}
              desc={card.desc}
              index={index}
              key={index}
            />
          ))}
        </Canvas>
      )}
    </div>
  );
};

export default AnimatedCardSlideshow;
