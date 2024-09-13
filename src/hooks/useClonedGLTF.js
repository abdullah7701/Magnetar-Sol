import { useGLTF } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import { useMemo } from "react";
import { clone } from "utils/SkeletonUtils";

export function useClonedGLTF(path) {
  const { scene, materials, animations } = useGLTF(path);
  const clonedScene = useMemo(() => clone(scene), [scene]);
  const { nodes } = useGraph(clonedScene);

  return { scene: clonedScene, materials, animations, nodes };
}
