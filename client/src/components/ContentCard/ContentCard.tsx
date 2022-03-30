import styled from 'styled-components';

interface ContentCardProps {
  styles?: {
    position?: string;
    height?: string;
    width?: string;
  };
  children?: React.ReactNode;
}

const StyledContentCard = styled.div<ContentCardProps>`
  position: ${({ styles }) => styles?.position};
  height: ${({ styles }) => styles?.height};
  width: ${({ styles }) => styles?.width};
`;

function ContentCard({ styles, children }: ContentCardProps): JSX.Element {
  return <StyledContentCard styles={styles}>{children}</StyledContentCard>;
}

ContentCard.defaultProps = {
  styles: {},
  children: null,
};

export default ContentCard;
