import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const LeftTop = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
  color: pink;
`;
const MiniAbout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const SubTitle = styled.h2``;
const Desc = styled.p`
  font-size: 24px;
  background: -webkit-linear-gradient(#ff69b4, #8eacd0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Button = styled.button`
  background-color: #fad0c4;
  background-image: linear-gradient(315deg, #fad0c4 0%, #f1a7f1 74%);
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

const RightBottom = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <LeftTop>
          <Title>Work Of Ruby...</Title>
          <MiniAbout>
            <Line src="./img/line.png" />
            <SubTitle>Here are my projects</SubTitle>
          </MiniAbout>
          <Desc>I am passionate about my designs... etc</Desc>
          <Button>Learn More</Button>
        </LeftTop>
        <RightBottom>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 4, 0]} />
            <Sphere args={[1, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="#ff69b4"
                attach="material"
                distort={0.7}
                speed={1}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/" />
        </RightBottom>
      </Container>
    </Section>
  );
};

export default Hero;
