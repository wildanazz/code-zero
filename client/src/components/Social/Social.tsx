import { motion } from 'framer-motion';
import styled from 'styled-components';
import github from './github.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import linkedin from './linkedin.svg';

const StyledSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 36px;
  bottom: 0;
  z-index: 1;

  & > *:not(:last-child) {
    margin: 8px 0;
  }
`;

const StyledLine = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: #ffcb74;
`;

const StyledIcon = styled.img`
  height: 36px;
  width: 36px;
`;

function Social(): JSX.Element {
  return (
    <StyledSocial>
      <motion.div whileHover={{ scale: 1.5 }}>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 1,
          }}
        >
          <a
            href="https://github.com/wildanazz"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon src={github} alt="github" />
          </a>
        </motion.div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.5 }}>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 1.2,
          }}
        >
          <a
            href="https://twitter.com/wildanazz"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon src={twitter} alt="twitter" />
          </a>
        </motion.div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.5 }}>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 1.4,
          }}
        >
          <a
            href="https://www.facebook.com/wildanazzwa/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon src={facebook} alt="facebook" />
          </a>
        </motion.div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.5 }}>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 1.6,
          }}
        >
          <a
            href="https://www.linkedin.com/in/muhammad-wildan-aziz-236aa7159/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon src={linkedin} alt="linkedin" />
          </a>
        </motion.div>
      </motion.div>
      <StyledLine
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
      />
    </StyledSocial>
  );
}

export default Social;
