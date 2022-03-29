import styled from 'styled-components';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Identity from './Identity/Identity';
import Home from './Home/Home';
import SoundBar from './SoundBar/Soundbar';

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
      <SoundBar />
    </StyledApp>
  );
}

export default App;
