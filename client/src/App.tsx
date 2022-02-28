import Particles from 'react-tsparticles';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Particles
        options={{
          background: {
            color: {
              value: '#F3E600',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: false,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#14161E',
            },
            links: {
              color: '#14161E',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 0.75,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{
            position: 'relative',
          }}
        >
          <h1 style={{ fontFamily: 'fantasy', color: '#14161E' }}>Welcome!</h1>
          <h2 style={{ fontFamily: 'inherit', color: '#14161E' }}>
            Available Soon!
          </h2>
        </div>
      </header>
    </div>
  );
}

export default App;
