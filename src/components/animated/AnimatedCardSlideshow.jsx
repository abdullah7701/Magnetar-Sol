// import AnimatedCard from "./AnimatedCard";
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import * as THREE from "three";
// import { PROJECTS } from "constants/projects";

// const Background = () => {
//   const bgTexture = useLoader(THREE.TextureLoader, "dett.jpg");


//   const bgGeometry = useMemo(() => new THREE.PlaneGeometry(13, 7), []);
//   const bgMaterial = useMemo(
//     () =>
//       new THREE.MeshBasicMaterial({
//         map: bgTexture,
//         toneMapped: false,
//       }),
//     [bgTexture]
//   );

//   return (
//     <mesh geometry={bgGeometry} material={bgMaterial} position={[0, 0, -1]} />
//   );
// };

// const AnimatedCardSlideshow = ({
//   wrapperRef,
//   selectedProject,
//   selectProject,
// }) => {
//   const [isInView, setIsInView] = useState(false);
//   const containerRef = useRef(null);
//   const [yPosition, setYPosition] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting);
//       },
//       { threshold: 0, rootMargin: "200px 0px" }
//     );

//     if (containerRef.current) observer.observe(containerRef.current);

//     return () => {
//       if (containerRef.current) {
//         // eslint-disable-next-line
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (wrapperRef.current) {
//         const { top } = wrapperRef.current.getBoundingClientRect();
//         setYPosition(Math.round(top + window.scrollY));
//       }
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleResize);
//     };
//   }, [wrapperRef]);

//   return (
//     <div
//       ref={containerRef}
//       className="-z-50 top-0 w-full h-full pointer-events-none select-none bg-primary"
//     >
//       {isInView && (
//         <Canvas
//           style={{
//             height: "100vh",
//             width: "100%",
//           }}
//           camera={{ position: [0, 0, 5], fov: 50 }}
//         >
//           <Background />

//           {PROJECTS.map((card, index) => (
//             <AnimatedCard
//               title={card.title}
//               desc={card.desc}
//               category={card.category}
//               index={index}
//               key={index}
//               parentYPosition={yPosition}
//               isSelected={index === selectedProject}
//               onClick={() => selectProject(index)}
//             />
//           ))}
//         </Canvas>
//       )}
//     </div>
//   );
// };

// export default AnimatedCardSlideshow;

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Card from "./Card";
import { PROJECTS } from "constants/projects";
import backgroundImage from '../../resources/backgrounds/BachV.jpg';

const AnimatedCardSlideshow = ({ wrapperRef, selectedProject, selectProject }) => {
  const [visibleCards, setVisibleCards] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !containerRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const scrollTop = -wrapperRect.top;
      const totalScrollableHeight = wrapperRef.current.offsetHeight - window.innerHeight;
      const scrollPerCard = totalScrollableHeight / PROJECTS.length;
      const newVisibleCards = Math.min(
        PROJECTS.length,
        Math.floor(scrollTop / scrollPerCard) + 1
      );

      setVisibleCards(newVisibleCards);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [wrapperRef]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen py-16 bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-2 max-w-7xl">
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
          <AnimatePresence>
            {PROJECTS.slice(0, visibleCards).map((card, index) => (
              <Card
                title={card.title}
                desc={card.desc}
                category={card.category}
                index={index}
                key={card.id || index}
                isSelected={index === selectedProject}
                onClick={() => selectProject(index)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCardSlideshow;
