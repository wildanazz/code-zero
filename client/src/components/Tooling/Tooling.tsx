import styled from 'styled-components';
import { motion } from 'framer-motion';
import _ from 'lodash';
import tools from './tools.js';

const StyledTools = styled(motion.div)`
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

const StyledContent = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25vh 10%;
`;

const StyledLogoContainer = styled(motion.a)`
  padding: 50px;
`;

const StyledLogo = styled(motion.img)`
  height: 96px;
  width: auto;
  max-width: 100%;
`;

function Tools(): JSX.Element {
  return (
    <StyledTools
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
    >
      <StyledContainer>
        <StyledContent>
          {_.map(tools, ({ id, toolName, url, img, delay }) => {
            return (
              <StyledLogoContainer
                key={id}
                href={url}
                target="_blank"
                initial={{ opacity: 0, transform: 'scale(0)' }}
                animate={{ opacity: 1, scale: [0, 1.15, 1] }}
                transition={{
                  type: 'spring',
                  duration: 1.2,
                  delay,
                }}
              >
                <StyledLogo
                  src={`${process.env.PUBLIC_URL}/assets/logo/${img}`}
                  alt={toolName}
                />
              </StyledLogoContainer>
            );
          })}
        </StyledContent>
      </StyledContainer>
    </StyledTools>
  );
}

export default Tools;
