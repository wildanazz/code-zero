import styled from 'styled-components';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Identity from './Identity/Identity';
import Home from './Home/Home';

const StyledApp = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

function App(): JSX.Element {
  return (
    <StyledApp>
      <Background />
      <Navbar />
      <Home />
      <Identity />
    </StyledApp>
  );
}

export default App;
