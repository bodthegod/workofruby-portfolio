import React, { useRef } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Icosahedron = () => {
    const textRef = useRef()
    useFrame(state=>(textRef.current.position.x = Math.sin(state.clock.elapsedTime) *1.5))
  return (
    <mesh>
      <icosahedronGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]}/>
          <color attach="background" args={["#ff69b4"]}/>
          <Text ref={textRef} fontSize={0.3} color="ff69b4">
            Ruby
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Icosahedron;
