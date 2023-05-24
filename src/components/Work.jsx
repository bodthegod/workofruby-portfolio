import React from "react";
import styled from "styled-components";

const data = [
  "Brand One",
  "Brand Two",
  "Brand Three",
  "Brand Four",
  "Brand Five",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px rgb(147, 185, 220);
  position: relative;
  rotate: 5deg;
  text-decoration: dotted underline pink 4px;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: textAnimation 0.7s cubic-bezier(0.90, -0.22, 0.3, 50) both;

      @keyframes textAnimation {
        from {
          width: 0%;
        }
        to {
          width: 100%;
  
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;

const Work = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Work;
