import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Identity from './Identity/Identity';
import Home from './Home/Home';
import SoundBar from './SoundBar/Soundbar';
import About from './About/About';

const StyledApp = styled(motion.div)`
  background-color: #111111;
  font-family: oswald, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1em;
`;

const StyledAppContainer = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

function App(): JSX.Element {
  return (
    <StyledApp>
      <StyledAppContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.5, duration: 1 }}
      >
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Identity />
        <SoundBar />
      </StyledAppContainer>
    </StyledApp>
  );
}

export default App;
