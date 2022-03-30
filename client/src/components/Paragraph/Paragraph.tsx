import styled, { CSSProperties } from 'styled-components';

interface ParagraphProps {
  styles?: CSSProperties;
  children?: React.ReactNode;
}

const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${({ styles }) => styles?.fontSize};
  color: ${({ styles }) => styles?.color};
  letter-spacing: ${({ styles }) => styles?.letterSpacing};
  text-align: ${({ styles }) => styles?.textAlign};
`;

function Paragraph({ styles, children }: ParagraphProps): JSX.Element {
  return <StyledParagraph styles={styles}>{children}</StyledParagraph>;
}

Paragraph.defaultProps = {
  styles: null,
  children: null,
};

export default Paragraph;
