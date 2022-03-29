import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import navigations from './navigations.js';
import Curtain from '../Curtain/Curtain';
import Toggle from '../Toggle/Toggle';

interface NavigationProps {
  isOpen: boolean;
}

const StyledNavbar = styled.div<NavigationProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: ${({ isOpen }) => (isOpen ? 0 : '100vh')};
  left: 0;
  z-index: 3;
  transition: ${({ isOpen }) =>
    isOpen
      ? 'bottom 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045)'
      : 'bottom 444ms cubic-bezier(0.6, -0.28, 0.735, 0.045)'};
`;

const StyledMenu = styled.nav<NavigationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 111ms ease-out 222ms;
`;

const StyledLink = styled(Link)`
  display: block;
  padding-left: 0.3em;
  margin: 10px 0;
  color: rgba(255, 203, 116, 1);
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 444ms ease-out;

  :hover {
    color: rgba(255, 203, 116, 1);
    border-radius: 50px;
    padding-left: 0.6em;
    letter-spacing: 0.6em;
  }
`;

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar isOpen={isOpen}>
      <Curtain isOpen={isOpen} />
      <StyledMenu isOpen={isOpen}>
        {navigations.map((item) => {
          return (
            <StyledLink key={item.id} to={item.path}>
              {item.title}
            </StyledLink>
          );
        })}
      </StyledMenu>
      <Toggle isOpen={isOpen} handleToggle={handleToggle} />
    </StyledNavbar>
  );
}

export default Navbar;
