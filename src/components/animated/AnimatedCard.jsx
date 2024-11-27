import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { calculateCardPosition } from "utils";
import { useClonedGLTF } from "hooks/useClonedGLTF";
import { COURSE_CATEGORIES_LOGOS } from "constants/courses";

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

const AnimatedCard = ({
  title,
  desc,
  category,
  index,
  isSelected,
  onClick,
  parentYPosition = 0,
}) => {
  const { scene, nodes } = useClonedGLTF("3d models/card.glb");

  const cardRef = useRef(null);

  // Previous position and rotation for smoothing
  const prevPosition = useRef(new THREE.Vector3(0, 0, 0));
  const prevRotation = useRef(new THREE.Vector3(0, 0, 0));

  const [bounceSpeed] = useState(1.5); // Bounce speed
  const [bounceHeight] = useState(0.1); // Bounce height

  const [hovered, setHovered] = useState(false);

  const [rerenderStatus, rerender] = useState(false);

  useEffect(() => {
    // Create canvas and draw text
    if (!scene || !nodes || !cardRef.current) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 1024;

    // Icon settings
    const iconSize = 300;
    const iconX = 200; // Center horizontally
    const iconY = 100; // Padding from the top
    const iconImage = isSelected
      ? COURSE_CATEGORIES_LOGOS[category].selectedCanvas
      : COURSE_CATEGORIES_LOGOS[category].normalCanvas;

    // Draw icon
    const img = new Image();
    img.src = iconImage;
    img.onload = () => {
      ctx.drawImage(img, iconX, iconY, iconSize, iconSize);
      const newTexture = new THREE.CanvasTexture(canvas);
      newTexture.needsUpdate = true;

      if (nodes.Plane003) {
        nodes.Plane003.material = new THREE.MeshBasicMaterial({
          map: newTexture,
          transparent: true,
        });
      }
      if (nodes.Plane002) {
        nodes.Plane002.material = new THREE.MeshPhysicalMaterial({
          roughness: 0.2,
          transmission: 0.7,
          thickness: 1.5,
          color: isSelected ? "#0284C7" : "",
        });
      }
    };

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(-1, 1);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    // Text settings
    const textColor = isSelected ? "white" : "#022147";
    ctx.fillStyle = textColor;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    // Heading
    const headingFontSize = 80; // Slightly smaller than before
    const headingX = 200; // Center horizontally
    const headingY = iconY + iconSize + 100; // Below the icon
    ctx.font = `${headingFontSize}px Arial`;
    ctx.fillText(title, headingX, headingY);

    // Description text
    const descFontSize = 40; // Slightly smaller than before
    const lineHeight = 60;
    const startX = 200; // Center horizontally
    const startY = headingY + 100;

    ctx.font = `${descFontSize}px Arial`;
    const lines = splitIntoLines(desc);
    lines.forEach((line, index) => {
      ctx.fillText(line, startX, startY + index * lineHeight);
    });
  }, [title, desc, category, scene, nodes, cardRef, hovered, isSelected]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    const { x, y, rotationX, rotationY, rotationZ } = calculateCardPosition(
      index,
      parentYPosition
    );

    if (cardRef.current) {
      const bounce = Math.sin(time * bounceSpeed) * bounceHeight;

      cardRef.current.position.x = THREE.MathUtils.lerp(
        prevPosition.current.x,
        x,
        0.1
      );
      cardRef.current.position.y = THREE.MathUtils.lerp(
        prevPosition.current.y,
        y + bounce,
        0.1
      );
      cardRef.current.position.z = 0;

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
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => onClick()}
    >
      <primitive object={scene} ref={cardRef} scale={[0.25, 0.25, 0.25]} />
    </group>
  );
};

export default AnimatedCard;
