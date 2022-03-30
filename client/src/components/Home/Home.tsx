import styled from 'styled-components';
import Card from '../Card/Card';
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
      <Card
        styles={{
          position: 'relative',
          height: '100vh',
          width: '100%',
        }}
      >
        <Card
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
        </Card>
      </Card>
      <Card>
        <Card styles={{ position: 'relative', minHeight: '100vh' }}>
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
        </Card>
      </Card>
    </StyledHome>
  );
}

export default Home;
