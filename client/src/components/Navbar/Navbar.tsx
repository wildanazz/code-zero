import { Link } from 'react-router-dom';
import './Navbar.scss';

const navigations = [
  {
    id: 0,
    title: 'About',
    path: '/about',
  },
  {
    id: 1,
    title: 'Tools',
    path: '/tools',
  },
  {
    id: 2,
    title: 'Contact',
    path: '/contact',
  },
];

function Navbar(): JSX.Element {
  return (
    <div className="Navbar">
      <nav className="navigation-menu">
        {navigations.map((item) => {
          return (
            <Link key={item.id} to={item.path} className="navbar-item">
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
