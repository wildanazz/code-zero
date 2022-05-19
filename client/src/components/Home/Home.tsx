import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TextScramble from './TextScramble.js';

const StyledHome = styled(motion.div)`
  position: relative;
  overflow-x: hidden;
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

const StyledHeader = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const StyledHeaderTitleContainer = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledHeaderTitle = styled.p`
  transform: none;
  font-size: 7.5em;
  color: #ffcb74;
  font-family: bungee, sans-serif;
  font-weight: 800;
  font-style: normal;
`;

const StyledContent = styled(motion.div)`
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledParagraph = styled(motion.p)`
  color: #ffcb74;
  font-size: 1.125em;
  letter-spacing: 0.06em;
`;

function scrambleText(): void {
  const phrases = ['Think', 'outside', 'the circle.', 'CODEZERO'];
  const el = document.querySelector('.title');
  const fx = new TextScramble(el);
  let counter = 0;
  const next = (): void => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 3 * 1000);
    });
    counter = (counter + 1) % phrases.length;
  };
  next();
}

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    scale: 0.65,
    y: 50,
  },
};

function Home(): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    scrambleText();
  }, []);

  return (
    <StyledHome>
      <StyledContainer>
        <StyledHeader
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          ref={ref}
        >
          <StyledHeaderTitleContainer>
            <StyledHeaderTitle className="title" />
          </StyledHeaderTitleContainer>
        </StyledHeader>
        <StyledContent>
          <motion.div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '1em',
              backgroundColor: 'salmon',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledParagraph>
          <motion.div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '1em',
              backgroundColor: '#f9f07e',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledParagraph>
          <motion.div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '1em',
              backgroundColor: 'salmon',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledParagraph>
          <motion.div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '1em',
              backgroundColor: '#f9f07e',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledParagraph>
        </StyledContent>
      </StyledContainer>
    </StyledHome>
  );
}

export default Home;
