import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Work";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: purple;
`

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </Container>
  );
}

export default App;
