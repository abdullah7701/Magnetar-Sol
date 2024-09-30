import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
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

const ProjectCard = ({
  img,
  desc,
  link,
  index,
  isInView,
  leftAlligned = true,
}) => {
  const { scene, nodes } = useClonedGLTF("3d models/card.glb");
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [targetScale, setTargetScale] = useState(0);

  const [currentScale, setCurrentScale] = useState(0); // This will be interpolated

  useEffect(() => {
    if (targetScale !== 0) return;
    setTimeout(() => {
      setTargetScale(isInView ? 0.25 : 0);
    }, index * 1000);
  }, [isInView, index, targetScale]);

  useFrame(() => {
    if (cardRef.current) {
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);
      cardRef.current.scale.set(newScale, newScale, newScale);
      setCurrentScale(newScale);
    }
  });

  useEffect(() => {
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

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(-1, 1);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.font = "48px Arial";
    lines.forEach((line, index) => {
      ctx.fillText(line, startX, startY + index * lineHeight);
    });
    ctx.font = "80px Arial";
    ctx.fillText("Test", canvas.width / 2, canvas.height / 2 - 320);

    ctx.restore();

    const newTexture = new THREE.CanvasTexture(canvas);
    newTexture.needsUpdate = true;

    if (nodes.Plane003) {
      nodes.Plane003.material = new THREE.MeshBasicMaterial({
        map: newTexture,
        transparent: true,
      });
    }
  }, [desc, cardRef, hovered]);

  // Positioning based on index (0: top right, 1: bottom right, 2: bottom left)
  let position = [0, 0, 0];
  switch (index) {
    case 0:
      position = !leftAlligned ? [-2.5, 1, 0] : [2.5, 1, 0]; // Top right, adjust as needed
      break;
    case 1:
      position = !leftAlligned ? [0, 0, 0] : [0, 0, 0]; // Bottom right
      break;
    case 2:
      position = !leftAlligned ? [2.5, -1, 0] : [-2.5, -1, 0]; // Bottom left
      break;
    default:
      break;
  }

  return (
    <group
      onClick={() => console.log("Card clicked: ", index)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={position}
    >
      <primitive object={scene} ref={cardRef} />
    </group>
  );
};

export default ProjectCard;
