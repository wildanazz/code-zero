import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Identity.scss';

function Identity(): JSX.Element {
  return (
    <Link className="identity" to="/">
      <img src={logo} alt="logo" id="logo-mark" />
      <h1 id="logo-type">CodeZero</h1>
    </Link>
  );
}

export default Identity;
