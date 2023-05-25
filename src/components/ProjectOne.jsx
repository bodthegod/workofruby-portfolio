import { OrbitControls, Stage } from "@react-three/drei";
import React, { Suspense } from "react";
import Cherries from "./Cherries";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 40px;
  padding: 20px;
  background-color: rgba(249, 139, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 3px solid rgba(249, 139, 255, 0.3);
  border-radius: 25px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProjectOne = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="sunset" intensity={1}>
            <Cherries />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Suspense>
      </Canvas>
      <Desc>I love cherries!</Desc>
    </>
  );
};

export default ProjectOne;
