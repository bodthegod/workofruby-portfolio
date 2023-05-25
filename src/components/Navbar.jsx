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
  border-radius: 50em;
  background-color: white;
  border: 4px solid #ff69b4;
  border-radius: 25px;
  padding: 10px 10px;
  margin-top: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 100px;
  width: 125px;
  margin-left: 10rem;
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
  margin-right: 10rem;
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
