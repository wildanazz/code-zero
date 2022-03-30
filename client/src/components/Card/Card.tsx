import styled, { CSSProperties } from 'styled-components';

interface CardProps {
  styles?: CSSProperties;
  children?: React.ReactNode;
}

const StyledCard = styled.div<CardProps>`
  position: ${({ styles }) => styles?.position};
  height: ${({ styles }) => styles?.height};
  width: ${({ styles }) => styles?.width};
  top: ${({ styles }) => styles?.top};
  right: ${({ styles }) => styles?.right};
  bottom: ${({ styles }) => styles?.bottom};
  left: ${({ styles }) => styles?.left};
  transform: ${({ styles }) => styles?.transform};
  min-height: ${({ styles }) => styles?.minHeight};
`;

function Card({ styles, children }: CardProps): JSX.Element {
  return <StyledCard styles={styles}>{children}</StyledCard>;
}

Card.defaultProps = {
  styles: null,
  children: null,
};

export default Card;
