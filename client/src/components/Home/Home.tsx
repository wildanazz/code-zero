import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const StyledHome = styled(motion.div)`
  position: relative;
  overflow-x: hidden;
  z-index: 1;
`;

const StyledHomeContainer = styled(motion.div)`
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
  max-width: 60.625em;
  padding-top: 320px;
`;

function Home(): JSX.Element {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <StyledHome>
      <StyledHomeContainer>
        <motion.div
          style={{
            y: y1,
            x: -50,
            width: '150px',
            height: '150px',
            borderRadius: '1em',
            backgroundColor: 'salmon',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <motion.div
          style={{
            y: y2,
            x: 50,
            width: '150px',
            height: '150px',
            borderRadius: '1em',
            backgroundColor: '#f9f07e',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </StyledHomeContainer>
    </StyledHome>
  );
}

export default Home;
