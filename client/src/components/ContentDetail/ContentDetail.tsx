import styled from 'styled-components';

interface ContentDetailProps {
  styles?: {
    position?: string;
    top?: string;
    left?: string;
    transform?: string;
  };
  children?: React.ReactNode;
}

const StyledContentDetail = styled.div<ContentDetailProps>`
  position: ${({ styles }) => styles?.position};
  top: ${({ styles }) => styles?.top};
  left: ${({ styles }) => styles?.left};
  transform: ${({ styles }) => styles?.transform};
`;

const StyledParagraph = styled.p`
  font-size: 1.25em;
  color: #ffcb74;
  letter-spacing: 0.05em;
  text-align: center;
`;

function ContentDetail({ styles, children }: ContentDetailProps): JSX.Element {
  return (
    <StyledContentDetail styles={styles}>
      <StyledParagraph>{children}</StyledParagraph>
    </StyledContentDetail>
  );
}

ContentDetail.defaultProps = {
  styles: {},
  children: null,
};

export default ContentDetail;
