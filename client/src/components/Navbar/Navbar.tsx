import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import navigations from './navigations.js';
import Curtain from '../Curtain/Curtain';
import Identity from '../Identity/Identity';
import Toggle from '../Toggle/Toggle';

const StyledNavbar = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 100vh;
  left: 0;
  z-index: 2;
`;

const StyledMenu = styled(motion.nav)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: block;
  padding-left: 0.3em;
  margin: 10px 0;
  color: #ffcb74;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-decoration: none;
  text-transform: uppercase;
  transition-duration: 0.6s;

  :hover {
    color: #ffcb74;
    border-radius: 50px;
    padding-left: 0.6em;
    letter-spacing: 0.6em;
    transition-duration: 0.6s;
  }
`;

const navbar = {
  open: {
    bottom: 0,
  },
  closed: {
    bottom: '100vh',
  },
};

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar
      animate={isOpen ? 'open' : 'closed'}
      variants={navbar}
      transition={{
        type: 'tween',
        ease: [0.6, -0.28, 0.735, 0.045],
        duration: 0.3,
      }}
    >
      <Curtain isOpen={isOpen} />
      <Identity isOpen={isOpen} handleToggle={handleToggle} />
      <StyledMenu>
        {isOpen &&
          navigations.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: item.delay }}
              >
                <StyledLink to={item.path} onClick={handleToggle}>
                  {item.title}
                </StyledLink>
              </motion.div>
            );
          })}
      </StyledMenu>
      <Toggle isOpen={isOpen} handleToggle={handleToggle} />
    </StyledNavbar>
  );
}

export default Navbar;
