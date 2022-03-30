import styled from 'styled-components';
import ContentCard from '../ContentCard/ContentCard';
import ContentDetail from '../ContentDetail/ContentDetail';
import Paragraph from '../Paragraph/Paragraph';

const StyledHome = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  padding: 0 20px;
  margin: auto;
  max-width: 60.625em;
  overflow-x: hidden;
`;

function Home(): JSX.Element {
  return (
    <StyledHome>
      <ContentCard
        styles={{
          position: 'relative',
          height: '100vh',
          width: '100%',
        }}
      >
        <ContentDetail
          styles={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Paragraph
            styles={{
              fontSize: '1.25em',
              color: '#ffcb74',
              letterSpacing: '0.05em',
              textAlign: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>
        </ContentDetail>
      </ContentCard>
      <ContentCard />
    </StyledHome>
  );
}

export default Home;
