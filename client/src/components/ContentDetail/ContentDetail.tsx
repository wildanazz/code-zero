import styled, { CSSProperties } from 'styled-components';

interface ContentDetailProps {
  styles?: CSSProperties;
  children?: React.ReactNode;
}

const StyledContentDetail = styled.div<ContentDetailProps>`
  position: ${({ styles }) => styles?.position};
  top: ${({ styles }) => styles?.top};
  left: ${({ styles }) => styles?.left};
  transform: ${({ styles }) => styles?.transform};
`;

function ContentDetail({ styles, children }: ContentDetailProps): JSX.Element {
  return <StyledContentDetail styles={styles}>{children}</StyledContentDetail>;
}

ContentDetail.defaultProps = {
  styles: null,
  children: null,
};

export default ContentDetail;
