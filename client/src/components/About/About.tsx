import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledAbout = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledParagraph = styled(motion.p)`
  color: #ffcb74;
  font-size: 1.125em;
  letter-spacing: 0.06em;
  text-align: center;
`;

function About(): JSX.Element {
  return (
    <StyledAbout>
      <StyledParagraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </StyledParagraph>
    </StyledAbout>
  );
}

export default About;
