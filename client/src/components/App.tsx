import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import SoundBar from './SoundBar/SoundBar';
import Social from './Social/Social';

function App(): JSX.Element {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <Background />
      <Navbar />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <SoundBar />
      <Social />
    </motion.div>
  );
}

export default App;
