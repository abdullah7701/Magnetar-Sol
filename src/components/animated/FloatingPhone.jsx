import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import AnimatedCard from "./AnimatedCard";

function Phone() {
  const phoneRef = useRef();
  const { scene } = useGLTF("3d models/smartphone.glb");

  const [rotationSpeed] = useState(0.5); // Rotation speed
  const [bounceSpeed] = useState(1); // Bounce speed
  const [bounceHeight] = useState(0.2); // Bounce height

  // Use frame to create a smooth oscillating rotation and bouncing effect
  useEffect(() => {
    if (phoneRef.current) {
      phoneRef.current.rotation.x = Math.PI / 12; // 30 degrees in radians
    }
  }, [phoneRef]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // Sine function for smooth back-and-forth rotation
    const rotation = Math.sin(time * rotationSpeed) * (Math.PI / 8); // 90 degrees (π/2 radians)
    phoneRef.current.rotation.y = rotation + Math.PI / 6;

    // Sine function for bouncing effect (up and down)
    const bounce = Math.sin(time * bounceSpeed) * bounceHeight;
    phoneRef.current.position.y = bounce;
  });

  return <primitive ref={phoneRef} object={scene} />;
}

const FloatingPhone = () => {
  return (
    <Canvas
      style={{
        height: "80vh",
      }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Phone />
    </Canvas>
  );
};

export default FloatingPhone;
