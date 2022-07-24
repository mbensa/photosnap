import React from 'react';
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg';
import Text from './Text';
import './header.css';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggle, setToggle] = React.useState(false);

  function toggleMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <header>
      <nav className="navbar">
        <Logo></Logo>

        <ul className={`nav-menu${toggle ? ' active' : ''}`}>
          <li className="nav-item">
            <Link to="/stories" className="nav-link">
              <Text type="h5">STORIES</Text>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className="nav-link">
              <Text type="h5">FEATURES</Text>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">
              <Text type="h5">PRICING</Text>
            </Link>
          </li>
          <li className="nav-button">
            <Button buttonClass="darkBtn">GET AN INVITE</Button>
          </li>
        </ul>

        <div
          className={`hamburger${toggle ? ' active' : ''}`}
          onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
