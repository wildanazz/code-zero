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

const about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    duration: 0.6,
    transition: { delay: 0.6, staggerChildren: 0.006 },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function About(): JSX.Element {
  return (
    <StyledAbout>
      <StyledParagraph
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {about.split('').map((char) => {
          return <motion.span variants={letterVariants}>{char}</motion.span>;
        })}
      </StyledParagraph>
    </StyledAbout>
  );
}

export default About;
