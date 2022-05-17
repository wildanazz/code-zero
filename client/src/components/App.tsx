import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Soundbar from './Soundbar/Soundbar';

const StyledAppContainer = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100%;
`;

function App(): JSX.Element {
  return (
    <StyledAppContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: [0.6, -0.28, 0.735, 0.045],
        duration: 0.6,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <Background />
      </motion.div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Soundbar />
    </StyledAppContainer>
  );
}

export default App;
