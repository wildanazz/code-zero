import styled from 'styled-components';
import { motion } from 'framer-motion';

interface NavigationProps {
  isOpen: boolean;
}

const StyledCurtain = styled(motion.section)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: auto;
  left: 0;
  height: 120px;
  background-image: linear-gradient(
    to bottom,
    #00020d 0%,
    #00020d 35%,
    rgba(0, 2, 13, 0.95) 41%,
    rgba(0, 2, 13, 0.83) 51%,
    rgba(0, 2, 13, 0.12) 89%,
    rgba(0, 2, 13, 0.03) 96%,
    rgba(0, 2, 13, 0) 100%
  );
  opacity: 1;
`;

const variants = {
  open: {
    bottom: 0,
    height: '100vh',
    opacity: 0.9,
    backgroundColor: '#00020d',
  },
  closed: {
    bottom: 'auto',
    height: '120px',
    opacity: 1,
  },
};

function Curtain({ isOpen }: NavigationProps): JSX.Element {
  return (
    <StyledCurtain
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.6 }}
    />
  );
}

export default Curtain;
