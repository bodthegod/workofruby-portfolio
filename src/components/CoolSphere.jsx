import React, { useRef } from "react";
import { Sphere, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const CoolSphere = () => {
  const sphereRef = useRef();
  const texture = useTexture("./img/logo.png");
  const originalColor = "#f7cde2";

  const handlePointerOver = () => {
    sphereRef.current.material.color.set(hoverColor);
  };

  const handlePointerOut = () => {
    sphereRef.current.material.color.set(originalColor);
  };

  useFrame(() => {
    // Add animation or any other updates here
  });

  return (
    <mesh
      ref={sphereRef}
    >
      <Sphere args={[1, 32, 32]} scale={1.5}>
        <meshStandardMaterial
          attach="material"
          color={originalColor}
          map={texture}
        />
      </Sphere>
    </mesh>
  );
};

export default CoolSphere;
