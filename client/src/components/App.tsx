import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import SoundBar from './SoundBar/SoundBar';

function App(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <SoundBar />
    </motion.div>
  );
}

export default App;
