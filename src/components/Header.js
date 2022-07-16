import React from 'react';
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg';
import Text from './Text';
import './header.css';
import Button from './Button';

export default function Header() {
  const [toggle, setToggle] = React.useState(false);

  function toggleMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <nav className="navbar">
      <Logo></Logo>

      <ul className={`nav-menu${toggle ? ' active' : ''}`}>
        <li className="nav-item">
          <a className="nav-link">
            <Text type="h4">STORIES</Text>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <Text type="h4">FEATURES</Text>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <Text type="h4">PRICING</Text>
          </a>
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
  );
}
