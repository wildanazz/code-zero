import styled from 'styled-components';

const StyledCurtain = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 0 : 'auto')};
  left: 0;
  z-index: 1;
  height: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? '100vh' : '120px')};
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    #111111 0%,
    #111111 35%,
    rgba(17, 17, 17, 0.95) 41%,
    rgba(17, 17, 17, 0.83) 51%,
    rgba(17, 17, 17, 0.12) 89%,
    rgba(17, 17, 17, 0.03) 96%,
    rgba(17, 17, 17, 0) 100%
  );
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 0.9 : 1)};
  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? 'background-color: #111111;' : ''};
  transition: all 666ms;
`;

function Curtain({ isOpen }: { isOpen: boolean }): JSX.Element {
  return <StyledCurtain isOpen={isOpen} />;
}

export default Curtain;
