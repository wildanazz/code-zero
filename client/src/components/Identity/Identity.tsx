import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const StyledIdentity = styled(Link)`
  position: fixed;
  top: 16px;
  left: 16px;
  height: 96px;
  width: 316px;
  z-index: 3;
`;

const spin = keyframes`
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledMark = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 96px;
  width: 96px;
  animation: ${spin} 4.2s linear infinite;
`;

const move = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(8px, 0px);
  }
  50% {
    transform: translate(0px, 0px);
  }
  75% {
    transform: translate(8px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

const StyledType = styled.h1`
  position: absolute;
  top: 0;
  left: 102px;
  margin: 24px 0;
  color: #ffcb74;
  font-family: bungee, sans-serif;
  font-weight: 800;
  font-style: normal;
  animation: ${move} 8.4s linear infinite;
`;

function Identity(): JSX.Element {
  return (
    <StyledIdentity to="/">
      <StyledMark src={logo} alt="logo" />
      <StyledType>CODEZERO</StyledType>
    </StyledIdentity>
  );
}

export default Identity;
