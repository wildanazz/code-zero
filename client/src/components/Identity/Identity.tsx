import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Identity.scss';

function Identity(): JSX.Element {
  return (
    <Link className="Identity" to="/">
      <img src={logo} alt="logo" className="logo-mark" />
      <h1 className="logo-type">CodeZero</h1>
    </Link>
  );
}

export default Identity;
