import { IoMenu, IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';

interface NavigationProps {
  isOpen: boolean;
  handleToggle(): void;
}

const StyledToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 36px;
  right: 36px;
  z-index: 3;
  border-radius: 50px;
  cursor: pointer;

  :hover {
    background-color: rgba(47, 47, 47, 1);
    border-radius: 50px;
    transition: all 0.2s ease-out;
  }
`;

const IconStyles = css`
  font-size: 3rem;
  color: #ffcb74;
  border-radius: 50px;
`;

const StyledIoMenu = styled(IoMenu)`
  ${IconStyles}
`;

const StyledIoClose = styled(IoClose)`
  ${IconStyles}
`;

function Toggle({ isOpen, handleToggle }: NavigationProps): JSX.Element {
  return (
    <StyledToggle role="menuitem" tabIndex={0} onClick={handleToggle}>
      {isOpen ? <StyledIoClose /> : <StyledIoMenu />}
    </StyledToggle>
  );
}

export default Toggle;
