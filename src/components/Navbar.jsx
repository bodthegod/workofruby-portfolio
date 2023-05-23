import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #ff69b4, rgb(147, 185, 220)) border-box;
  border-radius: 50em;
  border: 4px solid transparent;
  border-radius: 40px;
  padding: 10px 10px;
  margin-top: 10px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #93b9dc;
  color: white;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact Me</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Contact Me</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
