import Particles from 'react-tsparticles';
import config from './config.json';

function Background(): JSX.Element {
  return <Particles options={config} />;
}

export default Background;
