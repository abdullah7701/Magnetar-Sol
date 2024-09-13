import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { calculateCardPosition } from "utils";
import { useClonedGLTF } from "hooks/useClonedGLTF";

function splitIntoLines(text) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    if (currentLine.length + word.length + 1 > 40) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += (currentLine ? " " : "") + word;
    }
  });

  if (currentLine) {
    lines.push(currentLine.trim());
  }

  return lines;
}

const AnimatedCard = ({ title, desc, index }) => {
  const { scene, nodes } = useClonedGLTF("3d models/card.glb");

  const cardRef = useRef(null);

  // Previous position and rotation for smoothing
  const prevPosition = useRef(new THREE.Vector3(0, 0, 0));
  const prevRotation = useRef(new THREE.Vector3(0, 0, 0));

  const [bounceSpeed] = useState(1.5); // Bounce speed
  const [bounceHeight] = useState(0.1); // Bounce height

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Create canvas and draw text
    if (!scene || !nodes || !cardRef.current) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 1024;

    ctx.fillStyle = "black";
    if (hovered) ctx.fillStyle = "#FF8822";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const lines = splitIntoLines(desc);

    const lineHeight = 64; // Spacing between lines
    const startX = canvas.width / 2 + 40;
    let startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2; // Center vertically

    // Draw text upside down
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(-1, 1);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.font = "48px Arial";
    lines.forEach((line, index) => {
      ctx.fillText(line, startX, startY + index * lineHeight);
    });
    ctx.font = "80px Arial";
    ctx.fillText(title, canvas.width / 2, canvas.height / 2 - 320);

    ctx.restore();

    const newTexture = new THREE.CanvasTexture(canvas);
    newTexture.needsUpdate = true;

    if (nodes.Plane003) {
      nodes.Plane003.material = new THREE.MeshBasicMaterial({
        map: newTexture,
        transparent: true,
      });
    }
  }, [title, desc, scene, nodes, cardRef, hovered]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Calculate the target position and rotation
    const { x, y, rotationX, rotationY, rotationZ } =
      calculateCardPosition(index);

    if (cardRef.current) {
      // Apply bounce
      const bounce = Math.sin(time * bounceSpeed) * bounceHeight;

      // Smoothly interpolate position
      cardRef.current.position.x = THREE.MathUtils.lerp(
        prevPosition.current.x,
        x,
        0.04
      );
      cardRef.current.position.y = THREE.MathUtils.lerp(
        prevPosition.current.y,
        y + bounce,
        0.04
      );
      cardRef.current.position.z = 0; // Assuming no change in z-axis

      // Smoothly interpolate rotation
      cardRef.current.rotation.x = THREE.MathUtils.lerp(
        prevRotation.current.x,
        rotationX,
        0.04
      );
      cardRef.current.rotation.y = THREE.MathUtils.lerp(
        prevRotation.current.y,
        rotationY,
        0.04
      );
      cardRef.current.rotation.z = THREE.MathUtils.lerp(
        prevRotation.current.z,
        rotationZ,
        0.04
      );

      // Update previous values
      prevPosition.current.set(
        cardRef.current.position.x,
        cardRef.current.position.y,
        cardRef.current.position.z
      );
      prevRotation.current.set(
        cardRef.current.rotation.x,
        cardRef.current.rotation.y,
        cardRef.current.rotation.z
      );
    }
  });

  return (
    <group
      onClick={() => console.log("Card clicked: ", index)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} ref={cardRef} scale={[0.25, 0.25, 0.25]} />
    </group>
  );
};

export default AnimatedCard;
