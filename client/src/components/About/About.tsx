import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledAbout = styled(motion.div)`
  position: relative;
`;

const StyledContainer = styled(motion.div)`
  padding: 0 20px;
  max-width: 75em;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 30em) {
    max-width: 100%;
  }

  @media screen and (min-width: 48em) {
    max-width: 100%;
  }

  @media screen and (min-width: 60.625em) {
    max-width: 60.625em;
  }

  @media screen and (min-width: 75em) {
    max-width: 60.625em;
  }
`;

const StyledContent = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const StyledContainerParagraph = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function About(): JSX.Element {
  return (
    <StyledAbout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
    >
      <StyledContainer>
        <StyledContent>
          <StyledContainerParagraph>
            <motion.p>
              Heyo, I&apos;m a fullstack developer located in Australia. I love
              to create simple yet beautiful websites with great user
              experience. I&apos;m interested in the whole frontend stack Like
              trying new things and building great projects. I&apos;m an
              independent freelancer and blogger. I love to write blogs and read
              books. I believe everything is an Art when you put your
              consciousness in it. You can connect with me via social links.
            </motion.p>
          </StyledContainerParagraph>
        </StyledContent>
      </StyledContainer>
    </StyledAbout>
  );
}

export default About;
