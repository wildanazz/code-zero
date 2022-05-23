import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './Background/Background';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Tooling from './Tooling/Tooling';
import SoundBar from './SoundBar/SoundBar';
import Social from './Social/Social';

function App(): JSX.Element {
  const location = useLocation();

  return (
    <motion.div
      style={{ position: 'relative' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <Background />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tools" element={<Tooling />} />
        </Routes>
      </AnimatePresence>
      <SoundBar />
      <Social />
      <Navbar />
    </motion.div>
  );
}

export default App;
