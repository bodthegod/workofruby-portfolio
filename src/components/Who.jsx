import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const LeftTop = styled.div`
  flex: 1;
`;

const RightBottom = styled.div`
  flex: 1;
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
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <LeftTop>{/* 3d model */}</LeftTop>
        <RightBottom>
          <Title>Who am I?</Title>
          <MiniAbout>
            <Line src="./img/line.png" />
            <SubTitle>I'm a ...</SubTitle>
          </MiniAbout>
          <Desc>I love designing because it makes me happy!</Desc>
          <Button>See my work</Button>
        </RightBottom>
      </Container>
    </Section>
  );
};

export default Who;
